import express from "express";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import * as projectController from "./controllers/projectController.js";
import * as taskController from "./controllers/taskController.js";
import authMiddleware from "./middleware/authMiddleware.js";
import { authenticateUser } from "./services/authService.js";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());

// Load the swagger.json file
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "src/swagger.json"), "utf8")
);

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Implement the /login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await authenticateUser(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
});

// Existing routes
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
