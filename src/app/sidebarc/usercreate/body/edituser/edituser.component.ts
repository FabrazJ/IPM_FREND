import { Component} from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalEdit/ModalEdit.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: []
})
export class EdituserComponent  {

    // Variable para controlar el modal de editar usuario
    // showModalEditUser = false;
  
    // // Función para mostrar u ocultar el modal de editar usuario
    // toggleModalEditUser() {
    //   this.showModalEditUser = !this.showModalEditUser;
    //   // console.log('Modal state:', this.showModalEditUser); // Registro de estado en la consola
    // }
  
    isModalOpen:boolean = false;

    constructor(private modalServiceD: ModalService) {
      modalServiceD.isModalOpen$.subscribe(isOpen => this.isModalOpen = isOpen);
    }
  
    openModal() {
      this.isModalOpen = true;
    }
  
    closeModal() {
      this.isModalOpen = false;
    }
  
}
