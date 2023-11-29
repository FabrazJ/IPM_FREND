import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/reports/Response.model';
import { User } from 'src/app/models/reports/User.model';
import { ApiResponse } from 'src/app/models/reports/ApiResponse';


@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  constructor(private http: HttpClient){}
  private apiUrl = `${environment.BASE_URL_API_IPM}usuarios/registro-completo`;
 
  getUser(){
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  getAllUs(){
    return this.http.get<Response<User[]>>(this.apiUrl);
  }

   createUs(userA:User){
     return this.http.post<ApiResponse>(this.apiUrl,userA);
   }
  // createUs(user: User): Observable<any> {
  //   const url = `${this.apiUrl}`; // Ajusta la ruta según tu API
  //   return this.http.post(thijjs.apiUrl);
  // }
}
