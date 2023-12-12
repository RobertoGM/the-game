import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsComponent } from './containers/statistics/statistics.component';
import { MoveStatsComponent } from './containers/move-stats/move-stats.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
  },
  {
    path: 'moveStats/:move',
    component: MoveStatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}
