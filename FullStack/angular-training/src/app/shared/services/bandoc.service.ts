import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BandocService {
  readonly API_URL = 'http://localhost:8080/api/bandoc';

  constructor(private http: HttpClient) {
  }

  getBandoc(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }
  getDetailBandoc(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  addBandoc(payload: any): Observable<any> {
    return this.http.post(`${this.API_URL}`, payload);
  }

  updateBandoc(payload: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${payload.id}`, payload);
  }
  deleteBandoc(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}

