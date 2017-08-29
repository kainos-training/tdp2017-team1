import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Course } from './course';

@Injectable()
export class DataServiceService {

  constructor(private http: HttpClient) { }

  testArray = [1, 2, 3, 4, 5];

  // courses = this.http.get<Course[]>('/api/<URL>');

}
