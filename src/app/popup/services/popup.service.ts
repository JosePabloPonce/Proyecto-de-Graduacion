import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PopupService {

  saveData(data: any, data2: any){
    return this.http.post(`${environment.baseUrl}conteo`, {data,data2});
  }

  getUserId(id_datos: any) {
    return this.http.get<any>(
      `${environment.baseUrl}userID/${id_datos}`
    );
  }
  constructor(private http: HttpClient) { }
}
