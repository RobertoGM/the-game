import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './containers/statistics/statistics.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsService } from './services/statistics.service';

import { MoveStatsComponent } from './containers/move-stats/move-stats.component';

@NgModule({
  declarations: [StatisticsComponent, MoveStatsComponent],
  providers: [StatisticsService],
  imports: [CommonModule, StatisticsRoutingModule, HttpClientModule],
})
export class StatisticsModule {}
