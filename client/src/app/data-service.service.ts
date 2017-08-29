import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  constructor() { }

  testArray = [1, 2, 3, 4, 5];

  testCourse = {
      course_id : 1,
      title : "Test name",
      start_date : new Date("August 29, 2017 14:08:00"),
      location : "Belfast",
      description : "Default description",
      additional_info : "Additional info",
      max_attendees: 20
  };



}
