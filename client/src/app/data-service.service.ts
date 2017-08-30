import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Course } from './course';

@Injectable()
export class DataServiceService {

    constructor(private http: HttpClient) { }

    courses = this.http.get<Course[]>('/api/getCourses');

    public getCourseByID(course_id){
        let url = "/api/getCourseByID/" + course_id;
        return this.http.get<Course>(url);
    }

}
