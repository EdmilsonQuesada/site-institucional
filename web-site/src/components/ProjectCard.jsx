import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, className = '' }) {
    return (
        <Link
            to={`/portfolio/${project.slug}`}
            className={`group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full ${className}`}
        >
            <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                    {project.category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                    {project.description}
                </p>

                <div className="flex items-center text-blue-600 font-medium mt-auto">
                    Ver detalhes do projeto
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
