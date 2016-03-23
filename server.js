var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var projects = [
  {
    "id": 1,
    "name": "My project",
    "tasks": [1,2,3]
  }
];

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/api/projects', (req, res) => {
  res.json(projects);
})

var i = 1;

app.post('/api/projects', (req, res) => {
  projects.push({
    id: i++,
    name: req.body.name,
    tasks: [1,2,3]
  })
  res.json(projects);
})

app.get('/api/projects/:id', (req, res) => {
  var project = projects.find((project) => project.id === Number(req.params.id));
  res.json(project);
})

app.put('/api/projects/:id', (req, res) => {
  projects.forEach((project, idx) => {
    if (project.id === Number(req.params.id)) {
      projects[idx] = Object.assign(projects[idx], req.body);
    }
  })
  res.json(projects);
})

app.delete('/api/projects/:id', (req, res) => {
  projects = projects.filter((project) => project.id !== Number(req.params.id));
  res.json(projects);
})

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Express server is listening on port 3000');
  }
});
