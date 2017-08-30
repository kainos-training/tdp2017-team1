/**
 * Module dependencies.
 */
const express = require('express');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());

// HTTP request logger middleware.
app.use(morgan('dev'));
// Error Handler middleware for more verbose errors
app.use(errorHandler());

/**
 * Routes configuration.
 */

app.post('/book', function(req, res){
  const attendee_name = req.body.name;
  const attendee_email = req.body.email;
  const course_id = req.body.course_id;

  if(course_id && attendee_email && attendee_name){
    db.bookCourse(attendee_name, attendee_email, course_id, function(message){
      res.send(message);
    });
  }
});

app.get('/getCourses', function(req, res) {
    db.getCourses(function(rows) {
    res.send(rows);
  });
});


app.listen(8002, function() {
    console.log('Express server listening on port 8002');
});
