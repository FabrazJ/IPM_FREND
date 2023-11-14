import { Injectable } from '@angular/core';
import { AuthDto } from 'src/Dtos/AuthDto.model';
import { environment } from 'src/environments/environment';
import { Response } from 'src/app/models/reports/Response.model';
import { AuthRequest } from 'src/app/models/reports/AuthRequest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.BASE_URL_API_IPM}/autenticacion/login`;

  constructor(private http: HttpClient) { }

  authenticate(authRequest: AuthRequest){
    return this.http.post<AuthDto>(this.apiUrl, authRequest);
  }
}
