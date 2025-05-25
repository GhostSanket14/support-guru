import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ModulesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ModulesModule { }
