import Project from "../models/Project.js";

const createProject = async (name) => {
  return await Project.create({ name });
};

const getAllProjects = async () => {
  return await Project.findAll();
};

export default { createProject, getAllProjects };
