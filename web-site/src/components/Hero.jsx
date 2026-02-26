export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container-max section-padding text-center">
        <h1 className="heading-lg mb-4 text-white">{title || 'Bem-vindo'}</h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {subtitle || 'Desenvolvendo soluções inovadoras para o seu negócio'}
        </p>
        {ctaLink && (
          <a href={ctaLink} className="btn-primary inline-block bg-white text-blue-600 hover:bg-blue-50">
            {ctaText || 'Começar'}
          </a>
        )}
      </div>
    </div>
  );
}
