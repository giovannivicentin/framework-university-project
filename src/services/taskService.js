import {
  addTaskToProject,
  updateTask,
  deleteTask,
} from "../services/taskService.js";

export const addTaskToProject = async (projectId, name) => {
  return await addTaskToProject.create({ projectId, name });
};

export const updateTask = async (projectId, taskId, data) => {
  const task = await updateTask.findOne({ where: { id: taskId, projectId } });
  if (!task) throw new Error("Task not found");
  return await task.update(data);
};

export const deleteTask = async (projectId, taskId) => {
  const task = await deleteTask.findOne({ where: { id: taskId, projectId } });
  if (!task) throw new Error("Task not found");
  await task.destroy();
};
