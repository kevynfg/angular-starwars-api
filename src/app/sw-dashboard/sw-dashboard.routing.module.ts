import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwDashboardComponent } from './sw-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SwDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class swDashboardRoutingModule {}
