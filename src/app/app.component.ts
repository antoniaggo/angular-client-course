import { Component, Input } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  course1: Course = COURSES[0];

  course2: Course = COURSES[1];

  course3: Course = COURSES[3];


}
