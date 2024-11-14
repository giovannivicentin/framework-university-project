import Project from "../models/Project.js";

const createProject = async (name) => {
  return await Project.create({ name });
};

const getAllProjects = async () => {
  return await Project.findAll();
};

const getProjectById = async (id) => {
  return await Project.findByPk(id);
};

export default { createProject, getAllProjects, getProjectById };
