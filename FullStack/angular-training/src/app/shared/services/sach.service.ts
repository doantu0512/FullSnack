import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SachService {
  readonly API_URL = 'http://localhost:8080/api/sach';

  constructor(private http: HttpClient) {
  }

  getSach(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }
  getDetailSach(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  addSach(payload: any): Observable<any> {
    return this.http.post(`${this.API_URL}`, payload);
  }

  updateSach(payload: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${payload.id}`, payload);
  }
  deleteSach(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
