import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoboflowService {
  private roboflowURL = 'https://outline.roboflow.com/';
  private model = 'huevos-de-mosquito';
  private version = '22';
  private apiKey = 'dI8aF0nk8KR5O16RSguS';
  private confidence = 40;
  constructor(private http: HttpClient) { }
  
  analyzeImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    let fullURL = `${this.roboflowURL}${this.model}/${this.version}?api_key=${this.apiKey}`;
    fullURL += `&confidence=${this.confidence}`;
    

    return this.http.post(fullURL, formData);
  }
}
