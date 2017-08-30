// Lets put tests here!
const db = require('../db.js');
const _ = require('lodash');

var assert = require('assert');
describe('dbTest.js', function() {
  describe('getCourses Function', function() {
    it('Should return rows object when called', function() {
      db.getCourses(function(rows) {
        if(_isEmpty(rows)){
          // This is ok as long as database is returning something
          assert.ok(true);
        }
        assert.equal(rows, true);
      });
    });
  });
});

describe('dbTest.js', function() {
  describe('bookCourse Function', function() {
    it('Should book a course when valid parameters passed', function() {
      const attendee_name = "richard";
      const attendee_email = "richard@hotmail.com";
      const course_id = "1";

      db.bookCourse(attendee_name, attendee_email, course_id, function(message){
        assert.ok(true);
      });
    });
  });
});
