# Kanban (To-Do List/Trello)

## Descrição:

Inspirado no modelo kanban, este projeto organiza projetos e suas tarefas associadas. Cada projeto permite o gerenciamento de múltiplas tarefas, organizadas por status. Inclui um sistema de autenticação para criação de conta, login e acesso restrito a usuários autenticados.

## Endpoints:

• POST /register - Cria um novo usuário.

• POST /login - Autentica o usuário e retorna um JWT, que deve ser usado em todas as requisições futuras.

• POST /projects - Cria um novo projeto.

• GET /projects - Lista todos os projetos.

• POST /projects/{id}/tasks - Adiciona uma tarefa a um projeto específico.

• PUT /projects/{projectId}/tasks/{taskId} - Atualiza uma tarefa específica em um projeto.

• DELETE /projects/{projectId}/tasks/{taskId} - Deleta uma tarefa específica de um projeto.

## Estrutura do Projeto

```bash
framework-university-project/
├── src
│   │
│   ├── config
│   │   └── database.js
│   │
│   ├── controllers
│   │   ├── projectController.js
│   │   ├── taskController.js
│   │   └── userController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── Project.js
│   │   ├── Task.js
│   │   └── User.js
│   │
│   ├── requests
│   │   └── requests.rest
│   │
│   ├── services
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
