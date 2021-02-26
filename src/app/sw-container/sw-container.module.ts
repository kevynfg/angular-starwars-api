import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { swRoutingModule } from './sw.routing.module';
import { SwItemComponent } from './sw-item/sw-item.component';
import { SwContainerComponent } from './sw-container.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, swRoutingModule, FormsModule],
  declarations: [SwItemComponent, SwContainerComponent],
  exports: [SwContainerComponent],
})
export class SwContainerModule {}
