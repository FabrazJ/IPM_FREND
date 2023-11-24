import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalAddUser.service'

// COMPONENTE DEL ADD USER
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: []
})
export class AdduserComponent implements OnInit{
  
  //VARIABLES PRIVADAS
  constructor(private router: Router, private api: ModalService
    ) {}
  
  ngOnInit(){
    
  }


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