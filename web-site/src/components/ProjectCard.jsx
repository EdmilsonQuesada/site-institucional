import { Link } from 'react-router-dom';
import { useInView } from '../hooks';

export default function ProjectCard({ project }) {
  const [ref, isInView] = useInView();
  const technologies = project.technologies || [];
  const results = project.results || [];

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="no-underline"
    >
      <div
        ref={ref}
        className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col h-full transform cursor-pointer ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
      {/* Imagem do Projeto */}
      <div className="relative overflow-hidden h-48 bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tecnologias */}
        {technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map(tech => (
                <span
                  key={tech}
                  className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="inline-block text-gray-500 text-xs font-medium px-2 py-1">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Resultados destaque */}
        {results.length > 0 && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm font-bold text-blue-900 mb-2">
              {results[0].label}
            </p>
            <p className="text-lg font-bold text-blue-600">
              {results[0].value}
            </p>
          </div>
        )}

        {/* CTA */}
        <button className="w-full btn-primary py-2 mt-auto" onClick={(e) => e.preventDefault()}>
          {project.liveUrl && project.liveUrl !== '#' ? 'Ver Projeto' : 'Solicitar Proposta'}
        </button>
      </div>
      </div>
    </Link>
  );
}
