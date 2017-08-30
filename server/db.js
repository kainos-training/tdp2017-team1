const mysql = require('mysql');
const config = require('./config.json');

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
    "SELECT * FROM courses ORDER BY title ASC, start_date ASC",
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
      if(err) throw err;
      callback("Course booked.");
    }
  );
};
