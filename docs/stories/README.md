# Stories — Site Institucional (Epic 1)

Status geral: **Ready** ✅ → Validadas e aprovadas pelo @po (26/02/2026)

---

## 📚 Índice de Stories

### Epic 1: Site Institucional

| ID | Story | Status | Complexidade | Pontos | Dependências |
|----|----- -|--------|-------------|--------|---|
| STORY-1.1 | [Setup e Estrutura Base](1.1-setup-base-site-institucional.md) | Ready ✅ | M | 5 | - |
| STORY-1.2 | [Homepage com Apresentação](1.2-homepage-apresentacao.md) | Ready ✅ | M | 8 | 1.1 |
| STORY-1.3 | [Portfólio e Serviços](1.3-portfolio-servicos.md) | Ready ✅ | M | 8 | 1.1 |
| STORY-1.4 | [Formulário de Contato](1.4-formulario-contato.md) | Ready ✅ | M+ | 8 | 1.1 |

---

## 🎯 Ordem Recomendada de Execução

1. **STORY-1.1** (Setup) — Desbloqueadora
2. **STORY-1.2** (Homepage) — Core feature visível
3. **STORY-1.3** (Portfólio) — Funcionalidade complementar
4. **STORY-1.4** (Contato) — Lead generation

**Estimativa Total:** 29 story points (~2-3 sprints de 2 semanas)

---

## 📋 Próximas Stories (Backlog)

Estas stories serão criadas após validação das primeiras:

- [ ] STORY-1.5: Blog/Artigos
- [ ] STORY-1.6: SEO Avançado (schema markup, sitemap)
- [ ] STORY-1.7: Analytics e Tracking (GA4, custom events)
- [ ] STORY-1.8: Admin Dashboard (CRUD de projetos, blog)
- [ ] STORY-1.9: Deploy e DevOps (CI/CD avançado, monitoring)
- [ ] STORY-1.10: Performance Optimization (caching, compression)

---

## 📖 Fluxo de Desenvolvimento

```
Story Criada (@sm)
    ↓
Validação (@po) — 10-point checklist
    ↓
Status: Ready ✅
    ↓
Desenvolvimento (@dev)
    ↓
QA Gate (@qa) — 7 quality checks
    ↓
Aprovação → Merge → Done (@devops)
```

---

## 📝 Contexto do Projeto

**Documento de Referência:** [PRD - Site Institucional](../prd/PRD-site-institucional.md)

### Requisitos Principais

✅ **Funcionais (FR):**
- Homepage atraente com apresentação
- Portfólio de projetos/serviços
- Blog/Conteúdo (backlog)
- Formulário de contato com lead capture

✅ **Não-Funcionais (NFR):**
- Performance: < 3s carregamento (4G mobile)
- Lighthouse score >= 90
- Responsividade: Mobile-first, 5+ breakpoints
- WCAG 2.1 Level AA
- 99.5% uptime
- HTTPS + segurança básica

---

## 🔍 Como Usar Este Diretório

### Para Desenvolvedores (@dev)

1. Leia a story completa
2. Consulte "Critérios de Aceitação"
3. Siga o "Escopo" (IN/OUT)
4. Atualize "File List" conforme progride
5. Mantenha "Dev Notes" e "Change Log" sincronizados

### Para QA (@qa)

1. Verifique todos os AC passam
2. Execute "Critério de Done"
3. Valide responsividade + performance
4. Preecha "QA Results"

### Para Product (@po)

1. Valide contra PRD
2. Confirm scope antes de @dev iniciar
3. Atualize status para "Ready" após validação

---

## 🚀 Próximos Passos

- [x] @po: Validar stories (10-point checklist) — **CONCLUÍDO**
- [x] @po: Atualizar status para "Ready" — **CONCLUÍDO**
- [ ] @dev: Iniciar STORY-1.1 (Setup)
- [ ] @dev: Commit inicial com estrutura base

---

## 📝 Validation Log

**@po Validation Report — 26/02/2026**

```
STORY-1.1: Setup Base
├─ Título: ✅ Clear and objective
├─ Descrição: ✅ Complete (stack, structure, CI/CD)
├─ AC (10): ✅ Testable, BDD format
├─ Escopo: ✅ IN/OUT clear
├─ Dependências: ✅ Desbloqueadora, pré-requisitos listados
├─ Complexidade: ✅ M + 5 pontos
├─ Valor Negócio: ✅ P0, fundação sólida
├─ Riscos: ✅ 3 riscos documentados
├─ Critério Done: ✅ 9-item checklist
├─ Alinhamento PRD: ✅ React, Vite, testing, CI/CD
└─ Score: 10/10 → GO ✅

STORY-1.2: Homepage
├─ (todas 10 subcategorias validadas)
└─ Score: 10/10 → GO ✅

STORY-1.3: Portfólio
├─ (todas 10 subcategorias validadas)
└─ Score: 10/10 → GO ✅

STORY-1.4: Formulário Contato
├─ (todas 10 subcategorias validadas)
└─ Score: 10/10 → GO ✅
```

**DECISÃO FINAL:** ✅ **TODAS APROVADAS** (29 story points)

---

*Última atualização: 26/02/2026*
