import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TacGiaService {

  readonly API_URL = 'http://localhost:8080/api/tacgia';

  constructor(private http: HttpClient) {
  }

  getTacgia(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }
  getDetailTacgia(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  addTacgia(payload: any): Observable<any> {
    return this.http.post(`${this.API_URL}`, payload);
  }

  updateTacgia(payload: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${payload.id}`, payload);
  }
  deleteTacgia(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
