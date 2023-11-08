import { Component } from '@angular/core';
import { ModalAddRolService } from 'src/app/Servicios/ModalDataService/ModalAddRol.service';
import { DataDeleteService } from 'src/app/Servicios/ModalDataService/datadelete.service';

@Component({
  selector: 'app-addrol',
  templateUrl: './addrol.component.html',
  styleUrls: []
})
export class AddrolComponent {




  constructor(private modalAddRol: ModalAddRolService) {}
  
  isModalAddRolS = false;

  openModalAddRol() {
    this.modalAddRol.openModalAddRol();
  }

  closeModalAddRol() {
    this.isModalAddRolS = false;
  }


}
