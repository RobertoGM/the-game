import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-stat-panel',
  templateUrl: './stat-panel.component.html',
  styleUrl: './stat-panel.component.scss',
})
export class StatPanelComponent {
  @Input() display: 'number' | 'percent' = 'number';
  @Input() value: number = 0;
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
