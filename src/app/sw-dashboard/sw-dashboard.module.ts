import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { swDashboardRoutingModule } from './sw-dashboard.routing.module';
import { SwDashboardComponent } from './sw-dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SwItemComponent } from '../sw-container/sw-item/sw-item.component';
import { SwContainerModule } from '../sw-container/sw-container.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    swDashboardRoutingModule,
    FormsModule,
    SwContainerModule,
  ],
  declarations: [SwDashboardComponent],

  exports: [SwDashboardComponent],
})
export class SwDashboardModule {}
