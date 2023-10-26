import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // private apiUrl='http://localhost:5205/api/Usuario'
  
  // constructor(private http: HttpClient) {}

  // getData(): Observable<User> {
  //   return this.http.get<User>(this.apiUrl);
  // }
  private apiUrl:string="http://localhost:5205/api/Usuario"
  
  constructor(private http: HttpClient){

  }

  login(loginObj:any){
   // return this.http.post<any>(`${this.apiUrl}Usuario`,loginObj);
   return this.http.post<any>(this.apiUrl, loginObj);

  
  }

}
 