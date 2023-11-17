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
  
  //VARIABLES DE LOS CONSTRUCTORES QUE NECESITAMOS
  constructor(
    //SERVICIO DE SESION
    private modalSesionS: ModalSesionService,
    //VARIABLE PARA ENRUTAR
     private router:Router
     ) {
      //MODAL DE CERRAR SESION
    modalSesionS.isModalOpenSes$.subscribe(isOpen => 
      this.isModalOpenSes = isOpen);
    }
  //BOTON DE CERRAR SESION DONDE SE ABRE EL MODAL 
  isModalOpenSes:boolean = false;

  OpenSesModal() {
    this.isModalOpenSes = true;
  }

  CloseSesModal() {
    this.isModalOpenSes = false;
  }

  //SwitchAlert CUANDO SE DE YES IM A SURE, SE MUESTRE EL SWITCH PARA UNA SALIDA DE SESION CON EXITO
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
