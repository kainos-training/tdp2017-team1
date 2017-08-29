const mysql = require('mysql');
const config = require('./config.json');

const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: 'world'
});

db.connect(function(err) {
    if(err) throw err;
    console.log("Connected to MySQL");
});
