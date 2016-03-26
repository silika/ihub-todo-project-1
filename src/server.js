var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var projectsModule = require('./modules/projects');
var tasksModule = require('./modules/tasks');

var app = express();

app.locals.pretty = true;

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

projectsModule(app);
tasksModule(app);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Express server is listening on port 3000');
  }
});
