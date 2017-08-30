import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from "../data-service.service";
import {Course} from "../course";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../user";

@Component({
  selector: 'map-book-course',
  templateUrl: './book-course.component.html',
  styleUrls: ['./book-course.component.css']
})
export class BookCourseComponent implements OnInit {

  data: DataServiceService;
  @Input() course : Course;
  display: boolean;
  user: User;


  constructor(data: DataServiceService, private http: HttpClient) {
    this.data = data;
    this.closeModal();
    this.user = new User();
  }

  ngOnInit() {
  }

  showModal(){
      this.display = true;
  }

  closeModal(){
      this.display = false;
  }

  bookCourse(course_id){
    if(this.user.name && this.user.email && course_id){
        this.sendBookingRequest(this.user.name, this.user.email, course_id);
        this.closeModal();
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
