import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';

import {HttpClientModule} from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CoursesComponent,
    AuthComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
