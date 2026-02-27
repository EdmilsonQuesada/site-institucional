export const projects = [
    {
        id: 'e-commerce-premium',
        title: 'E-commerce Premium',
        slug: 'e-commerce-premium',
        category: 'E-commerce',
        description: 'Plataforma de vendas online completa com foco em alta conversão, experiência imersiva para o usuário e painel administrativo customizado.',
        longDescription: 'Desenvolvemos uma plataforma completa de e-commerce partindo do zero, visando resolver gargalos de performance e usabilidade que o cliente enfrentava. A arquitetura foi pensada para suportar picos de tráfego, integrando um checkout transparente e seguro.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&q=80',
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        results: [
            { label: 'Aumento em Vendas', value: '+45%' },
            { label: 'Redução de Abandono', value: '30%' },
            { label: 'Carregamento (LCP)', value: '1.2s' }
        ],
        liveUrl: '#'
    },
    {
        id: 'app-financeiro',
        title: 'App Financeiro Integrado',
        slug: 'app-financeiro',
        category: 'Mobile',
        description: 'Aplicativo PWA para gestão financeira corporativa com dashboard analítico e relatórios em tempo real.',
        longDescription: 'O aplicativo foi desenhado para atender diretores financeiros que necessitam de dados ágeis na palma da mão. Implementamos gráficos dinâmicos, notificações push de fluxos críticos e uma interface limpa que reduz o tempo de tomada de decisão.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        ],
        technologies: ['React Native', 'Firebase', 'GraphQL', 'Tailwind'],
        results: [
            { label: 'Usuários Ativos', value: '10k+' },
            { label: 'Retenção (M1)', value: '82%' }
        ],
        liveUrl: '#'
    },
    {
        id: 'portal-corporativo',
        title: 'Portal Institucional Headless',
        slug: 'portal-corporativo',
        category: 'Web',
        description: 'Site institucional robusto em múltiplas línguas com sistema headless CMS para fácil manutenção editorial.',
        longDescription: 'Para esta corporação multinacional, substituímos um CMS obsoleto por uma abordagem Headless moderna. Isso liberou a equipe de marketing para lançar campanhas mais rapidamente, enquanto o frontend entrega tempos de resposta inferiores a 100ms globais.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'
        ],
        technologies: ['Next.js', 'Sanity CMS', 'Vercel', 'Tailwind CSS'],
        results: [
            { label: 'Crescimento SEO', value: '+120%' },
            { label: 'Tempo Publicação', value: '-80%' }
        ],
        liveUrl: '#'
    },
    {
        id: 'plataforma-ead',
        title: 'Plataforma EAD Escalonável',
        slug: 'plataforma-ead',
        category: 'Web',
        description: 'Sistema de e-learning moderno, suporte a vídeos em alta definição e gamificação do aprendizado.',
        longDescription: 'Criamos um ambiente virtual de aprendizagem inovador que aumenta o engajamento através de gamificação. A infraestrutura de vídeo foi otimizada para funcionar até em conexões lentas (3G) sem perder qualidade.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
        gallery: [],
        technologies: ['Vue.js', 'Laravel', 'AWS S3', 'Pusher'],
        results: [
            { label: 'Alunos Inscritos', value: '25k+' },
            { label: 'Conclusão de Cursos', value: '68%' }
        ],
        liveUrl: '#'
    },
    {
        id: 'dashboard-logistica',
        title: 'Dashboard de Logística 4.0',
        slug: 'dashboard-logistica',
        category: 'Web',
        description: 'Painel de controle logístico para rastreamento de frota com mapas interativos e rotas IA.',
        longDescription: 'Integração complexa com GPS e IoT dos veículos para prover visibilidade em tempo real. O algoritmo de sugestão de rotas ajudou a empresa a reduzir combustível drásticamente.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        gallery: [],
        technologies: ['React', 'Google Maps API', 'Node.js', 'Docker'],
        results: [
            { label: 'Custos Operacionais', value: '-15%' },
            { label: 'Precisão Estimativa', value: '99%' }
        ],
        liveUrl: '#'
    },
    {
        id: 'redesign-aplicativo',
        title: 'Redesign UI/UX App Saúde',
        slug: 'redesign-aplicativo',
        category: 'Design',
        description: 'Redesign completo de aplicativo de saúde focado na terceira idade e acessibilidade.',
        longDescription: 'Fizemos extensa pesquisa com usuários finais para entender pontos de atrito. A nova interface adota diretrizes estritas de acessibilidade (WCAG 2.1 AA), tipografia legível e fluxos super simplificados.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        gallery: [],
        technologies: ['Figma', 'Protopie', 'WCAG', 'User Testing'],
        results: [
            { label: 'Satisfação (CSAT)', value: '9.4/10' },
            { label: 'Suporte Chamados', value: '-40%' }
        ],
        liveUrl: '#'
    }
];

export const getCategories = () => {
    const categories = projects.map(p => p.category);
    return ['Todos', ...new Set(categories)]; // Remove duplicatas e adiciona "Todos"
};
