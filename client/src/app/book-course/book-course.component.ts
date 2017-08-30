import {Component, Input, OnInit} from '@angular/core';
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
  @Input() course : Course;

  constructor(data: DataServiceService, private http: HttpClient) {
    this.data = data;
  }

  ngOnInit() {
  }

  bookCourse(course_id){
    var name = prompt("Please enter your name here:");
    var email = prompt("Please enter your email here:");

    if(name && email && course_id){
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
