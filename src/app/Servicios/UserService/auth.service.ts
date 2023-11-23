import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

//SERVICIO PARA LA CONEXIÓN DE LAS APIS

@Injectable({
  providedIn: 'root',
  
})
export class AuthService {
  private apiUrl = environment.BASE_URL_API_IPM;

  constructor(private http: HttpClient ,private cookieService: CookieService) {}

  getToken(): string | undefined {
    return this.cookieService.get('token_ipm');
  }

  login(credentials: { email: string; password: string }): Observable<any> {
  const loginUrl = `${this.apiUrl}/autenticacion/login`; // Aquí defines la URL correctament

  
  return this.http.post(loginUrl, credentials).pipe(
    tap((response: any) => {
      if (response.data) {
         // Guarda el token en la cookie  con con un tiempo de expiración, por ejemplo, 1 día
         this.cookieService.set('token_ipm', response.data, 1);
          }
           })
      ); 
   }

}