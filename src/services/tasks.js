var tasks = [
  {
    "id": 1,
    "name": "My task",
    done: false,
    deadline: Date.now(),
    projectID: 1
  },
  {
    "id": 2,
    "name": "My second task",
    done: false,
    deadline: Date.now(),
    "projectID": 1
  }
];

function getAllByProjectId(projectID) {
  return tasks.filter((task) => task.projectID === projectID);
}

function createByProjectId(projectID, task) {
  var newTask = Object.assign({
    id: Math.random(),
    deadline: Date.now(),
    done: false,
    projectID
  }, task);
  tasks.push(newTask)
  return newTask;
}

function getByIdByProjectId(projectID, taskID) {
  var task = tasks.find((task) => task.projectID === projectID && task.id === taskID);
  return task;
}

function updateByIdByProjectId(projectID, taskID, newTask) {
  var updatedTask;
  tasks.forEach((task, idx) => {
    if (task.projectID === projectID && task.id === taskID) {
      tasks[idx] = Object.assign(tasks[idx], newTask);
      updatedTask = tasks[idx];
    }
  });
  return updatedTask;
}

function removeByIdByProjectId(projectID, taskID) {
  tasks = tasks.filter((task) => tasks.projectID !== projectID && task.id !== taskID);
  return tasks;
}

module.exports = {
  getAllByProjectId,
  createByProjectId,
  getByIdByProjectId,
  updateByIdByProjectId,
  removeByIdByProjectId
};
