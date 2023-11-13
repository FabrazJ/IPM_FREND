import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Servicios/UserService/auth.service';
import { AuthRequest } from '../models/reports/AuthRequest';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);

        // Puedes realizar acciones adicionales después de iniciar sesión
      },
      error => {
        console.error('Error al iniciar sesión:', error);
      }
    );
  }

  // email: string = '';
  // password: string = '';

  // constructor(private authService: AuthService) {}

  // login() {
  //   this.authService.login(this.email, this.password).subscribe((response) => {
  //     // Manejar la respuesta del servidor, por ejemplo, almacenar el token en localStorage.
  //     console.log(response);
  //   });
  // }
//   loading = false;  // Variable para controlar el indicador de carga
//   errorMessage = '';  // Mensaje de error que se mostrará al usuario en caso de falla

//   frmUser = this.fb.group({
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(3)]]
//   });

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {}

// login(){
//   this.authService.login(this.email, this.password).subscribe((response) => {
//     // Manejar la respuesta del servidor, por ejemplo, almacenar el token en localStorage.
//     console.log(response);
//   });
// }


  
  }