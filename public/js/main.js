fetch('/api/projects')
  .then((res) => res.json())
  .then(renderProjects);

//createProject({ name: 'My second project' })
//  .then(() => getProjectById(1))
//  .then(() => updateProjectById(1, { name: 'Changed project' }))
//  .then(() => removeProjectById(2))
//  .then(() => getAllTasksByProjectId(1))
//  .then(() => createTaskByProjectId(1, { name: 'My new task' }))
//  .then(() => getTaskByIdByProjectId(1, 1))
//  .then(() => updateTaskByIdByProjectId(1, 1, { done: true }))
//  .then(() => removeTaskByIdByProjectId(1, 1))
//  .catch((err) => console.log(err))


// Tasks

function getAllTasksByProjectId(id) {
  return fetch('/api/projects/' + id + '/tasks')
    .then((res) => res.json())
    .then((json) => console.log(json))
}

function createTaskByProjectId(id, task) {
  return fetch('/api/projects/' + id + '/tasks', {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function getTaskByIdByProjectId(pid, id) {
  return fetch('/api/projects/' + pid + '/tasks/' + id)
    .then((res) => res.json())
    .then((json) => console.log(json))
}

function updateTaskByIdByProjectId(pid, id, task) {
  return fetch('/api/projects/' + pid + '/tasks/' + id, {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.json())
  .then((json) => console.log(json))
}

function removeTaskByIdByProjectId(pid, id) {
  return fetch('/api/projects/' + pid + '/tasks/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.json())
  .then((json) => console.log(json))
}


// Projects

function createProject(project) {
  return fetch('/api/projects', {
    method: 'POST',
    body: JSON.stringify(project),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function getProjectById(id) {
  return fetch('/api/projects/' + id)
    .then((res) => res.json())
    .then((json) => console.log(json))
}

function updateProjectById(id, project) {
  return fetch('/api/projects/' + id, {
    method: 'PUT',
    body: JSON.stringify(project),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.json())
  .then((json) => console.log(json))
}

function removeProjectById(id) {
  return fetch('/api/projects/' + id, {
    method: 'DELETE'
  })
  .then((res) => res.json())
  .then((json) => console.log(json))
}

function renderProjects(projects) {

  var app = document.getElementById('app');

  projects.forEach((project) => {

    var list = document.createElement('ul');

    Object.keys(project)
      .forEach((key) => {
        var item = document.createElement('li');
        item.textContent = key + ' | ' + project[key];
        list.appendChild(item);
      });

    app.appendChild(list);
  });
}

//Templatin
 var headerTmpl = Handlebars.compile(document.getElementById('header').innerHTML);

headerTmpl({projectName:"JS Course"});
