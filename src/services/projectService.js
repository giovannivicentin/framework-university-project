

export const createProject = async (name) => {
  return await Project.create({ name });
};

export const getAllProjects = async () => {
  return await Project.findAll();
};
