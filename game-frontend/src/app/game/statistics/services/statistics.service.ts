import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) {}

  // Consider moving this into a environment specific variable.
  readonly BASE_URL: string =
    'http://ec2-35-181-1-177.eu-west-3.compute.amazonaws.com:8080';

  readonly BASE_URL_LOCAL: string = 'http://localhost:8080';

  getPlayerWinStats(): Observable<number> {
    return this.http.get<number>(`${this.BASE_URL_LOCAL}/statistics`);
  }

  getMoveStatistics(move: string): Observable<number> {
    return this.http.get<number>(`${this.BASE_URL_LOCAL}/statistics/${move}`);
  }

}
