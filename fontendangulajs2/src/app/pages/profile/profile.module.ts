import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserInfoComponent } from './user-info/user-info.component';

export const routes = [
  {
      path: '', 
      component: ProfileComponent,
      children:[
        { path: '', redirectTo: 'projects', pathMatch: 'full'},
        { path: 'projects', component: ProjectsComponent, data: { breadcrumb: 'Projects' } },
        { path: 'user-info', component: UserInfoComponent, data: { breadcrumb: 'User Information' } }
      ]
  }
];

@NgModule({
  declarations: [
    ProfileComponent, 
    ProjectsComponent, 
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
