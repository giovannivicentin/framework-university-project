import projectService from "../services/projectService.js";

export const createProject = async (req, res) => {
  const { name } = req.body;
  const project = await projectService.createProject(name);
  res.status(201).json(project);
};

export const getAllProjects = async (req, res) => {
  const projects = await projectService.getAllProjects();
  res.status(200).json(projects);
};
