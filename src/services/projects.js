var projects = [
  {
    "id": 1,
    "name": "My project"
  }
];

function getAll() {
  return projects;
}

function create(projectName) {
  var newProject = {
    id: Math.random(),
    name: projectName
  };
  projects.push(newProject);
  return newProject;
}

function getById(id) {
  return projects.find((project) => project.id === id);
}

function updateById(id, newProject) {
  var updatedProject;
  projects.forEach((project, idx) => {
    if (project.id === id) {
      projects[idx] = Object.assign(projects[idx], newProject);
      updatedProject = projects[idx];
    }
  });
  return updatedProject;
}

function removeById(id) {
  projects = projects.filter((project) => project.id !== id);
  return projects;
}

module.exports = {
  getAll,
  create,
  getById,
  updateById,
  removeById
};
