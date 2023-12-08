import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddRegistro {

  private apiUrl = environment.BASE_URL_API_IPM;

  constructor(private http: HttpClient) {}

  addRegistro(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/actividad-diaria`, data);
  }

}
