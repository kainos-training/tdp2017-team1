import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AlertModule} from "ngx-bootstrap";
import {SeeAllCoursesComponent} from "./see-all-courses/see-all-courses.component";
import {BookCourseComponent} from "./book-course/book-course.component";
import {HttpClientModule} from "@angular/common/http";
import {DataServiceService} from "./data-service.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SeeAllCoursesComponent,
    BookCourseComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
