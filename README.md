# API de Controle de Projetos e Tarefas

## Descrição:

Inspirada no Trello, esta API gerencia projetos e as tarefas relacionadas. Cada projeto pode ter várias tarefas associadas a ele, e os usuários podem organizá-las de acordo com o status.

## Endpoints:

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
│   │   │
│   │   └── database.js
│   │
│   ├── controllers
│   │   ├── projectController.js
│   │   └── taskController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── Project.js
│   │   ├── Task.js
│   │   └── User.js
│   │
│   ├── repositories
│   │   ├── projectRepository.js
│   │   └── taskRepository.js
│   │
│   ├── requests
│   │   └── requests.rest
│   │
│   ├── services
│   │   ├── authService.js
│   │   ├── projectService.js
│   │   └── taskService.js
│   │   │
│   ├── utils
│   │   └── errorHandler.js
│   │
│   └── server.js
│
├── .env
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```
