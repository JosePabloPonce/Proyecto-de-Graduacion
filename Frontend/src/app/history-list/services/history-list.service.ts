import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '@environments/environment.prod';
import { IDatosGenerales } from '@app/history-details/Interfaces/IDatosGenerales';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  getConteos() {
    return this.http.get<IDatosGenerales[]>(`${environment.baseUrl}datos`);
  }
}
