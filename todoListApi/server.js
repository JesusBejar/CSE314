// the code below is the minimum code required to make a server
// var express = require('express'), 
//     app = express(),
//     port = process.env.PORT || 3000;

const { default: mongoose } = require('mongoose');

// app.listen(port);
// console.log('the todo list RESTful API server has started on:' + port);
var express = require('express'), 
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose');
    // model loading is created below
    Task = require('./mkdir api/models/todoListModel'), 
    bodyparser = require('body-parser');
    // mongoose instance connection url connection
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/Tododb');

    app.user(bodyparser.urlencoded({extended: true}));
    app.use(bodyparser.json());
    // import routes
    var routes = require('./mkdir api/routes/todoListRoutes');
    // register route
    routes(app);

app.listen(port);
console.log('the todo list RESTful API server has started on:' + port);

// below is considered middleware
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });