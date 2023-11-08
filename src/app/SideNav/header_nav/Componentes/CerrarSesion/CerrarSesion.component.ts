import { Component } from '@angular/core';
import { ModalSesionService } from 'src/app/Servicios/ModalDataServiceHS/ModalSesion.service';
@Component({
  selector: 'app-CerrarSesion',
  templateUrl: './CerrarSesion.component.html',
  styleUrls: []
})
export class CerrarSesionComponent  {

    
  isModalOpenSes:boolean = false;

  constructor(private modalSesionS: ModalSesionService) {
    modalSesionS.isModalOpenSes$.subscribe(isOpen => 
      this.isModalOpenSes = isOpen);
  }

  OpenSesModal() {
    this.isModalOpenSes = true;
  }

  CloseSesModal() {
    this.isModalOpenSes = false;
  }
}
