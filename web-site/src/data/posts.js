export const posts = [
    {
        id: '1',
        slug: 'tendencias-desenvolvimento-web-2026',
        title: '5 Tendências de Desenvolvimento Web para 2026',
        excerpt: 'Descubra as principais tecnologias e metodologias que estão moldando o futuro da web este ano e como preparar sua empresa.',
        content: `
      <h2>Introdução</h2>
      <p>O ano de 2026 chegou trazendo grandes inovações no cenário de desenvolvimento web. Com o avanço das capacidades integradas de IA nos navegadores e arquiteturas cada vez mais distribuídas, o paradigma está mudando rapidamente.</p>

      <h2>1. Arquiteturas Baseadas em IA Nativa</h2>
      <p>A integração de IA não é mais feita apenas através de APIs externas. Web APIs nativas fornecem acesso direto a modelos embutidos no dispositivo, revolucionando o desempenho e privacidade.</p>
      
      <h2>2. WebAssembly Everywhere</h2>
      <p>Bibliotecas pesadas em C++ e Rust agora rodam primariamente no navegador com quase a mesma eficiência do nativo, liberando capacidades antes impossíveis para a web.</p>
      
      <h2>3. Hyper-personalização Real-Time</h2>
      <p>Interfaces que se moldam proativamente dependendo do contexto espacial e histórico do usuário tornaram-se o baseline para grandes corporações.</p>

      <h2>Conclusão</h2>
      <p>Para se manterem competitivas, as empresas precisam adotar essas tecnologias sem sacrificar usabilidade e acessibilidade. Entre em contato com nosssa equipe para fazer um assessment tecnológico da sua plataforma.</p>
    `,
        coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
        date: '2026-02-15',
        author: {
            name: 'Maria Silva',
            role: 'Tech Lead',
            avatar: 'https://i.pravatar.cc/150?img=1'
        },
        category: 'Tecnologia',
        readTime: '4 min'
    },
    {
        id: '2',
        slug: 'importancia-ux-conversao',
        title: 'Como UX Design Aumenta suas Taxas de Conversão',
        excerpt: 'Um bom design vai além da estética. Entenda como decisões de UI/UX impactam diretamente a métrica mais importante: faturamento.',
        content: `
      <h2>A Primeira Impressão</h2>
      <p>Estudos mostram que os usuários levam cerca de 50 milissegundos para formar uma opinião sobre seu site, decidindo se ficam ou se vão embora.</p>
      
      <h2>Fricção Zero</h2>
      <p>O conceito de "fricção zero" envolve remover todo e qualquer obstáculo no caminho do usuário até a conversão. Formulários muito longos, tempos de espera absurdos e navegação confusa são os inimigos de um bom faturamento.</p>

      <h2>O Caso Real</h2>
      <p>Implementando melhorias focadas nesta filosofia, conseguimos um aumento de 45% nas inscrições de leads para o nosso cliente de EAD em apenas 30 dias.</p>
    `,
        coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
        date: '2026-02-10',
        author: {
            name: 'João Pedro',
            role: 'UX/UI Designer',
            avatar: 'https://i.pravatar.cc/150?img=11'
        },
        category: 'Design',
        readTime: '3 min'
    },
    {
        id: '3',
        slug: 'escalando-sistemas-na-nuvem',
        title: 'Guia Prático: Escalando Sistemas na Nuvem',
        excerpt: 'Quando seu tráfego multiplica do dia para a noite, sua infraestrutura está pronta? Veja estratégias de escalabilidade.',
        content: `
      <p>A migração para a nuvem não resolve sozinha problemas de arquitetura. É preciso pensar desde o dia zero (Day-0) em elasticidade.</p>
      <p>Neste artigo, discutimos as diferenças práticas entre Serverless, Containers com Kubernetes e quando usar cada abordagem para evitar custos desnecessários em cloud.</p>
    `,
        coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        date: '2026-01-28',
        author: {
            name: 'Carlos Mendes',
            role: 'Cloud Architect',
            avatar: 'https://i.pravatar.cc/150?img=33'
        },
        category: 'Infraestrutura',
        readTime: '6 min'
    },
    {
        id: '4',
        slug: 'criando-cultura-devops',
        title: 'Cultura DevOps: Muito Além de Ferramentas',
        excerpt: 'A verdadeira transformação DevOps envolve pessoas, cultura de colaboração e quebra de silos nas empresas tradicionais.',
        content: `
      <p>É uma falácia comum pensar que contratando um Engenheiro DevOps os problemas de delivery acabarão. A implantação de uma cultura real começa pela comunicação.</p>
    `,
        coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        date: '2026-01-15',
        author: {
            name: 'Maria Silva',
            role: 'Tech Lead',
            avatar: 'https://i.pravatar.cc/150?img=1'
        },
        category: 'Negócios',
        readTime: '5 min'
    }
];

export const getBlogCategories = () => {
    const categories = posts.map(p => p.category);
    return ['Todos', ...new Set(categories)];
};
