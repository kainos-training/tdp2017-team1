import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AlertModule} from "ngx-bootstrap";
import { BookCourseComponent } from './book-course/book-course.component';
import {DataServiceService} from "./data-service.service";

@NgModule({
  declarations: [
    AppComponent,
    BookCourseComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
