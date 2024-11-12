import taskService from "../services/taskService.js";

export const addTask = async (req, res) => {
  const { name } = req.body;
  const projectId = req.params.id;
  const task = await taskService.addTaskToProject(projectId, name);
  res.status(201).json(task);
};

export const updateTask = async (req, res) => {
  const { projectId, taskId } = req.params;
  const updatedData = req.body;
  const updatedTask = await taskService.updateTask(
    projectId,
    taskId,
    updatedData
  );
  res.status(200).json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const { projectId, taskId } = req.params;
  await taskService.deleteTask(projectId, taskId);
  res.status(204).send();
};
