import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container-max text-center">
          <h1 className="heading-lg mb-4 text-gray-900">Projeto não encontrado</h1>
          <p className="text-gray-600 mb-8">Desculpe, não conseguimos encontrar esse projeto.</p>
          <a href="/portfolio" className="btn-primary inline-block py-3 px-6">
            Voltar ao Portfólio
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - Portfólio</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container-max">
          {/* Hero com imagem */}
          <div className="mb-16">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Conteúdo Principal */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                    {project.category}
                  </span>
                  <span className="text-gray-500">{project.year}</span>
                </div>
                <h1 className="heading-lg mb-4 text-gray-900">{project.title}</h1>
                <p className="text-xl text-gray-600">{project.longDescription}</p>
              </div>

              {/* Tecnologias */}
              <div className="mb-12">
                <h2 className="heading-md mb-4 text-gray-900">Tecnologias Utilizadas</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Galeria adicional */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-12">
                  <h2 className="heading-md mb-4 text-gray-900">Galeria</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.gallery.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${project.title} - ${idx + 1}`}
                        className="w-full h-64 object-cover rounded-lg shadow-sm"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 sticky top-32">
                <h3 className="heading-md mb-6 text-gray-900">Resultados</h3>

                <div className="space-y-6 mb-8">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="pb-6 border-b border-gray-200 last:border-0">
                      <p className="text-sm font-semibold text-gray-600 mb-2">{result.label}</p>
                      <p className="text-3xl font-bold text-blue-600">{result.value}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full btn-primary py-3 mb-4">
                  {project.liveUrl && project.liveUrl !== '#' ? 'Visitar Projeto' : 'Solicitar Proposta'}
                </button>

                <a
                  href="/portfolio"
                  className="block w-full text-center py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:border-gray-400 transition"
                >
                  Voltar ao Portfólio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
