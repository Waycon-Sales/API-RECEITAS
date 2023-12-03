# API-RECEITAS
API de receitas com node.js e sqlite parte 01 do trabalho final de banco de dados

Ao baixar o projeto rode o comando 'npm install' para instalar as dependencias do projeto. A seguir rode nodemon start para rodar a API.

no seu prompt de comando rode ipconfig para encontrar seu IP, copie-o e cole na variavel de host no postman, após ter feito a importação do arquivo de template do postman, que se encontra na pasta do projeto, a pasta se chama "postman_template".

#API BANCO DE DADOS - RECEITASAPI

A aplicação é uma API que tem como tema uma aplicação de receitas.
Consiste em 5 tabelas Usuários, Receitas, Refeições, Favoritos e Categorias.
A ideia é que o usuário consiga cadastrar-se, logar, criar receitas, marcar receitas como favoritos, buscar receitas por categorias, nome e etc, criar um planejamento de refeições diarias, podendo ser atreladas a uma receita ou não e realizar dentre outras operações do crud tanto nas receitas e refeições como nas suas receitas favoritas e nos seus proprios dados enquanto usuário do sistema.
A API é bem completa e foi desenvolvida pensando numa implementação por meio de um aplicativo ou website, a mesma conta com 23 rotas e todas interagem com o banco de dados criado em SQLite
Para utilizar execute a API e modifique a variavel host para o seu IP
Rotas de usuário possibilitam as seguintes funcionalidades: registrar usuário, efetuar login, selecionar usuário por nome, selecionar usuário por ID, atualizar usuário, deletar usuário;
Rotas de receitas possibilitam: inserir receita, deletar receita, atualizar receita, selecionar receita por categoria, selecionar receita por titulo, selecionar receita por ID, selecionar receita por usuário que a criou, selecionar por titulo e por usuário;
Rotas de refeições possibilitam: registrar refeição, deletar refeição, selecionar refeições de determinado usuário e atualizar refeições;
Rotas de favoritos possibilitam: registrar receita favorita, selecionar receitas favoritas do usuário e deletar favorito receita favorita;
Rota de categoria possibilita: selecionar categorias e criar as categorias fixas da aplicação.
Obs: as categorias são inseridas no momento da criação das tabelas.


