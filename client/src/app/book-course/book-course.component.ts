import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";
import {Course} from "../course";

@Component({
  selector: 'map-book-course',
  templateUrl: './book-course.component.html',
  styleUrls: ['./book-course.component.css']
})
export class BookCourseComponent implements OnInit {

  data: DataServiceService;
  course: Course;

  constructor(data: DataServiceService) {
    this.data = data;
    this.course = this.data.testCourse;
  }

  ngOnInit() {
  }

  bookCourse(){
    console.log("Button clicked on course with:" , this.course.description);

    var name = prompt("Please enter your name here:");
    console.log("Name:", name);

    var email = prompt("Please enter your email here:");
    console.log("Email:", email);



  }
}
