'use strict';

// Main express variables that run the app
var express = require("express");
var app = express();

// Our custom route handling middleware
var routes = require("./routes");

// Middleware dependencies
var jsonParser = require("body-parser").json;
var logger = require("morgan");

app.use(logger("dev"));
app.use(jsonParser());

app.use("/questions", routes);

// port to serve app on
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Express server listening on port ", port);
});