import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AlertModule} from "ngx-bootstrap";
import {SeeAllCoursesComponent} from "./see-all-courses/see-all-courses.component";
import {BookCourseComponent} from "./book-course/book-course.component";
import {HttpClientModule} from "@angular/common/http";
import {DataServiceService} from "./data-service.service";
import {FormsModule} from "@angular/forms";
import { DetailsPageComponent } from './details-page/details-page.component';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    SeeAllCoursesComponent,
    BookCourseComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    HttpClientModule,
    FormsModule,
    routes
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
