import Task from "../models/Task.js";

export const addTaskToProject = async (projectId, name) => {
  return await Task.create({ projectId, name });
};

export const updateTask = async (projectId, taskId, data) => {
  const task = await Task.findOne({ where: { id: taskId, projectId } });
  if (!task) throw new Error("Task not found");
  return await task.update(data);
};

export const deleteTask = async (projectId, taskId) => {
  const task = await Task.findOne({ where: { id: taskId, projectId } });
  if (!task) throw new Error("Task not found");
  await task.destroy();
};

export const getTasksByProject = async (projectId) => {
  return await Task.findAll({ where: { projectId } });
};
