import { Component } from '@angular/core';
import { ModalAddRolService } from 'src/app/Servicios/ModalDataService/ModalAddRol.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent {

  isModalAddRolS: boolean = false;

  constructor(private modalAddRol: ModalAddRolService) {
    modalAddRol.isModalAddRolS$.subscribe(isOpen => this.isModalAddRolS = isOpen);
 }

 openModalAddRol() {
   this.isModalAddRolS = true;
 }

 closeModalAddRol() {
   this.isModalAddRolS = false;
 }
}
