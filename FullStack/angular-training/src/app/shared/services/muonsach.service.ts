import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MuonsachService {
  readonly API_URL = 'http://localhost:8080/api/muonsach';

  constructor(private http: HttpClient) {
  }

  getMuonSach(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }
  getDetailMuonSach(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  addMuonSach(payload: any): Observable<any> {
    return this.http.post(`${this.API_URL}`, payload);
  }

  updateMuonSach(payload: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${payload.id}`, payload);
  }
  deleteMuonSach(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}