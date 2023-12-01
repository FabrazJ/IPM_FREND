
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalEdit.service';
import Swal from 'sweetalert2';
import { HostListener } from '@angular/core';
import { Renderer2,ElementRef } from '@angular/core';
import { ModalDeleteUserService } from 'src/app/Servicios/ModalDataService/ModalDeleteUser.service';
import { Userservice } from 'src/app/Servicios/UserService/user.service';
import { User } from 'src/app/models/reports/User.model';
import { Response } from 'src/app/models/reports/Response.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: [],
  // encapsulation: ViewEncapsulation.ShadowDom

})
export class BodyComponent implements OnInit {
users: User[] = [];
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
      if (this.mostrarPopover && !this.el.nativeElement.contains(event.target)) {
          this.mostrarPopover = false;
      } 
  }

  ngOnInit() {
   this.userservice.getAllUs().subscribe(
    (data: Response<User[]>) => {
      this.users = data.data;
      console.log(this.users);
   },
   );
  }

  constructor(private modalServiceD: ModalService, 
    private renderer: Renderer2, private el: ElementRef,
    private modalDel: ModalDeleteUserService,
    private userservice:Userservice) {
      
    }
  //BOTON DE EDITAR QUE ABRE EL MODAL DE EDICIÓN
  isModalOpen = false;
  
  openModal() {
    this.modalServiceD.openModal();
        this.isModalOpen = false;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  //MOSTRAR MENSAJE DE CONTRASEÑA
  mostrarPopover = false;

  togglePopover() {
    this.mostrarPopover = !this.mostrarPopover;
  }

//BOTON DE ELIMINAR QUE EL MODAL DE DELETE
  isModalOpenDel = false;
  //Abrir modal
  OpenDelModal(){
    this.modalDel.OpenDelModal();
    this.isModalOpenDel = false;
  }
  //Cerrar modal
  CloseDelModal(){
    this.isModalOpenDel = false;
  }
  //CONEXION API


}
