import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoboflowService {
  private roboflowURL = 'https://outline.roboflow.com/';
  private model = 'huevos-de-mosquito';
  private version = '22';
  private apiKey = 'dI8aF0nk8KR5O16RSguS';
  private confidence = 40;
  private format1 = 'json';
  private format2 = 'image';
  private labels = false;
  private overlap = 70;
  constructor(private http: HttpClient) {}

  analyzeImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    let fullURL = `${this.roboflowURL}${this.model}/${this.version}?api_key=${this.apiKey}`;
    fullURL += `&confidence=${this.confidence}&format=${this.format1}&overlap=${this.overlap}`;

    return this.http.post(fullURL, formData);
  }

  returnImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    let fullURL = `${this.roboflowURL}${this.model}/${this.version}?api_key=${this.apiKey}`;
    fullURL += `&confidence=${this.confidence}&format=${this.format2}&labels=${this.labels}`;

    return this.http.post(fullURL, formData, { responseType: 'blob' });
  }
}
