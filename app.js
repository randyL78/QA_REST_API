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

// calls routes.js for route handling
app.use("/questions", routes);

// catch 404 and forward to handler
app.use(function(req, res, next) {
  var err = new Error("Route not found");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});



// port to serve app on
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Express server listening on port ", port);
});