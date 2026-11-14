# Sprint 6 — JavaScript e Entrega Final

## Objetivo

Xxxxxxxxx

## Período

Semanas 11 a 12.

## Papéis

- Vitor — Arquiteta de Estrutura
- Lucas — Designer de Estilo
- Danniel — Analista de Qualidade
- Bianca — Analista de Qualidade

## User Stories

- US-601 — Implementar menu mobile
- US-602 — Implementar FAQ interativo
- US-603 — Implementar interações dos especialistas
- US-604 — Implementar validação do pré-agendamento
- US-605 — Release final e testes

## Decisões realizadas

- US-604 valida nome, telefone brasileiro com DDD, e-mail, especialidade obrigatória e data a partir do dia seguinte; a data é digitada no formato `DD/MM/AAAA` para evitar diferenças de formato entre navegadores.
- Erros ficam associados aos respectivos campos para tecnologias assistivas; o resumo anuncia o problema e o foco vai para o primeiro campo inválido, sem usar `alert()`.
- Como o site não possui backend integrado, o formulário informa que os dados foram validados, mas não foram enviados.

## Testes realizados

- US-604: no navegador, formulário vazio, telefone inválido, e-mail inválido e data passada exibiram erros; especialidade obrigatória, foco no primeiro campo inválido e limpeza de erros após correção também foram verificados.
- US-604: digitar `24/05/2007` ou somente `24052007` resultou em `24/05/2007`; `31/02/2027` foi recusada e a data de amanhã foi aceita.
- US-604: dados válidos não enviaram o formulário e exibiram a mensagem de que o envio não está integrado.
- US-604: em 320, 360, 414, 640, 768, 900, 1024 e 1280 px, os cinco erros permaneceram visíveis, os campos couberam na área principal e não houve rolagem horizontal.

## Pendências

- O envio efetivo depende da integração futura com um backend; a US-604 valida os dados e informa explicitamente essa limitação.

## Resultado da Sprint

- Escopo da US-604 (Lucas) implementado e validado; as demais histórias da Sprint 6 não foram incluídas neste trabalho.
