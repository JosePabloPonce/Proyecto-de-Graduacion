import { Injectable } from '@angular/core';
import { IConteos } from '../Interfaces/IConteos';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  randomUserUrl = 'https://api.randomuser.me/';

  getUsers(results: number,): Observable<{ results: IConteos[] }> {
    let params = new HttpParams()
      .append('results', `${results}`)

    return this.http
      .get<{ results: IConteos[] }>(`${this.randomUserUrl}`, { params })
      .pipe(catchError(() => of({ results: [] })));
  }

  constructor(private http: HttpClient) { }
}
