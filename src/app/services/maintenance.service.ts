import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  private apiUrl = 'http://localhost:3000/api/requests';

  constructor(private http: HttpClient) {}

  createRequest(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  getRequestsByResident(id: number) {
    return this.http.get(`${this.apiUrl}/resident/${id}`);
  }
}
