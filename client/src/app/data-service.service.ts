import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Course } from './course';

@Injectable()
export class DataServiceService {

    constructor(private http: HttpClient) { }

    testArray = [1, 2, 3, 4, 5];

    courses = this.http.get<Course[]>('/api/getCourses');

    testCourse = [{
        course_id: 1,
        title: "Test name",
        start_date: new Date("August 29, 2017 14:08:00"),
        location: "Belfast",
        description: "Default description",
        additional_info: "Additional info",
        max_attendees: 20
    },
        {
            course_id: 2,
            title: "Test name 2",
            start_date: new Date("August 29, 2017 14:08:00"),
            location: "London",
            description: "Default description",
            additional_info: "Additional info",
            max_attendees: 20
        }];

}
