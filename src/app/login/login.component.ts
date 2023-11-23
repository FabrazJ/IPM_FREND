import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
//importacion de los models por lo que se van a usar en la conexion de la API
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
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  frmUser: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    contraseña: ['', [Validators.required, Validators.minLength(6)]],
    remember: ['0', []]
  });


  login() {
    console.log('llegue al login method');
    console.log('this.frmUser',this.frmUser);
    const credentials = {
      email: this.frmUser.value.email,
      contraseña: this.frmUser.value.contraseña, // Cambiar 'contraseña' o 'password' según lo que estés usando
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        // Manejar la respuesta exitosa aquí, por ejemplo, almacenar el token
        // y redirigir a la página principal
        console.log('Login exitoso:', response);
        // Ejemplo de redirección
        this.router.navigate(['/home']);
      },
      error: (error: HttpErrorResponse) => {
        // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
        console.error('Error en el login:', error);
        Swal.fire('Error', 'Error en la autenticación', 'error');
      },
      complete: () => {
        // Manejar la lógica cuando la operación Observable está completa
      }
    });
  }
}

  

  


