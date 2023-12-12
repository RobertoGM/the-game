import { Component } from '@angular/core';
import { GameDto, MoveTypeEnum, ResultsEnum } from '../../models/move.model';
import { BoardService } from '../../services/board.service';

// Currently handling 2 main states. Player "move selection" and "result" of the game.
// Integrated with backend to retrieve the CPU move, that would indicate the end of the player
// selection and move the component towards the "result" state.

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  selectedMove: MoveTypeEnum | undefined;
  cpuMove: string | undefined;
  gameResult: string | undefined;

  readonly moveTypeEnum = MoveTypeEnum;
  readonly resultsEnum = ResultsEnum;

  constructor(public boardService: BoardService) {}

  moveSelected(move: MoveTypeEnum): void {
    this.selectedMove = this.selectedMove !== move ? move : undefined;
  }

  getCpuMove(): void {
    this.cpuMove = undefined;
    if (this.selectedMove) {
      this.boardService
        .getResult(this.selectedMove)
        .subscribe((gameRes: GameDto) => {
          this.cpuMove = gameRes.cpuMove;
          this.gameResult = gameRes.result;
        });
    }
  }

  cleanMatch(): void {
    this.selectedMove = undefined;
    this.cpuMove = undefined;
    this.gameResult = undefined;
  }
}
