import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/models/reports/Response.model';
import { User } from 'src/app/models/reports/User.model';
import { ApiResponse } from 'src/app/models/reports/ApiResponse';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Userservice {
  constructor(private http: HttpClient){}
  private apiUrl = `${environment.BASE_URL_API_IPM}usuarios/registro-completo`;
 
  getUser(){
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  getAllUs(){
    return this.http.get<Response<User[]>>(this.apiUrl);
  }

   createUs(userA:User){
     return this.http.post<Response<User[]>>(this.apiUrl + "",userA);
   }

   updateUser(id: number, updateUser: User): Observable<Response<User[]>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Response<User[]>>(url, updateUser);
  }
  
  
  
}
