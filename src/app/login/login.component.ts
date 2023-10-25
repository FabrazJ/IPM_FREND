import { Component } from '@angular/core';
import { UsuarioService } from './service/usuario.service';
import { Router } from '@angular/router';

interface LoginResponse {
  success: boolean;
  message: string; // Otra propiedad según la respuesta real
  // Otras propiedades según la respuesta real
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isEmailValid = true; // Bandera para verificar la validez del correo electrónico
  
  validateEmail(event: any) {
    const email = event.target.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = pattern.test(email);
  }
  // Backend
  
  user = {
    username: 'michelle@example.com',
    password: '123'
  };
  errorMessage: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  login() {
    this.usuarioService.login(this.user).subscribe(
      (response: LoginResponse) => {
        // Verificar la respuesta del servidor
        if (response && response.success) {
          // Inicio de sesión exitoso, puedes redirigir a la página de inicio u otra página.
          this.router.navigate(['/sidebar']);
        } else {
          // Inicio de sesión fallido, mostrar un mensaje de error al usuario.
          this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
        }
      },
      (error) => {
        // Manejar errores aquí si hay problemas con la solicitud HTTP.
        console.error('Error en la solicitud de inicio de sesión:', error);
      }
    );
  }
}
