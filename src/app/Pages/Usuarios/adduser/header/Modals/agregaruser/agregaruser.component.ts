import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalAddUser.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregaruser',
  templateUrl: './agregaruser.component.html',
  styleUrls: []
})
export class AgregaruserComponent {

  isModalOpenAUs:boolean = false;

  constructor(private modalAddUser: ModalService) {
    modalAddUser.isModalOpenAUs$.subscribe(isOpen => 
      this.isModalOpenAUs = isOpen);
  }

  OpenUserModal() {
    this.isModalOpenAUs = true;
  }

  CloseUserModal() {
    this.isModalOpenAUs = false;
  }

  ///PARA GUARDAR CAMBIOS
  ShowSaveUser() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        this.isModalOpenAUs = false;

      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        this.isModalOpenAUs = false;

      }
    });
  }
}
