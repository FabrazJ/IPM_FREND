import { Component} from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalEdit.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: []
})
export class EdituserComponent  {

    isModalOpen:boolean = false;

    constructor(private modalServiceD: ModalService) {
      modalServiceD.isModalOpen$.subscribe(isOpen => 
        this.isModalOpen = isOpen);
    }
  
    openModal() {
      this.isModalOpen = true;
    }
  
    closeModal() {
      this.isModalOpen = false;
    }
  //Visualizar contraseña 
  showPassword = false;
  password = ''; // Aquí debes enlazar la propiedad con [(ngModel)] en el HTML

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  showPassword1 = false;
  password1 = ''; // Aquí debes enlazar la propiedad con [(ngModel)] en el HTML

  togglePasswordVisibility1() {
    this.showPassword1 = !this.showPassword;
  }

  ///PARA GUARDAR CAMBIOS
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
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
}
