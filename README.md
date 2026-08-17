# 🏥 Clínica Bem-Estar

Projeto acadêmico desenvolvido para a disciplina de **Design para Web II**, do curso de **Engenharia de Software**.

O projeto consiste no desenvolvimento do site institucional da **Clínica Bem-Estar**, uma clínica multidisciplinar com especialistas, serviços, convênios, pré-agendamento online, FAQ e informações de localização.

O desenvolvimento será realizado de forma incremental ao longo de **6 Sprints**, utilizando Git e GitHub para versionamento, colaboração, revisão de código e acompanhamento das User Stories.

---

## 📑 Sumário

- [Integrantes](#-integrantes)
- [Tecnologias](#-tecnologias)
- [Ambientes](#-ambientes)
- [Organização das Sprints](#-organização-das-sprints)
- [Atuação dos Papéis](#-atuação-dos-papéis)
- [Fluxo de Desenvolvimento](#-fluxo-de-desenvolvimento)
- [Padrão de Branches](#-padrão-de-branches)
- [Padrão de Commits](#-padrão-de-commits)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Responsabilidade por Arquivos](#-responsabilidade-por-arquivos)
- [Documentação](#-documentação)
- [Regras de Colaboração](#-regras-de-colaboração)
- [Code Review](#-code-review)
- [Homologação](#-homologação)
- [Peer Review](#-peer-review)

---

# 👥 Integrantes

- **Bianca Iolanda Faustino de Souza**
- **Vitor Danillo**
- **Danniel Vasconcelos**
- **Lucas Ogawa**

---

# 💻 Tecnologias

O projeto utilizará:

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Projects
- GitHub Actions

---

# 🌐 Ambientes

O projeto possuirá três níveis de desenvolvimento.

| Ambiente | Branch | Finalidade |
|---|---|---|
| Desenvolvimento | `feature/*` | Desenvolvimento individual das User Stories |
| Homologação | `develop` | Integração e testes antes da publicação |
| Produção | `main` | Versão estável e aprovada do projeto |

Fluxo:

```text
feature/*
    ↓
develop
    ↓
HMG
    ↓
main
    ↓
PROD
```

---

# 🗓 Organização das Sprints

O projeto será desenvolvido incrementalmente ao longo de **6 Sprints**.

---

## Sprint 1 — Estrutura HTML

**Objetivo:** desenvolver a estrutura HTML completa do projeto.

### Papéis

| Integrante | Papel |
|---|---|
| Bianca | Arquiteta de Estrutura |
| Danniel | Designer de Estilo |
| Vitor | Analista de Qualidade |
| Lucas | Analista de Qualidade |

### User Stories

| US | Descrição | Responsável |
|---|---|---|
| US-101 | Estruturar página inicial | Bianca |
| US-102 | Estruturar página de especialistas | Vitor |
| US-103 | Estruturar serviços e convênios | Danniel |
| US-104 | Estruturar pré-agendamento, FAQ e Como Chegar | Lucas |

### Principais responsabilidades

**Arquiteta de Estrutura**
- Acompanhar organização HTML5.
- Revisar semântica.
- Revisar headings.
- Revisar navegação.
- Participar dos Code Reviews estruturais.

**Designer de Estilo**
- Planejar a organização visual futura.
- Manter o `design-system.md`.
- Garantir que a estrutura permita estilização consistente posteriormente.
- Participar das revisões relacionadas à organização visual.

**Analistas de Qualidade**
- Validar critérios de aceite.
- Realizar validação W3C.
- Testar navegação.
- Verificar links.
- Conferir atributos `alt`.
- Conferir labels dos formulários.

---

## Sprint 2 — Estilização CSS

**Objetivo:** aplicar estilização visual completa ao projeto.

### Papéis

| Integrante | Papel |
|---|---|
| Vitor | Arquiteto de Estrutura |
| Lucas | Designer de Estilo |
| Danniel | Analista de Qualidade |
| Bianca | Analista de Qualidade |

### User Stories

| US | Descrição | Responsável |
|---|---|---|
| US-201 | Criar Design System da Clínica | Bianca |
| US-202 | Estilizar página inicial | Vitor |
| US-203 | Estilizar especialistas, serviços e convênios | Danniel |
| US-204 | Estilizar formulário, FAQ e Como Chegar | Lucas |

### Principais responsabilidades

**Arquiteto de Estrutura**
- Verificar se a estrutura HTML permanece organizada.
- Orientar ajustes necessários para aplicação dos estilos.

**Designer de Estilo**
- Definir identidade visual.
- Definir cores.
- Definir tipografia.
- Definir espaçamentos.
- Padronizar botões, cards e formulários.
- Atualizar o `design-system.md`.

**Analistas de Qualidade**
- Conferir consistência visual.
- Validar critérios de aceite.
- Testar páginas após aplicação do CSS.
- Identificar inconsistências entre páginas.

---

## Sprint 3 — Responsividade

**Objetivo:** tornar o projeto responsivo para desktop, tablet e dispositivos móveis.

### Papéis

| Integrante | Papel |
|---|---|
| Danniel | Arquiteto de Estrutura |
| Bianca | Designer de Estilo |
| Lucas | Analista de Qualidade |
| Vitor | Analista de Qualidade |

### User Stories

| US | Descrição | Responsável |
|---|---|---|
| US-301 | Tornar Home e navegação responsivas | Bianca |
| US-302 | Tornar especialistas responsivos | Vitor |
| US-303 | Tornar serviços e convênios responsivos | Danniel |
| US-304 | Tornar formulário e páginas auxiliares responsivos | Lucas |

### Principais responsabilidades

**Arquiteto de Estrutura**
- Revisar estruturas que prejudiquem responsividade.
- Orientar reorganização de componentes.

**Designer de Estilo**
- Trabalhar comportamento responsivo.
- Orientar uso de Flexbox.
- Orientar uso de CSS Grid.
- Definir Media Queries.
- Manter consistência entre dispositivos.

**Analistas de Qualidade**
- Testar diferentes resoluções.
- Identificar overflow.
- Identificar sobreposição.
- Validar legibilidade.
- Validar navegação em dispositivos móveis.

---

## Sprint 4 — HTML Semântico e SEO

**Objetivo:** aplicar HTML semântico avançado, SEO, microformatos e validações.

### Papéis

| Integrante | Papel |
|---|---|
| Lucas | Arquiteto de Estrutura |
| Vitor | Designer de Estilo |
| Bianca | Analista de Qualidade |
| Danniel | Analista de Qualidade |

### User Stories

| US | Descrição | Responsável |
|---|---|---|
| US-401 | Implementar SEO global | Bianca |
| US-402 | Aplicar semântica aos especialistas | Vitor |
| US-403 | Revisar semântica de serviços e convênios | Danniel |
| US-404 | Revisar SEO e validar estrutura completa | Lucas |

### Principais responsabilidades

**Arquiteto de Estrutura**
- Revisar tags semânticas.
- Revisar headings.
- Revisar `header`, `main`, `section`, `article`, `nav` e `footer`.
- Revisar microformatos.

**Designer de Estilo**
- Garantir que alterações semânticas não prejudiquem o layout.
- Manter consistência visual após as refatorações.

**Analistas de Qualidade**
- Executar validação W3C.
- Revisar meta tags.
- Revisar Open Graph.
- Conferir links.
- Conferir critérios de SEO.

---

## Sprint 5 — Acessibilidade WCAG AA

**Objetivo:** adequar o projeto às boas práticas de acessibilidade e WCAG nível AA.

### Papéis

| Integrante | Papel |
|---|---|
| Bianca | Arquiteta de Estrutura |
| Danniel | Designer de Estilo |
| Vitor | Analista de Qualidade |
| Lucas | Analista de Qualidade |

### User Stories

| US | Descrição | Responsável |
|---|---|---|
| US-501 | Implementar navegação por teclado | Bianca |
| US-502 | Melhorar suporte a leitores de tela | Vitor |
| US-503 | Adequar contraste e tipografia à WCAG | Danniel |
| US-504 | Tornar formulário acessível | Lucas |

### Principais responsabilidades

**Arquiteta de Estrutura**
- Revisar HTML acessível.
- Revisar labels.
- Revisar formulários.
- Revisar ordem de navegação.
- Revisar utilização de ARIA.

**Designer de Estilo**
- Ajustar contraste.
- Ajustar tipografia.
- Implementar foco visível.
- Revisar espaçamentos e legibilidade.

**Analistas de Qualidade**
- Testar navegação por teclado.
- Testar leitor de tela.
- Executar Lighthouse.
- Validar contraste.
- Conferir critérios WCAG AA.

---

## Sprint 6 — JavaScript e Entrega Final

**Objetivo:** adicionar interatividade, validação de formulário e realizar a entrega final do projeto.

### Papéis

| Integrante | Papel |
|---|---|
| Vitor | Arquiteto de Estrutura |
| Lucas | Designer de Estilo |
| Danniel | Analista de Qualidade |
| Bianca | Analista de Qualidade |

### User Stories

| US | Descrição | Responsável |
|---|---|---|
| US-601 | Implementar menu mobile | Bianca |
| US-602 | Implementar FAQ interativo | Vitor |
| US-603 | Implementar interações dos especialistas | Danniel |
| US-604 | Implementar validação do pré-agendamento | Lucas |
| US-605 | Release final e testes | Todos |

### Principais responsabilidades

**Arquiteto de Estrutura**
- Acompanhar integração entre JavaScript e HTML.
- Garantir organização do DOM e scripts.

**Designer de Estilo**
- Revisar estados visuais dos componentes interativos.
- Revisar menu mobile.
- Revisar FAQ.
- Revisar mensagens e feedbacks do formulário.

**Analistas de Qualidade**
- Realizar testes funcionais.
- Validar JavaScript.
- Testar formulário.
- Verificar console.
- Revisar responsividade.
- Revisar acessibilidade.
- Realizar validação final.

---

# 🎭 Atuação dos Papéis

Os papéis da Sprint possuem **responsabilidade transversal** e não substituem a User Story atribuída ao integrante.

Cada integrante possui:

```text
Responsabilidade de Desenvolvimento
        +
Papel da Sprint
```

Exemplo:

```text
Bianca
│
├── US-101 — Desenvolver Home
│
└── Arquiteta de Estrutura
    └── Revisar estrutura HTML das entregas da Sprint
```

## Arquiteto de Estrutura

Atua principalmente em:

```text
Backlog
   ↓
Ready
   ↓
In Progress
   ↓
Code Review
```

Responsabilidades:

- Orientar estrutura do projeto.
- Revisar organização HTML.
- Revisar semântica.
- Apoiar decisões estruturais.
- Participar dos Pull Requests com foco estrutural.

---

## Designer de Estilo

Atua principalmente em:

```text
Backlog
   ↓
Ready
   ↓
In Progress
   ↓
Code Review
```

Responsabilidades:

- Planejar identidade visual.
- Elaborar referências ou wireframes quando necessário.
- Manter o `design-system.md`.
- Garantir consistência visual.
- Revisar CSS e responsividade.
- Participar dos Pull Requests com foco visual.

---

## Analistas de Qualidade

Atuam principalmente em:

```text
Ready
   ↓
Code Review
   ↓
HMG
   ↓
PROD
```

### QA — Testes Técnicos

Responsável por:

- Navegação.
- Links.
- Console.
- W3C.
- Responsividade.
- JavaScript.
- Funcionamento técnico.

### QA — Usabilidade e Acessibilidade

Responsável por:

- Critérios de aceite.
- Legibilidade.
- Navegação por teclado.
- Contraste.
- Lighthouse.
- Leitor de tela.
- Experiência do usuário.

---

# 🔄 Fluxo de Desenvolvimento

Cada User Story deverá seguir:

```text
Backlog
   ↓
Ready
   ↓
In Progress
   ↓
Code Review
   ↓
HMG
   ↓
PROD
   ↓
Done
```

## Fluxo Git

```text
develop
   │
   ├── feature/US-101-home
   ├── feature/US-102-especialistas
   ├── feature/US-103-servicos-convenios
   └── feature/US-104-agendamento-informacoes
           │
           ↓
     Pull Request
           │
           ↓
        develop
           │
           ↓
          HMG
           │
           ↓
     develop → main
           │
           ↓
          PROD
```

Após finalizar uma User Story:

1. Conferir critérios de aceite.
2. Realizar commits.
3. Fazer `push` da branch.
4. Abrir Pull Request para `develop`.
5. Solicitar Code Review.
6. Corrigir apontamentos.
7. Obter aprovação.
8. Realizar merge em `develop`.
9. Realizar testes em HMG.
10. Corrigir eventuais problemas.
11. Aprovar a entrega.
12. Publicar em PROD quando aplicável.
13. Mover a User Story para `Done`.

---

# 🌿 Padrão de Branches

Branches permanentes:

```text
main
develop
```

Branches de desenvolvimento:

```text
feature/US-XXX-descricao
```

Exemplos:

```text
feature/US-101-home
feature/US-102-especialistas
feature/US-103-servicos-convenios
feature/US-104-agendamento-informacoes
```

Toda branch `feature/*` deverá ser criada a partir da `develop`.

---

# 📝 Padrão de Commits

Utilizar commits pequenos, objetivos e descritivos.

Exemplos:

```text
feat: cria estrutura da pagina inicial

feat: adiciona especialistas

style: estiliza formulario de agendamento

fix: corrige navegacao mobile

docs: atualiza documentacao da sprint

refactor: reorganiza estrutura HTML

test: registra validacao da sprint
```

Evitar commits genéricos como:

```text
alteracao
teste
coisas
ajuste
novo
commit
```

---

# 📂 Estrutura do Projeto

```text
clinica-bem-estar-front-end/
│
├── index.html
├── README.md
├── .gitignore
│
├── pages/
│   ├── especialistas.html
│   ├── servicos.html
│   ├── convenios.html
│   ├── agendamento.html
│   ├── faq.html
│   └── como-chegar.html
│
├── assets/
│   │
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── global.css
│   │   │
│   │   └── pages/
│   │       ├── home.css
│   │       ├── especialistas.css
│   │       ├── servicos.css
│   │       ├── convenios.css
│   │       ├── agendamento.css
│   │       ├── faq.css
│   │       └── como-chegar.css
│   │
│   ├── js/
│   │   ├── menu.js
│   │   ├── faq.js
│   │   ├── especialistas.js
│   │   └── agendamento.js
│   │
│   └── images/
│       ├── logo/
│       ├── clinica/
│       ├── especialistas/
│       ├── convenios/
│       └── icons/
│
├── docs/
│   ├── decisoes.md
│   ├── design-system.md
│   ├── sprint-01.md
│   ├── sprint-02.md
│   ├── sprint-03.md
│   ├── sprint-04.md
│   ├── sprint-05.md
│   └── sprint-06.md
│
└── .github/
    ├── pull_request_template.md
    │
    └── workflows/
        ├── deploy-hmg.yml
        └── deploy-prod.yml
```

---

# 👨‍💻 Responsabilidade por Arquivos

Durante o desenvolvimento, cada integrante deverá trabalhar principalmente nos arquivos relacionados à sua User Story.

## Sprint 1

| Integrante | US | Arquivos principais |
|---|---|---|
| Bianca | US-101 | `index.html` |
| Vitor | US-102 | `pages/especialistas.html` |
| Danniel | US-103 | `pages/servicos.html`, `pages/convenios.html` |
| Lucas | US-104 | `pages/agendamento.html`, `pages/faq.html`, `pages/como-chegar.html` |

---

## Sprint 2 e Sprint 3

| Integrante | Arquivos principais |
|---|---|
| Bianca | `variables.css`, `global.css`, `home.css` conforme a US |
| Vitor | `home.css` / `especialistas.css` conforme a Sprint |
| Danniel | `especialistas.css`, `servicos.css`, `convenios.css` |
| Lucas | `agendamento.css`, `faq.css`, `como-chegar.css` |

As alterações deverão sempre seguir a User Story atribuída na Sprint.

---

## Sprint 6

| Integrante | US | JavaScript principal |
|---|---|---|
| Bianca | US-601 | `menu.js` |
| Vitor | US-602 | `faq.js` |
| Danniel | US-603 | `especialistas.js` |
| Lucas | US-604 | `agendamento.js` |

---

# 📚 Documentação

A documentação técnica será mantida na pasta:

```text
docs/
```

## `decisoes.md`

Responsável por registrar decisões técnicas e organizacionais relevantes.

Exemplos:

- Estratégia de branches.
- Flexbox versus Grid.
- Organização das páginas.
- Decisões de SEO.
- Estratégias de acessibilidade.

---

## `design-system.md`

Responsável por registrar:

- Identidade visual.
- Cores.
- Tipografia.
- Botões.
- Formulários.
- Cards.
- Espaçamentos.
- Estados visuais.
- Diretrizes de responsividade.

O **Designer de Estilo da Sprint** será o principal responsável por manter este documento atualizado.

---

## `sprint-XX.md`

Cada Sprint possuirá sua própria documentação:

```text
sprint-01.md
sprint-02.md
sprint-03.md
sprint-04.md
sprint-05.md
sprint-06.md
```

Cada arquivo deverá registrar:

- Objetivo.
- Período.
- Papéis.
- User Stories.
- Entregas previstas.
- Decisões.
- Alterações realizadas.
- Testes.
- Validação HMG.
- Pendências.
- Problemas.
- Melhorias.
- Peer Review.
- Resultado.
- Release.

Toda alteração relevante na documentação deverá possuir commit descritivo.

Exemplo:

```text
docs: atualiza testes da sprint 1
```

---

# 🤝 Regras de Colaboração

- Cada integrante deverá utilizar sua própria conta GitHub.
- Cada User Story deverá possuir responsável definido.
- Cada integrante deverá possuir pelo menos **3 commits por Sprint**.
- Nenhum desenvolvimento deverá ser realizado diretamente na `main`.
- O desenvolvimento deverá ocorrer em branches `feature/*`.
- As branches `feature/*` deverão ser criadas a partir da `develop`.
- Toda implementação deverá passar por Pull Request.
- Outro integrante deverá revisar o Pull Request.
- O desenvolvedor não deverá ser o único responsável pela validação da própria User Story.
- Os critérios de aceite deverão ser conferidos antes da conclusão.
- Problemas identificados em Code Review ou HMG deverão ser corrigidos na branch correspondente.
- Decisões técnicas relevantes deverão ser documentadas.
- O grupo deverá realizar Peer Review ao final de cada Sprint.

---

# 🔎 Code Review

Ao finalizar uma User Story:

```text
feature/US-XXX
       ↓
Pull Request
       ↓
develop
```

Durante o Code Review:

### Arquiteto de Estrutura

Verifica:

- Estrutura.
- Semântica.
- Organização.
- Consistência do HTML.
- Manutenibilidade.

### Designer de Estilo

Verifica:

- Identidade visual.
- Tipografia.
- Cores.
- Espaçamento.
- Componentes.
- Responsividade quando aplicável.

### Analista de Qualidade

Verifica:

- Critérios de aceite.
- Funcionamento.
- Possíveis erros.
- Cenários de teste.

O responsável pela User Story deverá corrigir os apontamentos antes da aprovação.

---

# 🧪 Homologação

Após o merge na `develop`, a User Story será disponibilizada em HMG.

```text
Pull Request aprovado
        ↓
develop
        ↓
Deploy HMG
        ↓
Testes
```

Os dois Analistas de Qualidade deverão executar os testes definidos para a Sprint.

### QA Técnico

Verifica:

- Navegação.
- Links.
- Console.
- W3C.
- JavaScript.
- Responsividade.

### QA de Usabilidade e Acessibilidade

Verifica:

- Critérios de aceite.
- Legibilidade.
- Navegação por teclado.
- Contraste.
- Lighthouse.
- Experiência do usuário.

Após aprovação:

```text
HMG aprovado
      ↓
PROD
      ↓
Done
```

---

# 👥 Peer Review

Ao final de cada Sprint será realizada uma avaliação entre os integrantes.

Cada integrante avaliará os demais considerando:

- Participação.
- Cumprimento das atividades.
- Qualidade das entregas.
- Colaboração.
- Cumprimento dos prazos.
- Participação em Code Reviews.
- Comunicação.

O Peer Review é diferente do Code Review:

```text
Code Review
→ Avaliação do código e da implementação.

Peer Review
→ Avaliação da participação e colaboração do integrante durante a Sprint.
```

---

# ✅ Definition of Done

Uma User Story poderá ser considerada concluída quando:

- [ ] Critérios de aceite atendidos.
- [ ] Implementação concluída.
- [ ] Commits realizados.
- [ ] Branch enviada ao GitHub.
- [ ] Pull Request aberto.
- [ ] Code Review realizado.
- [ ] Correções concluídas.
- [ ] Merge realizado em `develop`.
- [ ] Testes em HMG aprovados.
- [ ] Sem erros críticos.
- [ ] Documentação atualizada quando necessário.
- [ ] Publicação em PROD realizada quando aplicável.
- [ ] Issue atualizada/concluída.
