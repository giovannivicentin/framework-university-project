import Project from "./Project.js";
import Task from "./Task.js";

Project.hasMany(Task, { foreignKey: "projectId", onDelete: "CASCADE" });
Task.belongsTo(Project, { foreignKey: "projectId", onDelete: "CASCADE" });

export { Project, Task };
