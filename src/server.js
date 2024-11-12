import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import * as projectController from "./controllers/projectController.js";
import * as taskController from "./controllers/taskController.js";
import authMiddleware from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();
app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Trello-inspired Task Management API",
      version: "1.0.0",
      description: "API documentation for Task Management project",
    },
  },
  apis: ["./src/server.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.post("/projects", authMiddleware, projectController.createProject);
app.get("/projects", authMiddleware, projectController.getAllProjects);
app.post("/projects/:id/tasks", authMiddleware, taskController.addTask);
app.put(
  "/projects/:projectId/tasks/:taskId",
  authMiddleware,
  taskController.updateTask
);
app.delete(
  "/projects/:projectId/tasks/:taskId",
  authMiddleware,
  taskController.deleteTask
);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
