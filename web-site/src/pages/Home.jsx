import { Helmet } from 'react-helmet-async';
import homeData from '@/data/home.json';
import {
  Hero,
  About,
  Benefits,
  ProjectsPreview,
  CTA,
} from '@/components';

export default function Home() {
  return (
    <>
      {/* Meta tags e SEO */}
      <Helmet>
        <title>{homeData.seo.title}</title>
        <meta name="description" content={homeData.seo.description} />
        <meta name="keywords" content={homeData.seo.keywords} />
        
        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={homeData.seo.ogTitle} />
        <meta property="og:description" content={homeData.seo.ogDescription} />
        <meta property="og:image" content={homeData.seo.ogImage} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homeData.seo.ogTitle} />
        <meta name="twitter:description" content={homeData.seo.ogDescription} />
      </Helmet>

      {/* Conteúdo da página */}
      <main>
        <Hero
          title={homeData.hero.headline}
          subtitle={homeData.hero.subheadline}
          ctaText={homeData.hero.ctaText}
          ctaLink={homeData.hero.ctaLink}
        />

        <About data={homeData.about} />

        <Benefits data={homeData.benefits} />

        <ProjectsPreview data={homeData.projects} />

        <CTA data={homeData.cta} />
      </main>
    </>
  );
}
