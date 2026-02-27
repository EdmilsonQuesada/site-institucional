import { useInView } from '@/hooks/useInView';

export default function CTA({ data }) {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`bg-blue-600 text-white section-padding transition-all duration-1000 ${
        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <div className="container-max text-center">
        <h2 className="heading-md mb-4 text-white">{data.headline}</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {data.subheadline}
        </p>
        <a
          href={data.ctaLink}
          className="btn-primary inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold"
        >
          {data.ctaText}
        </a>
      </div>
    </section>
  );
}
