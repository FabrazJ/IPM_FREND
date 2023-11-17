import { Component} from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalEdit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: []
})
export class EdituserComponent  {
 

    constructor(private modalServiceD: ModalService) {
      modalServiceD.isModalOpen$.subscribe(isOpen => 
        this.isModalOpen = isOpen);
    }

    //Para abrir y cerrar el modal
    isModalOpen:boolean = false;

    openModal() {
      this.isModalOpen = true;
    }
  
    closeModal() {
      this.isModalOpen = false;
    }
    
    public isInputDisabled: boolean = true;

  ///PARA GUARDAR CAMBIOS SWEET ALERT
  showConfirmationDialog() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        this.isModalOpen = false;

      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        this.isModalOpen = false;

      }
    });
  }
}
