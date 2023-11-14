import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AuthRequest } from '../models/reports/AuthRequest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Servicios/UserService/auth.service';            
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private apiUrl = `${environment.BASE_URL_API_IPM}/login`;

  constructor(private http: HttpClient, private fb:FormBuilder,
     private authService:AuthService, private router: Router) {}

  frmUser = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(3)])
  });

  
  authenticate() {
    if(!this.frmUser.valid){
      alert('Usuario o contraseña incorrectas');
      return;
    }

    const authRequest: AuthRequest ={
        email: String(this.frmUser.get('email').value),
        password: String(this.frmUser.get('password').value)
    };
      this.authService,this.authenticate(authRequest).subscribe(resp=>{
      
      
      
      }
  
   
  }
  // login(authRequest: AuthRequest): void {
  //   // No necesitas empaquetar authRequest en un objeto adicional
  //   this.http.post(`${this.apiUrl}`, authRequest)
  //     .subscribe(
  //       (response) => {
  //         // Manejar la respuesta exitosa
  //         console.log('Login exitoso', response);
  //       },
  //       (error) => {
  //         // Manejar el error
  //         console.error('Error en el login', error);
  //       }
  //     );
  // }
}
