import { useInView } from '@/hooks/useInView';

export default function About({ data }) {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`container-max section-padding transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto Descritivo */}
        <div>
          <h2 className="heading-md mb-6">{data.headline}</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {data.description}
          </p>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <a href="#contato" className="btn-primary inline-block">
            Fale Conosco
          </a>
        </div>

        {/* Valores (Missão, Visão, Valores) */}
        <div className="space-y-6">
          {data.values.map((value, idx) => (
            <div
              key={idx}
              className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
