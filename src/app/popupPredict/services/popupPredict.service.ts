import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PopupPredictService {

  predict(data:any){
    return this.http.post(`https://model-server.vercel.app/predict`,{ data: data });
  }
  constructor(private http: HttpClient) { }
}
