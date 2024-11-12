import * as taskService from "../services/taskService.js";

export const addTaskToProject = async (req, res) => {
  const { name } = req.body;
  const projectId = req.params.id;
  const task = await taskService.addTaskToProject(projectId, name);
  res.status(201).json(task);
};
