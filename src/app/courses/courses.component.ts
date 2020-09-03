import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  courses: Course[];

  constructor(public coursesService: CoursesService){

  }

  ngOnInit() {
    this.coursesService.loadCourses()
    .subscribe (courses => {
      this.courses = courses;
    });
  }

}
