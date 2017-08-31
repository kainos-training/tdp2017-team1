const mysql = require('mysql');
const config = require('./config.json');
const calendarNotifier = require('./calendarNotifier.js');

const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: 'MapBooking'
});

db.connect(function(err) {
    if(err) throw err;
});

exports.getCourses = function (callback){
  db.query(
    "SELECT * FROM courses ORDER BY title ASC, start_date ASC",
    function(err, rows) {
      if(err) throw err;
      callback(rows);
    }
  );
};

exports.getCourseByID = function(course_id, callback){
  db.query(
    "SELECT * FROM courses WHERE course_id = ?",
    [course_id],
    function(err, rows) {
      if(err) throw err;
      callback(rows);
    }
  );
};

exports.bookCourse = function (attendee_name, attendee_email, course_id, callback){
  db.query(
    "INSERT INTO `attendees` (`attendee_name`, `attendee_email`, `course_id`) "
    + "VALUES (?,?,?)",
    [attendee_name, attendee_email, course_id],
    function(err){
      if(err) {
        console.log(err);
        throw err;
      }
      callback("Course booked.");
      calendarNotifier.sendNotification(attendee_email);
    }
  );
};
