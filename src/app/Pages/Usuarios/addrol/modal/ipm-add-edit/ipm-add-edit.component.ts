import { Component } from '@angular/core';
import { AddButtonUsuarioRolService } from 'src/app/Servicios/ModalDataService/add-button-usuario-rol.service';


@Component({
  selector: 'app-ipm-add-edit',
  templateUrl: './ipm-add-edit.component.html',
  styleUrls: []
})
export class IPMAddEditComponent {

isAddButtonUsuarioRolS: boolean = false;

  constructor(private modalAddButtonUsuarioRol: AddButtonUsuarioRolService) {
    modalAddButtonUsuarioRol.isAddButtonUsuarioRolS$.subscribe(isOpen => this.isAddButtonUsuarioRolS = isOpen);
 }

 openModalNewAddRol() {
   this.isAddButtonUsuarioRolS = false;
 }

 closeModalAddNewRol() {
   this.isAddButtonUsuarioRolS = false;
 }
}
