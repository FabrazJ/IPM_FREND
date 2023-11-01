import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const loginData = { email, password };

    return this.http.post('http://localhost:5205/api/Usuario', loginData); 
  }
 
}
 // constructor(private http: HttpClient) {}

  // login(email: string, password: string) {
  //   const loginData = { email, password };

  //   return this.http.post('/api/login', loginData); // Sustituye la URL con la de tu servicio C#
  // }

 // private apiBaseURL = 'http://192.168.100.28:5205';   // Ajusta la IP y el puerto

  // constructor(private http: HttpClient) {}

  // getDatos() {
  //   return this.http.get(`${this.apiBaseURL}/ruta-de-tu-api`);
  // }