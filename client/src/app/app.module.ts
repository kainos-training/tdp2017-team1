import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeeAllCoursesComponent } from './see-all-courses/see-all-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    SeeAllCoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
