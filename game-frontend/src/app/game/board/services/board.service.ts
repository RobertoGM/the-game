import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto, MoveTypeEnum } from '../models/move.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private http: HttpClient) {}

  // Consider moving this into a environment specific variable.
  readonly BASE_URL: string =
    'http://ec2-35-181-1-177.eu-west-3.compute.amazonaws.com:8080';

  readonly BASE_URL_LOCAL: string = 'http://localhost:8080';

  getResult(playerMove: MoveTypeEnum): Observable<GameDto> {
    return this.http.put<GameDto>(`${this.BASE_URL}/move`, {
      move: playerMove,
    });
  }
}
