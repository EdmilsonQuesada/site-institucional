import { useInView } from '@/hooks/useInView';
import Card from './Card';

export default function ProjectsPreview({ data }) {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`container-max section-padding transition-all duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="heading-md mb-4">{data.headline}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Conheça alguns dos projetos que desenvolvemos para nossos clientes
        </p>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {data.projects.map((project, idx) => (
          <div
            key={project.id}
            className={`transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isInView ? `${idx * 100}ms` : '0ms',
            }}
          >
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </div>

      {/* CTA para ver mais */}
      <div className="text-center">
        <a
          href="/portfolio"
          className="btn-primary inline-block bg-blue-600 text-white hover:bg-blue-700"
        >
          {data.cta}
        </a>
      </div>
    </section>
  );
}
