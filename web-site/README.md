# Site Institucional - Frontend

Uma aplicação web moderna construída com React 18, Vite e Tailwind CSS.

## 🚀 Quickstart

### Pré-requisitos

- Node.js 18+
- npm 8+

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

### Testes

```bash
npm run test              # Modo watch
npm run test -- --run    # Uma vez
npm run test:coverage    # Com cobertura
```

### Linting

```bash
npm run lint           # Verificar
npm run lint:fix       # Corrigir automaticamente
npm run format         # Formatar código
```

## 📚 Stack Tecnológico

| Ferramenta | Versão | Propósito |
|-----------|--------|----------|
| React | 18.2.0 | Library para interfaces |
| Vite | 7.3.1 | Build tool |
| Tailwind CSS | 4.2.1 | Styling |
| Vitest | 4.0.18 | Testing |
| ESLint | 9.39.3 | Linting |
| Prettier | 3.8.1 | Formatação |

## 📂 Estrutura

```
src/
├── components/        # Componentes reutilizáveis
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Card.jsx
│   ├── Form.jsx
│   └── Layout.jsx
├── pages/            # Páginas (futuro)
├── hooks/            # Custom hooks
├── utils/            # Utilitários
├── test/             # Setup de testes
├── App.jsx           # Componente raiz
└── index.css         # Estilos
```

## 🧩 Componentes Disponíveis

### Layout
```jsx
<Layout>
  <main>Conteúdo</main>
</Layout>
```

### Hero
```jsx
<Hero
  title="Bem-vindo"
  subtitle="Descrição"
  ctaText="Botão"
  ctaLink="/rota"
/>
```

### Card
```jsx
<Card
  title="Título"
  description="Desc"
  image="url"
  link="/rota"
/>
```

### Form
```jsx
<Form
  onSubmit={handleSubmit}
  buttonText="Enviar"
/>
```

## 🔧 Desenvolvimento

Adicionar dependência:
```bash
npm install package-name
```

Criar componente:
```bash
# 1. Criar src/components/MeuComponente.jsx
# 2. Exportar em src/components/index.js
# 3. Usar: import { MeuComponente } from '@/components'
```

## 📊 Performance Targets

- **Lighthouse:** >= 90
- **Load time:** < 2.5s (mobile)
- **Test coverage:** > 50%

## 🔄 CI/CD

GitHub Actions workflows automáticos:
- ✅ Lint
- ✅ Tests
- ✅ Build
- ✅ Deploy (main branch)

## 📝 Environment Variables

```bash
cp .env.example .env.local
```

Variáveis:
- `VITE_API_URL` — URL da API
- `VITE_GA_ID` — Google Analytics ID

## 🐛 Troubleshooting

**Build falha:**
```bash
rm -rf node_modules package-lock.json
npm install && npm run build
```

**Porta em uso:**
```bash
npm run dev -- --port 3000
```

## 📌 Checklist

- [x] Estrutura base
- [x] Componentes core
- [x] Tailwind CSS
- [x] ESLint + Prettier
- [x] Vitest + testes
- [x] CI/CD workflow
- [ ] Página de Portfólio
- [ ] Blog/CMS
- [ ] Formulário de Contato funcional

---

**Desenvolvido para STORY-1.1: Setup Base | Site Institucional**
