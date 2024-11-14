# Kanban (To-Do List/Trello)

## Descrição:

Inspirado no modelo kanban, este projeto organiza projetos e suas tarefas associadas. Cada projeto permite o gerenciamento de múltiplas tarefas, organizadas por status. Inclui um sistema de autenticação para criação de conta, login e acesso restrito a usuários autenticados.

## Tecnologias e Bibliotecas Utilizadas

• Framework Backend: Node com Express

• Banco de Dados: SQLite com ORM Sequelize

• Autenticação: JWT (JSON Web Token)

• Utilitários: bcrypt para hash de senhas

• Documentação: Swagger para documentação da API

• Containerização: Docker e Docker Compose

## Estrutura do Projeto

```bash
/framework-university-project
│
├── /src
│   │
│   ├── /config
│   │   └── database.js
│   │
│   ├── /controllers
│   │   ├── projectController.js
│   │   ├── taskController.js
│   │   └── userController.js
│   │
│   ├── /middleware
│   │   └── authMiddleware.js
│   │
│   ├── /models
│   │   ├── index.js
│   │   ├── Project.js
│   │   ├── Task.js
│   │   └── User.js
│   │
│   ├── /requests
│   │   └── requests.rest
│   │
│   ├── /services
│   │   ├── authService.js
│   │   ├── projectService.js
│   │   └── taskService.js
│   │
│   └── server.js
│
├── .env // precisa criar o seu (se inspire no .env.example)
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Endpoints

### Autenticação de Usuário

• POST /register - Cria um novo usuário.

• POST /login - Autentica o usuário e retorna um JWT, que deve ser usado em todas as requisições futuras.

### Gerenciamento de Projetos

• POST /projects - Cria um novo projeto.

• GET /projects - Lista todos os projetos.

### Gerenciamento de Tarefas

• POST /projects/{id}/tasks - Adiciona uma tarefa a um projeto específico

• GET /projects/{id}/tasks - Recupera todas as tarefas de um projeto específico

• PUT /projects/{projectId}/tasks/{taskId} - Atualiza uma tarefa específica em um projeto

• DELETE /projects/{projectId}/tasks/{taskId} - Deleta uma tarefa específica de um projeto

## Instruções para Configurar e Executar o Projeto

1. Clonar o repositório:

```bash
git clone <repository-url>
cd framework-university-project
```

2. Configurar variáveis de ambiente:

   • Crie um arquivo .env com base no .env.example.
   
   • Defina DATABASE_URL e SECRET_KEY.

3. Instalar as dependências:

```bash
npm install
```

4. Executando a aplicação localmente:

- Com Docker:

```bash
docker-compose up --build
```

- Sem Docker:

```bash
npm start
```

5. Testes:

- Utilize o arquivo src/requests/requests.rest para testar as requisições da API.

6. Documentação da API:

- Acesse a documentação Swagger em http://localhost:3000/api-docs quando o servidor estiver em execução.
