import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalAddUser.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit{
     
  ngOnInit(): void {
  }

  constructor(private modalAddUser: ModalService) {}

  //BOTON DE AGREGAR ADD USER, DONDE SALE EL MODAL DE LOS CAMPOS REQUERIDOS
    
  isModalOpenAUs = false;
//Abrir modal

  OpenUserModal() {
    this.modalAddUser.OpenUserModal();
    this.isModalOpenAUs = false;
  }
//Cerrar modal
  CloseUserModal() {
    this.isModalOpenAUs = false;
  }
 
}
