import * as taskService from "../services/taskService.js";
import projectService from "../services/projectService.js";

export const addTask = async (req, res) => {
  const { name } = req.body;
  const projectId = parseInt(req.params.id, 10);
  try {
    const project = await projectService.getProjectById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    const task = await taskService.addTaskToProject(projectId, name);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTasks = async (req, res) => {
  const projectId = parseInt(req.params.id, 10);
  try {
    const project = await projectService.getProjectById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    const tasks = await taskService.getTasksByProject(projectId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  const projectId = parseInt(req.params.projectId, 10);
  const taskId = parseInt(req.params.taskId, 10);
  const data = req.body;
  try {
    const updatedTask = await taskService.updateTask(projectId, taskId, data);
    res.status(200).json(updatedTask);
  } catch (error) {
    if (error.message === "Task not found") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

export const deleteTask = async (req, res) => {
  const projectId = parseInt(req.params.projectId, 10);
  const taskId = parseInt(req.params.taskId, 10);
  try {
    await taskService.deleteTask(projectId, taskId);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    if (error.message === "Task not found") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};
