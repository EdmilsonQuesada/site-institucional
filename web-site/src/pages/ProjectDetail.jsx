import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { useProjects } from '../hooks';
import { CTA } from '../components';

export default function ProjectDetail() {
    const { slug } = useParams();
    const { getProjectBySlug, allProjects } = useProjects();

    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Projeto não encontrado</h1>
                <p className="text-gray-600 mb-8">O projeto que você está procurando não existe ou foi removido.</p>
                <Link to="/portfolio" className="btn-primary inline-flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Portfólio
                </Link>
            </div>
        );
    }

    // Encontrar projeto anterior e próximo
    const currentIndex = allProjects.findIndex(p => p.slug === slug);
    const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

    return (
        <div className="pt-20 bg-gray-50 flex flex-col min-h-screen">
            {/* Hero Header */}
            <div className="bg-white border-b border-gray-100 py-12 md:py-20">
                <div className="container-max">
                    <Link to="/portfolio" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Portfólio
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 justify-between md:items-end">
                        <div className="max-w-3xl">
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                                {project.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
                            <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
                        </div>

                        {project.liveUrl && project.liveUrl !== '#' && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center self-start whitespace-nowrap"
                            >
                                Visitar Projeto <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Image */}
            <div className="container-max -mt-8 md:-mt-12 relative z-10 mb-16">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-200 aspect-video max-h-[600px] w-full">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Content */}
            <div className="container-max pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Coluna Principal da Esquerda */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">O Desafio e a Solução</h2>
                            <div className="prose prose-lg text-gray-600 prose-blue max-w-none">
                                <p>{project.longDescription}</p>
                            </div>
                        </section>

                        {project.gallery && project.gallery.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Galeria do Projeto</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.gallery.map((img, i) => (
                                        <div key={i} className="rounded-xl overflow-hidden shadow-sm aspect-video bg-gray-100">
                                            <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar da Direita */}
                    <div className="space-y-8">
                        {/* Tecnologias */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Tecnologias Utilizadas</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Resultados */}
                        {project.results && project.results.length > 0 && (
                            <div className="bg-blue-600 p-8 rounded-2xl shadow-md text-white">
                                <h3 className="text-xl font-bold mb-6 flex items-center">
                                    <CheckCircle className="w-6 h-6 mr-2 text-blue-200" />
                                    Resultados Obtidos
                                </h3>
                                <div className="space-y-6">
                                    {project.results.map((result, i) => (
                                        <div key={i} className={i !== project.results.length - 1 ? "border-b border-blue-500 pb-6" : ""}>
                                            <p className="text-4xl font-bold mb-1">{result.value}</p>
                                            <p className="text-blue-100 font-medium">{result.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Navegação Entre Projetos */}
            <div className="border-t border-gray-200 bg-white">
                <div className="container-max">
                    <div className="flex flex-col sm:flex-row justify-between py-8 gap-4">
                        {prevProject ? (
                            <Link to={`/portfolio/${prevProject.slug}`} className="flex-1 group flex flex-col items-start p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                <span className="text-sm text-gray-500 font-medium mb-1">Projeto Anterior</span>
                                <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center">
                                    <ArrowLeft className="w-4 h-4 mr-2" /> {prevProject.title}
                                </span>
                            </Link>
                        ) : <div className="flex-1"></div>}

                        {nextProject && (
                            <Link to={`/portfolio/${nextProject.slug}`} className="flex-1 group flex flex-col items-end sm:text-right p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                <span className="text-sm text-gray-500 font-medium mb-1">Próximo Projeto</span>
                                <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center">
                                    {nextProject.title} <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <CTA title="Gostou do que viu?" description="Vamos construir a próxima história de sucesso juntos. Fale com nossa equipe hoje mesmo." />
        </div>
    );
}
