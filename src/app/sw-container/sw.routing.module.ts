import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwContainerComponent } from './sw-container.component';

const routes: Routes = [
  {
    path: 'starwars',
    component: SwContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class swRoutingModule {}
