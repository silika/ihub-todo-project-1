fetch('/api/projects')
  .then((res) => res.json())
  .then(renderProjects);

createProject({ name: 'My second project' })
  .then(() => getProjectById(1))
  .then(() => updateProjectById(1, { name: 'Changed project' }))
  .then(() => removeProjectById(2))
  .catch((err) => console.log(err))

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
