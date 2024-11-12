import * as taskService from "../services/taskService.js";

export const addTask = async (req, res) => {
  const { name } = req.body;
  const projectId = req.params.id;
  try {
    const task = await taskService.addTaskToProject(projectId, name);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { projectId, taskId } = req.params;
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
  const { projectId, taskId } = req.params;
  try {
    await taskService.deleteTask(projectId, taskId);
    res.status(204).end();
  } catch (error) {
    if (error.message === "Task not found") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};
