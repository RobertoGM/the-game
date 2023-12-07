import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Setting the routes for lazy loading
export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./game/homepage/homepage.module').then((m) => m.HomePageModule),
  },
  // Set Home as entrypoint of the app routing
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // Redirect to home in case of wrong url
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
