import { Component, Input, OnInit } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  // courses: Course[] = COURSES;

  courses: Course[];

  constructor(public coursesService: CoursesService){

  }

  ngOnInit() {
    this.coursesService.loadCourses()
    .subscribe (courses => {
      this.courses = courses;
    })
  }

}
