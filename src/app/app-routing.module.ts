import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './components/school/school.component';
import { MaterialComponent } from './components/material/material.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { ClassesComponent } from './components/classes/classes.component';
import { TeachersComponent } from './components/teachers/teachers.component';


const routes: Routes = [

  { path: '', component: TeachersComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'matrrial', component: MaterialComponent },
  { path: 'seasons', component: SeasonsComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'teachers', component: TeachersComponent },
  //{ path: 'admin', loadChildren: './admin/admin.module#AdminModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
