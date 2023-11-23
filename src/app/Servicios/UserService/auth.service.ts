import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//SERVICIO PARA LA CONEXIÓN DE LAS APIS

@Injectable({
  providedIn: 'root',
  
})
export class AuthService {
  private apiUrl = environment.BASE_URL_API_IPM;

  constructor(private http: HttpClient) {}

  // login(credentials: { email: string; contraseña: string }): Observable<any> {
  //   const loginUrl = `${this.apiUrl}/login`;
   

  //   console.log('loginUrl', loginUrl);
  //   return this.http.post(loginUrl, credentials);
  // }

  login(credentials: { email: string; contraseña: string }): Observable<any> {
  const loginUrl = `${this.apiUrl}/autenticacion/login`; // Aquí defines la URL correctamente
  console.log('loginUrl', loginUrl);
  return this.http.post(loginUrl, credentials); // Aquí utilizas la URL correctamente
}

}