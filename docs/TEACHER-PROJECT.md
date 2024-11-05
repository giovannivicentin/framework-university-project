# Projeto API - Faculdade UniAnchieta

## Descrição

Este projeto consiste em uma API básica desenvolvida com Express e utilizando Sequelize para a comunicação com um banco de dados SQLite. A API inclui funcionalidades de autenticação de usuários com registro, login e listagem de usuários. A arquitetura do projeto é baseada em uma estrutura de Controller-Service-Repository, que facilita a manutenção e escalabilidade.

## Estrutura do Projeto

    •	Controller: É como o “recepcionista” de um sistema. Ele recebe as solicitações (pedidos) do usuário e decide para onde enviar, conectando o pedido ao serviço certo. Ele também devolve a resposta para o usuário.
    •	Module: É como uma “caixinha organizadora”. Ele agrupa coisas relacionadas (como controllers, serviços, e repositórios) em uma única unidade. Isso facilita a organização do sistema.
    •	Service: É o “faz-tudo” do sistema. Ele cuida da lógica principal e realiza as ações mais importantes, como cálculos, regras de negócios, validações, etc.
    •	Repository: É o “bibliotecário” que lida com a parte de dados. Ele sabe onde buscar, salvar, atualizar ou deletar informações do banco de dados.

## Arquitetura

O projeto está dividido nas seguintes camadas:

    1.	Controller: controllers/userController.js — Lida com as rotas de usuário e faz chamadas aos serviços.
    2.	Service: services/userService.js — Contém a lógica de registro, autenticação e listagem de usuários.
    3.	Repository: repositories/userRepository.js — Lida diretamente com as operações de banco de dados.
    4.	Model: models/User.js — Define o modelo de usuário para o Sequelize.
    5.	Configuração de Banco de Dados: config/database.js — Configura o Sequelize para usar o SQLite.

## Rotas Disponíveis

Usuários

    •	POST /api/user/register - Registra um novo usuário.

Body:

{
"username": "example_user",
"password": "example_password"
}

    •	POST /api/user/login - Faz login do usuário e retorna um token JWT.

Body:

{
"username": "example_user",
"password": "example_password"
}

    •	GET /api/user/users - Lista todos os usuários registrados.

## Instalação

    1.	Clone o repositório:

git clone <url-do-repositorio>
cd projeto-api

    2.	Instale as dependências:

npm install

    3.	Execute o projeto:

node server.js

## Tecnologias Utilizadas

    •	Express: Framework web para Node.js.
    •	Sequelize: ORM para manipulação do banco de dados.
    •	SQLite: Banco de dados relacional leve.
    •	JWT: Para autenticação de usuários.
    •	UUID: Para gerar IDs únicos para os usuários.
    •	Bcrypt: Para criptografia de senhas.

## Configuração do Banco de Dados

O arquivo de configuração do banco de dados é config/database.js, onde o Sequelize é configurado para usar o banco de dados SQLite.

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
dialect: 'sqlite',
storage: 'database'
});

sequelize.authenticate()
.then(() => {
console.log('Conexão efetuada no db com sucesso');
return sequelize.sync();
});

module.exports = sequelize;

## Iniciando o Servidor

Para iniciar o servidor, execute o comando:

node server.js

O servidor rodará na porta 3000 por padrão. Acesse http://localhost:3000 para verificar se a API está rodando.

## Melhorias Futuras

    •	Configurar Swagger para documentação automática da API.
    •	Adicionar testes para validação das funcionalidades.
    •	Melhorar a segurança e validação de dados.
    •	Implementar controle de acesso baseado em permissões.
