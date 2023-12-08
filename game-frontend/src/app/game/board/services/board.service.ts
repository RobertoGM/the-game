import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoveDto } from '../models/moveDto.model';
import { MoveTypeEnum, ResultsEnum } from '../models/move.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private http: HttpClient) {}

  getMove(): Observable<MoveDto> {
    return this.http.get<MoveDto>('http://localhost:8080/move');
  }

  isPlayerWinner(playerMove: string, cpuMove: string): number {
    if (playerMove === cpuMove) {
      return ResultsEnum.Tie;
    }

    if (playerMove === MoveTypeEnum.PAPER) {
      return cpuMove === MoveTypeEnum.ROCK ? ResultsEnum.Win : ResultsEnum.Lose;
    } else {
      return cpuMove === MoveTypeEnum.ROCK ? ResultsEnum.Lose : ResultsEnum.Win;
    }
  }
}
