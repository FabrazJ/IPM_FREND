import { Component, OnInit } from '@angular/core';
import { ModalSesionService } from 'src/app/Servicios/ModalDataServiceHS/ModalSesion.service';
@Component({
  selector: 'app-header_nav',
  templateUrl: './header_nav.component.html',
  styleUrls: []
})
export class Header_navComponent implements OnInit {

  constructor(private modalSesionS:ModalSesionService) { }

  ngOnInit() {
  }
  
  
  isDropdownOpen = false;

    
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  //Modal Cerrar Sesion
  isModalOpenSes = false;
  
  OpenSesModal() {
    this.modalSesionS.OpenSesModal();
        this.isModalOpenSes = false;
  }

  CloseSesModal() {
    this.isModalOpenSes = false;
  }
}
