/**
 * Module dependencies.
 */
const express = require ('express');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');

const db = require('./db.js');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
// app.use is Binding application-level middleware to an instance of the app object
app.use(cors());
app.use(bodyParser.urlencoded({ // for parsing application/x-www-form-urlencoded
  extended: false
}));

// HTTP request logger middleware.
app.use(morgan('dev'));
// Error Handler middleware for more verbose errors
app.use(errorHandler());

/**
 * Routes configuration.
 */
app.get('/getCourses', function(req, res) {
  db.getCourses(function(rows) {
    res.send(rows);
  });
});

app.listen(8002, function() {
  console.log('Express server listening on port 8002');
});
