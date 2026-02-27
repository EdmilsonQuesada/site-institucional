import { useInView } from '@/hooks/useInView';

export default function Benefits({ data }) {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`bg-gray-50 section-padding transition-all duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">{data.headline}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Saiba por que somos a melhor escolha para seu projeto
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.benefits.map((benefit, idx) => (
            <BenefitCard
              key={idx}
              benefit={benefit}
              delay={idx * 100}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit, delay, inView }) {
  return (
    <div
      className={`bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDelay: inView ? `${delay}ms` : '0ms',
      }}
    >
      <div className="text-5xl mb-4">{benefit.icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
      <p className="text-gray-600">{benefit.description}</p>
    </div>
  );
}
