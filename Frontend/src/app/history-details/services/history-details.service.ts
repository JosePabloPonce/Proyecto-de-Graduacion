import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDatosGenerales } from '../Interfaces/IDatosGenerales';
import { environment } from '@environments/environment.prod';
import { IConteoDeHuevecillos } from '../Interfaces/IConteoDeHuevecillos';


@Injectable({
  providedIn: 'root'
})
export class HistoryDetailsService {


  constructor(private http: HttpClient) { }

  getDatos(){
    return this.http.get<IDatosGenerales[]>(`${environment.baseUrl}datos`);
  }

  getConteos(){
    return this.http.get<IConteoDeHuevecillos[]>(`${environment.baseUrl}conteo`);
  }
}
