import { Component } from '@angular/core';
import { ModalAddRolService } from 'src/app/Servicios/ModalDataService/ModalAddRol.service';
import { AddButtonUsuarioRolService } from 'src/app/Servicios/ModalDataService/add-button-usuario-rol.service';


@Component({
  selector: 'app-addrol', 
  templateUrl: './addrol.component.html', 
  styleUrls: []
})
export class AddrolComponent {


  constructor(private modalAddRol: ModalAddRolService, private modalAddButtonUsuarioRol: AddButtonUsuarioRolService, ) {}
  
  isModalAddRolS = false;
  isAddButtonUsuarioRolS: boolean = false;

  openModalAddRol() {
    this.modalAddRol.openModalAddRol();
  }

  closeModalAddRol() {
    this.isModalAddRolS = false;
  }

  openModalNewAddRol() {
    this.modalAddButtonUsuarioRol.openModalAddNewRol();
  }

  closeModalAddNewRol() {
    this.isAddButtonUsuarioRolS = false;
  }


}
