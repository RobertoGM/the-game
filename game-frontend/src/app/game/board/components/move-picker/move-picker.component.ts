import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMoveFigures, MoveFigures } from '../../models/move.model';

@Component({
  selector: 'game-move-picker',
  templateUrl: './move-picker.component.html',
  styleUrl: './move-picker.component.scss',
})
export class MovePickerComponent implements OnInit {
  @Input() figure: string = '';
  @Input() selectedMove: string | undefined;
  @Output() selected: EventEmitter<void> = new EventEmitter<void>();

  figureData: IMoveFigures | undefined;

  ngOnInit() {
    this.figureData = MoveFigures[this.figure];
  }

  moveClicked(): void {
    this.selected.emit();
  }
}
