# Aplicação de Banco de Dados
**Data: 15/06/2026  Valor: 5,0 pontos.**

## Pré-requisitos e Diretrizes
Trabalho feito individualmente por Ronaldo Martins Ângelo Junior. Somente esta conta do GitHub foi utilizada github.com/ronaldoangelojr-code. Aplicação desenvolvida em HTML, CSS e JavaScript, integrada a um banco de dados hospedado no Supabase.

## Contextualização e Objetivo
De acordo com o site TOTVS, o desenvolvedor full stack é um profissional capaz de desenvolver uma aplicação do começo ao fim, ou seja, do banco de dados à interface do usuário.
Sua relação com Backend as a service é de extrema produtividade e eficiência. Provedores como Firebase e Supabase já entregam prontos recursos complexos como autenticação de usuários, bancos de dados em tempo real e armazenamento de arquivos, além de ter a infraestrutura gerenciada e automatizada pelo provedor. Isto permite que o profissional entregue projetos completos muito mais rápido, delegando a parte repetitiva e pesada do back-end para plataformas especializadas.

## Comando da Questão:
Utilizando as tecnologias HTML5, CSS3 e JavaScript nativo (Vanilla JS) para o desenvolvimento do lado do cliente (Frontend), você deverá integrar sua aplicação a uma solução de banco de dados na nuvem. Para a persistência dos dados, você tem a liberdade de escolher uma das duas plataformas a seguir:
- Google Firebase: Utilizando o banco de dados NoSQL Cloud Firestore.
- Supabase: Utilizando o banco de dados relacional baseado em PostgreSQL.

A sua aplicação deverá ser capaz de realizar as operações básicas de manipulação de dados (CRUD).

## Requisitos de Segurança e Boas Práticas
O banco de dados da aplicação foi hospedado no Supabase e conta com quatro Row Level Secutity (RLS), uma para cada operação CRUD. Isto permite que qualquer usuário da aplicação possa criar, alterar, ler e deletar contatos do banco de dados.

## Passo a Passo e Critérios de Avaliação
A aplicação exibe os contatos salvos no banco de dados assim que a página é aberta em uma tabela que contém os campos "id", "Nome", "Email", "Observação" e "Data". Ela permite que o usuário possa pesquisar por um contato digitando o nome no campo de busca. Ela também permite inserir um novo contato, entretanto, contatos com o mesmo email ou telefone não podem ser adicionados. Há também as opções de alterar contatos já existentes e de deletá-los.
