var projectsService = require('../services/projects');

module.exports = function projectsModule(app) {

  app.get('/api/projects', (req, res) => {
    var projects = projectsService.getAll();
    res.json(projects);
  })

  app.post('/api/projects', (req, res) => {
    var newProject = projectsService.create(req.body.name);
    res.json(newProject);
  })

  app.get('/api/projects/:id', (req, res) => {
    res.json(projectsService.getById(Number(req.params.id)));
  })

  app.put('/api/projects/:id', (req, res) => {
    var updatedProject = projectsService.updateById(Number(req.params.id), req.body);
    res.json(updatedProject);
  })

  app.delete('/api/projects/:id', (req, res) => {
    var projects = projectsService.removeById(Number(req.params.id));
    res.json(projects);
  })
};
