import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./sw-dashboard/sw-dashboard.module').then(
        (m) => m.SwDashboardModule
      ),
  },
  {
    path: 'starwars',
    loadChildren: () =>
      import('./sw-container/sw-container.module').then(
        (m) => m.SwContainerModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
