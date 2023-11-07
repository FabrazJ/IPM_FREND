import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    // Construye la URL con los parámetros de inicio de sesión
    const loginUrl = `http://localhost:5205/api/Usuario?email=${email}&password=${password}`;
  
    // Realiza una solicitud GET al servidor para autenticar al usuario
    return this.http.get(loginUrl);
  }
}
  

  // getUserById(userId: number) {
  //   return this.http.get(`http://localhost:5205/api/Usuario/${userId}`);
  // }
//}
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