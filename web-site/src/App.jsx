import './index.css'
import { Layout, Hero, Card } from './components'

function App() {
  const featuredProjects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do primeiro projeto destacado',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do segundo projeto destacado',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do terceiro projeto destacado',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
  ];

  return (
    <Layout>
      <Hero
        title="Bem-vindo ao Site Institucional"
        subtitle="Desenvolvendo soluções inovadoras para o seu negócio"
        ctaText="Conheça Nossos Serviços"
        ctaLink="#servicos"
      />

      <section className="container-max section-padding">
        <h2 className="heading-md text-center mb-12">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default App
