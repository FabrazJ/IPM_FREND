
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalEdit.service';
import Swal from 'sweetalert2'
import { Renderer2, ElementRef, HostListener } from '@angular/core';
import { ModalDeleteUserService } from 'src/app/Servicios/ModalDataService/ModalDeleteUser.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: [],
  // encapsulation: ViewEncapsulation.ShadowDom

})
export class BodyComponent implements OnInit {
  
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
      if (this.mostrarPopover && !this.el.nativeElement.contains(event.target)) {
          this.mostrarPopover = false;
      } 
  }

  ngOnInit() {
  }

  constructor(private modalServiceD: ModalService, 
    private renderer: Renderer2, private el: ElementRef,
    private modalDel: ModalDeleteUserService) {}
  
  isModalOpen = false;

  openModal() {
    this.modalServiceD.openModal();
        this.isModalOpen = false;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  mostrarPopover = false;

  togglePopover() {
    this.mostrarPopover = !this.mostrarPopover;
  }

//Boton eliminar
isModalOpenDel =false;

OpenDelModal(){
  this.modalDel.OpenDelModal();
  this.isModalOpenDel=false;
}

CloseDelModal(){
  this.isModalOpenDel=false;
}


}
