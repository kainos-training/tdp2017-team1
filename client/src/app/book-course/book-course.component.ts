import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";
import {Course} from "../course";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'map-book-course',
  templateUrl: './book-course.component.html',
  styleUrls: ['./book-course.component.css']
})
export class BookCourseComponent implements OnInit {

  data: DataServiceService;
  course: Course;

  constructor(data: DataServiceService, private http: HttpClient) {
    this.data = data;
    this.course = this.data.testCourse;
  }

  ngOnInit() {
  }

  bookCourse(){
    var name = prompt("Please enter your name here:");
    var email = prompt("Please enter your email here:");

    var course_id = 1;

    if(name && email){
        this.sendBookingRequest(name, email, course_id);
    }
  }

    public sendBookingRequest(name, email, course_id){
        const body = {
            "name": name,
            "email": email,
            "course_id": course_id
        };
        const options = {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        };

        this.http.post("api/book", body, options).subscribe(data => {
            alert("Booking request has been sent for " + name + " using " + email + ".");
        });
    }
}
