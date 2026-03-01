import { Search } from 'lucide-react';
import { useBlog } from '../hooks';
import BlogCard from '../components/BlogCard';
import CategoryFilter from '../components/CategoryFilter';

export default function Blog() {
    const {
        posts,
        categories,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        hasMore,
        loadMore
    } = useBlog();

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="container-max">
                {/* Cabeçalho */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="heading-lg mb-6 text-gray-900">Nosso Blog</h1>
                    <p className="text-xl text-gray-600">
                        Insights, tendências e guias práticos sobre tecnologia, design
                        e inovação digital para o seu negócio.
                    </p>
                </div>

                {/* Barra de Ferramentas / Filtros e Busca */}
                <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="w-full md:w-auto overflow-x-auto pb-4 md:pb-0">
                        <CategoryFilter
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryChange={setActiveCategory}
                        />
                    </div>

                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Buscar artigos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow shadow-sm bg-white"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>

                {/* Grid de Artigos */}
                {posts.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map(post => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>

                        {hasMore && (
                            <div className="mt-16 text-center">
                                <button
                                    onClick={loadMore}
                                    className="btn-secondary px-8 py-3"
                                >
                                    Carregar Mais Artigos
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-gray-400 mb-6 flex justify-center">
                            <Search className="w-16 h-16" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhum artigo encontrado</h3>
                        <p className="text-gray-600 max-w-md mx-auto">
                            Não encontramos nenhum resultado correspondente à sua busca ou filtro atual.
                            Experimente termos diferentes ou explore todas as categorias.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(''); setActiveCategory('Todos'); }}
                            className="mt-8 text-blue-600 font-bold hover:text-blue-700 bg-blue-50 px-6 py-2 rounded-full transition-colors"
                        >
                            Ver todos os artigos
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
