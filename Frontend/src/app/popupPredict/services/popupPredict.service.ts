import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PopupPredictService {

  saveData(data: any, data2: any){
    return this.http.post(`${environment.baseUrl}conteo`, {data,data2});
  }
  constructor(private http: HttpClient) { }
}
