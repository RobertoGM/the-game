import { Component } from '@angular/core';
import { MoveTypeEnum, ResultsEnum } from '../../models/move.model';
import { BoardService } from '../../services/board.service';
import { MoveDto } from '../../models/moveDto.model';

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  selectedMove: string | undefined;
  cpuMove: string | undefined;
  gameResult: number | undefined;

  readonly moveTypeEnum = MoveTypeEnum;
  readonly resultsEnum = ResultsEnum;

  constructor(public boardService: BoardService) {}

  moveSelected(move: string): void {
    this.selectedMove = this.selectedMove !== move ? move : undefined;
  }

  getCpuMove(): void {
    this.cpuMove = undefined;
    this.boardService.getMove().subscribe((moveDto: MoveDto) => {
      if (this.selectedMove) {
        this.cpuMove = moveDto.move;
        this.gameResult = this.boardService.isPlayerWinner(
          this.selectedMove,
          moveDto.move
        );
      }
    });
  }

  cleanMatch(): void {
    this.selectedMove = undefined;
    this.cpuMove = undefined;
    this.gameResult = undefined;
  }
}
