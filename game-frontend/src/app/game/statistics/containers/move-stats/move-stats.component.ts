import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatisticsService } from '../../services/statistics.service';
import { MoveStatsDto } from '../../models/statistics.model';

@Component({
  selector: 'game-move-stats',
  templateUrl: './move-stats.component.html',
  styleUrl: './move-stats.component.scss',
})
export class MoveStatsComponent implements OnInit {
  move: string | undefined;
  value: number = 0;

  constructor(
    private route: ActivatedRoute,
    public statService: StatisticsService
  ) {}

  ngOnInit() {
    const routeMove = this.route.snapshot.paramMap.get('move');
    if (routeMove) {
      this.move = routeMove;
      this.statService
        .getMoveStatistics(routeMove)
        .subscribe((moveStats: MoveStatsDto) => {
          this.value = moveStats.winPercent;
        });
    }
  }
}
