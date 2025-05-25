import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    {
    path: 'root',
    component: ModulesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
