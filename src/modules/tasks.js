var tasksService = require('../services/tasks');

module.exports = function tasksModule(app) {

  app.get('/api/projects/:pid/tasks', (req, res) => {
    var tasks = tasksService.getAllByProjectId(Number(req.params.pid));
    res.json(tasks);
  })

  app.post('/api/projects/:pid/tasks', (req, res) => {
    var newTask = tasksService.createByProjectId(Number(req.params.pid), req.body);
    res.json(newTask);
  })

  app.get('/api/projects/:pid/tasks/:id', (req, res) => {
    var task = tasksService.getByIdByProjectId(Number(req.params.pid), Number(req.params.id));
    res.json(task);
  })

  app.put('/api/projects/:pid/tasks/:id', (req, res) => {
    var newTask = tasksService.updateByIdByProjectId(Number(req.params.pid), Number(req.params.id), req.body);
    res.json(newTask);
  })

  app.delete('/api/projects/:pid/tasks/:id', (req, res) => {
    var tasks = tasksService.removeByIdByProjectId(Number(req.params.pid), Number(req.params.id));
    res.json(tasks);
  })
};
