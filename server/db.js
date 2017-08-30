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
    console.log("Connected to MySQL");
});

exports.getCourses = function (callback){
  db.query(
    "SELECT * FROM courses",
    function(err, rows) {
      if(err) throw err;
      callback(rows);
    }
  );
};

exports.bookCourse = function (attendee_name, attendee_email, course_id, callback){
  console.log("gere");
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
