import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDatosGenerales } from '../Interfaces/IDatosGenerales';
import { environment } from '@environments/environment.prod';
import { IConteoDeHuevecillos } from '../Interfaces/IConteoDeHuevecillos';

@Injectable({
  providedIn: 'root',
})
export class HistoryDetailsService {
  constructor(private http: HttpClient) {}

  getDatos(id_datos: any) {
    return this.http.get<IDatosGenerales[]>(
      `${environment.baseUrl}datos/${id_datos}`
    );
  }

  getConteos(id_datos: any) {
    return this.http.get<IConteoDeHuevecillos[]>(
      `${environment.baseUrl}conteo/${id_datos}`
    );
  }

  getHV(id_datos: any) {
    return this.http.get<any>(
      `${environment.baseUrl}total/${id_datos}`
    );
  }

  getUserId(id_datos: any) {
    return this.http.get<any>(
      `${environment.baseUrl}userID/${id_datos}`
    );
  }

  editConteos(id_datos: any, data: any) {
    return this.http.put(`${environment.baseUrl}conteo/${id_datos}`, data);
  }

  editDatos(id_datos: any, data: any) {
    return this.http.put(`${environment.baseUrl}datos/${id_datos}`, data);
  }
}
