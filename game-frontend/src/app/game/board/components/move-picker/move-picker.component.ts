import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMoveFigures, MoveFigures } from '../../models/move.model';


// Component to avoid repeating the same html structure for every possible move.
// Accepts the figure and from it retrieves the data from an object which gathers
// the info of that figure, making the component way more flexible.

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
