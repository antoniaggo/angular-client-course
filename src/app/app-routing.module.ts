import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/courses'},
  { path: 'auth', component: AuthComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'courses', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
