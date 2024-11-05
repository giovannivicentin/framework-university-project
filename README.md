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
