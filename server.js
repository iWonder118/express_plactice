var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    Task = require("./api/models/taskModel"),
    bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb: //localhost/Tododb");

app.use(bodyParser.urlencoded({extended: ture}));
app.use(bodyParser.json());

var routes = require("./api/routes/taskRoute");
routes(app);

app.listen(port);

console.log("todo list RESTful API server started on: " + port);