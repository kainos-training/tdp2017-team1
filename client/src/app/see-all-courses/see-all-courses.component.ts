import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'map-see-all-courses',
  templateUrl: './see-all-courses.component.html',
  styleUrls: ['./see-all-courses.component.css']
})
export class SeeAllCoursesComponent implements OnInit {

  constructor(private db: DataServiceService) { }

  ngOnInit() {
  }

}
