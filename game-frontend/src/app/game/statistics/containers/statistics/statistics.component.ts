import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent implements OnInit {
  playerWinPercent: number | undefined;

  constructor(public statService: StatisticsService) {}

  ngOnInit(): void {
    this.getPlayerWinPercent();
  }

  getPlayerWinPercent(): void {
    this.statService.getPlayerWinStats().subscribe((percent: number) => {
      this.playerWinPercent = percent;
    });
  }
}
