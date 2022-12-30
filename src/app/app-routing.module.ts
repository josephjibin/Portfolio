import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperinceComponent } from './work-experince/work-experince.component';

const routes: Routes = [
//    {  path:'', component:HomeComponent},
//   {  path:'', component:HomeComponent},
//   {  path:'home', component:HomeComponent},
//   {
//   path:'about', component:AboutComponent
// },
// {  path:'skills', component:SkillsComponent},
// {  path:'education', component:EducationComponent},
// {  path:'project', component:ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
