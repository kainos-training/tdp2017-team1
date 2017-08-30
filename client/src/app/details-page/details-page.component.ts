import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../course";
import {DataServiceService} from "../data-service.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'map-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  course : Observable<Course>;

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit() {
      let course_id = this.route.snapshot.queryParams["course_id"];
      this.dataService.getCourseByID(course_id).subscribe(data => {
          this.course = data[0];
      });
  }

}
