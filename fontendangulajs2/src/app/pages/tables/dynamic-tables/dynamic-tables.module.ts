import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DirectivesModule } from '../../../theme/directives/directives.module';
import { NgxComponent } from './ngx/ngx.component';

export const routes = [
  { path: '', redirectTo: 'smart', pathMatch: 'full'},
  { path: 'ngx', component: NgxComponent, data: { breadcrumb: 'NGX DataTable' } }  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NgxComponent    
  ]
})
export class DynamicTablesModule { }
