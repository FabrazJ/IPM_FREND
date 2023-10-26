import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // Actualiza esta URL para que apunte a tu archivo JSON simulado
  private apiUrl: string = 'http://localhost:4200/server/usuario.json';

  constructor(private http: HttpClient) {}

  login(loginObj: { email: string; password: string }): Observable<{ success: boolean, user?: User }> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((usuarios) => {
        const user = usuarios.find((u) => u.email === loginObj.email && u.contraseña === loginObj.password);
        if (user) {
          return { success: true, user };
        } else {
          return { success: false };
        }
      })
    );
  }
}