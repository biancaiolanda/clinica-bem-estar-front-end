# Clínica Bem-Estar

Projeto acadêmico desenvolvido para a disciplina de Design para Web II do curso de Engenharia de Software.

## Integrantes

- Bianca Iolanda Faustino de Souza
- Vitor Danillo
- Danniel Vasconcelos
- Lucas Ogawa

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Ambientes

- Desenvolvimento: branches `feature/*`
- Homologação: branch `develop`
- Produção: branch `main`

## Organização

O projeto será desenvolvido incrementalmente ao longo de 6 sprints.

### Sprint 1

**Objetivo:** Estrutura HTML completa.

**Papéis da Sprint:**

- Bianca — Arquiteta de Estrutura
- Danniel — Designer de Estilo
- Vitor — Analista de Qualidade
- Lucas — Analista de Qualidade

**Responsabilidades principais:**

- Arquiteto de Estrutura: acompanhar a organização do HTML5, semântica, headings, navegação e estrutura das páginas.
- Designer de Estilo: acompanhar a organização visual prevista para o projeto e garantir consistência entre os elementos que futuramente receberão estilização.
- Analistas de Qualidade: realizar validação W3C, testes de navegação, conferência dos critérios de aceite e revisão das páginas desenvolvidas.

---

### Sprint 2

**Objetivo:** Estilização completa com CSS.

**Papéis da Sprint:**

- Vitor — Arquiteto de Estrutura
- Lucas — Designer de Estilo
- Danniel — Analista de Qualidade
- Bianca — Analista de Qualidade

**Responsabilidades principais:**

- Arquiteto de Estrutura: verificar se a estrutura HTML continua organizada e adequada para receber os estilos.
- Designer de Estilo: definir e acompanhar identidade visual, cores, tipografia, espaçamentos, botões, formulários e componentes.
- Analistas de Qualidade: revisar consistência visual, CSS, critérios de aceite e funcionamento das páginas após a estilização.

---

### Sprint 3

**Objetivo:** Responsividade completa para desktop, tablet e dispositivos móveis.

**Papéis da Sprint:**

- Danniel — Arquiteto de Estrutura
- Bianca — Designer de Estilo
- Lucas — Analista de Qualidade
- Vitor — Analista de Qualidade

**Responsabilidades principais:**

- Arquiteto de Estrutura: acompanhar a reorganização dos elementos para diferentes tamanhos de tela.
- Designer de Estilo: trabalhar Flexbox, CSS Grid, Media Queries e ajustes visuais responsivos.
- Analistas de Qualidade: realizar testes em diferentes resoluções, verificar overflow, sobreposição de elementos, legibilidade e navegação em dispositivos móveis.

---

### Sprint 4

**Objetivo:** HTML semântico avançado, SEO, microformatos e validação.

**Papéis da Sprint:**

- Lucas — Arquiteto de Estrutura
- Vitor — Designer de Estilo
- Bianca — Analista de Qualidade
- Danniel — Analista de Qualidade

**Responsabilidades principais:**

- Arquiteto de Estrutura: revisar tags semânticas, headings, `header`, `main`, `section`, `article`, `nav`, `footer`, microformatos e estrutura geral das páginas.
- Designer de Estilo: garantir que ajustes semânticos não prejudiquem a identidade visual e a organização do layout.
- Analistas de Qualidade: realizar validação W3C, revisar meta tags, Open Graph, SEO, links e estrutura semântica.

---

### Sprint 5

**Objetivo:** Acessibilidade e conformidade com WCAG nível AA.

**Papéis da Sprint:**

- Bianca — Arquiteta de Estrutura
- Danniel — Designer de Estilo
- Vitor — Analista de Qualidade
- Lucas — Analista de Qualidade

**Responsabilidades principais:**

- Arquiteto de Estrutura: revisar HTML acessível, labels, estrutura de formulários, ordem de navegação e uso adequado de ARIA.
- Designer de Estilo: ajustar contraste, tipografia, foco visível, espaçamento e elementos visuais para acessibilidade.
- Analistas de Qualidade: testar navegação por teclado, leitores de tela, Lighthouse, contraste e critérios WCAG AA.

---

### Sprint 6

**Objetivo:** JavaScript, interatividade, validação de formulário e entrega final.

**Papéis da Sprint:**

- Vitor — Arquiteto de Estrutura
- Lucas — Designer de Estilo
- Danniel — Analista de Qualidade
- Bianca — Analista de Qualidade

**Responsabilidades principais:**

- Arquiteto de Estrutura: acompanhar integração do JavaScript com a estrutura HTML e garantir organização do DOM.
- Designer de Estilo: revisar estados visuais dos componentes interativos, menu mobile, FAQ, formulários e feedbacks ao usuário.
- Analistas de Qualidade: realizar testes funcionais, validação JavaScript, testes de formulário, console do navegador, responsividade, acessibilidade e validação final do projeto.

---

## Fluxo de Desenvolvimento

Cada integrante deverá desenvolver suas User Stories em uma branch criada a partir da `develop`.

Exemplo:

```text
develop
   ↓
feature/US-101-home
```

Após finalizar o desenvolvimento:

1. Realizar os commits necessários.
2. Enviar a branch para o GitHub.
3. Abrir um Pull Request para a branch `develop`.
4. Solicitar revisão de outro integrante.
5. Após aprovação, realizar o merge em `develop`.
6. Validar a funcionalidade no ambiente de homologação.
7. Após aprovação da Sprint, realizar o merge de `develop` para `main`.
8. Publicar a versão aprovada em produção.

## Padrão de Branches

```text
main
develop
feature/US-XXX-descricao
```

Exemplos:

```text
feature/US-101-home
feature/US-102-especialistas
feature/US-103-servicos-convenios
feature/US-104-agendamento-informacoes
```

## Padrão de Commits

Exemplos:

```text
feat: cria estrutura da pagina inicial
feat: adiciona especialistas
style: estiliza formulario de agendamento
fix: corrige navegacao mobile
docs: atualiza documentacao da sprint
refactor: reorganiza estrutura HTML
```

## Regras de Colaboração

- Cada integrante deve trabalhar utilizando sua própria conta do GitHub.
- Cada User Story deve possuir um responsável.
- Cada integrante deverá possuir pelo menos 3 commits por sprint.
- Nenhum desenvolvimento deverá ser realizado diretamente na branch `main`.
- As branches `feature/*` devem ser criadas a partir da `develop`.
- Toda alteração deverá passar por Pull Request.
- O Pull Request deverá ser revisado por outro integrante.
- Os Analistas de Qualidade deverão validar os critérios de aceite antes da conclusão da User Story.
- O grupo deverá realizar Peer Review ao final de cada Sprint.
- Decisões técnicas relevantes deverão ser documentadas.
