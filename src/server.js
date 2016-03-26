var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var projectsModule = require('./modules/projects');
var tasksModule = require('./modules/tasks');

var app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

projectsModule(app);
tasksModule(app);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Express server is listening on port 3000');
  }
});
