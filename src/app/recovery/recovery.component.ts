import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent {
  constructor(private router: Router) {}
  resetPassword() {
    // Implementa la lógica para enviar una solicitud al servidor o servicio de autenticación
    // para la recuperación de contraseña.
  }
  goBackToLogin() {
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
  }
}
