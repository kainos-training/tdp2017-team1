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
    "SELECT * FROM courses",
    function(err, rows) {
      if(err) throw err;
      callback(rows);
    }
  );
};
