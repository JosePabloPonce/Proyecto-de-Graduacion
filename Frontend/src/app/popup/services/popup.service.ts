import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private baseUrl: string = 'https://api.midominio.com/';

  saveData(data1: any, data2: any): Observable<any> {
    const payload = { data1, data2 };
    return this.http.post(this.baseUrl, payload);
  }
  constructor(private http: HttpClient) { }
}
