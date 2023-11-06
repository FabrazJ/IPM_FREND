import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent {
   constructor(private router: Router) {}
  goBackToLogin() {
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
  }
  
  // Variable para controlar el modal de agregar usuario
  showModalAddUser = false;
  
  // Función para mostrar u ocultar el modal de agregar usuario
  toggleModalAddUser() {
    this.showModalAddUser = !this.showModalAddUser;
  }
  

}
