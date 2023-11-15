import { Component } from '@angular/core';
import { ModalSesionService } from 'src/app/Servicios/ModalDataServiceHS/ModalSesion.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-CerrarSesion',
  templateUrl: './CerrarSesion.component.html',
  styleUrls: []
})
export class CerrarSesionComponent  {

    
  isModalOpenSes:boolean = false;

  constructor(private modalSesionS: ModalSesionService,
     private router:Router) {
    modalSesionS.isModalOpenSes$.subscribe(isOpen => 
      this.isModalOpenSes = isOpen);
  }

  OpenSesModal() {
    this.isModalOpenSes = true;
  }

  CloseSesModal() {
    this.isModalOpenSes = false;
  }

  //SwitchAlert
  Exit() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Exit',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      // Redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/login']); // Reemplaza 'login' con la ruta real de tu página de inicio de sesión
    });
  }
  
}
