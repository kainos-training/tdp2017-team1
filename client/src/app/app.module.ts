import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeeAllCoursesComponent } from './see-all-courses/see-all-courses.component';
import { DataServiceService } from './data-service.service';
import { AlertModule } from "ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    SeeAllCoursesComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
