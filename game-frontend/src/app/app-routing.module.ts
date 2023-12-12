import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Setting the routes for lazy loading
export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./game/homepage/homepage.module').then((m) => m.HomePageModule),
  },
  {
    path: 'board',
    loadChildren: () =>
      import('./game/board/board.module').then((m) => m.BoardModule),
  },
  {
    path: 'stats',
    loadChildren: () =>
      import('./game/statistics/statistics.module').then((m) => m.StatisticsModule),
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
