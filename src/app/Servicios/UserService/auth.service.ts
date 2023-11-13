// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthDto } from 'src/Dtos/AuthDto.model';
import { User } from 'src/app/models/reports/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.APILOGIN_URL;

  constructor(private http: HttpClient) {}

  login(email: string, contraseña: string): Observable<{ mensaje: string }> {
    const body: User = { email, contraseña };

    return this.http.post<{ mensaje: string }>(`${this.apiUrl}/login`, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  getData() {
    return this.http.get(`${this.apiUrl}/login`);
  }


  private handleError(error: any): Observable<never> {
    console.error('Error en la solicitud:', error);
    return throwError('Hubo un problema con la solicitud. Por favor, inténtalo de nuevo más tarde.');
  }
}
