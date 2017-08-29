import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllCoursesComponent } from './see-all-courses.component';

describe('SeeAllCoursesComponent', () => {
  let component: SeeAllCoursesComponent;
  let fixture: ComponentFixture<SeeAllCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeAllCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAllCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
