const express = require ('express');
const app = express();
const db = require('./db.js');
const bodyParser = require('body-parser');

app.listen(8002, function () {
	console.log('Express API listening on port 8002...')
});

app.use(bodyParser.urlencoded({
	extended: false
}));

app.post('/book', function(req, res){
	const attendee_name = req.body.name;
    const attendee_email = req.body.email;
	const course_id = req.body.course_id;

    if(courseID && email && name){
        db.bookCourse(attendee_name, attendee_email, course_id, function(message){
            res.send(message);
        });
    }
});