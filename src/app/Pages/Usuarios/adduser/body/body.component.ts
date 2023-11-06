
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { EdituserComponent } from '../../adduser/body/Modals/edituser/edituser.component';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalEdit.service';
import Swal from 'sweetalert2'
import { Values } from './Enum/Values.enum';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: [],
  // encapsulation: ViewEncapsulation.ShadowDom

})
export class BodyComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private modalServiceD: ModalService) {}
  
  isModalOpen = false;

  openModal() {
    this.modalServiceD.openModal();
        this.isModalOpen = false;
  }

  closeModal() {
    this.isModalOpen = false;
  }

//Boton 

  async options() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-warning'
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons.fire(
    {
      showCloseButton: true,
      title: 'Presionaste Eliminar',
      text: '¿Estas seguro?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      reverseButtons: false
    }
    ).then((result) => {
      if (result.value) {
        console.log('dddd');
        return;
      }
      console.log('cancel');
    });
  }
}
