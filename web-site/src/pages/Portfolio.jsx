import { useProjects } from '../hooks';
import { ProjectCard, CategoryFilter } from '../components';
import { Search } from 'lucide-react';

export default function Portfolio() {
    const {
        projects,
        categories,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery
    } = useProjects();

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="container-max">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="heading-lg mb-6 text-gray-900">Nosso Portfólio</h1>
                    <p className="text-xl text-gray-600">
                        Conheça alguns dos nossos melhores trabalhos e descubra como ajudamos
                        empresas a transformarem suas ideias em produtos digitais de impacto.
                    </p>
                </div>

                <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />

                    <div className="relative w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Buscar projetos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>

                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                        <div className="text-gray-400 mb-4">
                            <Search className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum projeto encontrado</h3>
                        <p className="text-gray-600">
                            Tente ajustar sua busca ou filtro para ver mais resultados.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(''); setActiveCategory('Todos'); }}
                            className="mt-6 text-blue-600 font-medium hover:text-blue-700"
                        >
                            Limpar filtros
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
