import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-move-figures',
  templateUrl: './move-figures.component.html',
  styleUrl: './move-figures.component.scss'
})
export class MoveFiguresComponent {
  @Input() img: string = '';
  @Input() alt: string = '';
  @Input() caption?: string;
}
