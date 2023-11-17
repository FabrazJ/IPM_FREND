import { Component } from '@angular/core';
import { DataDeleteService } from 'src/app/Servicios/ModalDataService/datadelete.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confdeletemodal',
  templateUrl: './confdeletemodal.component.html',
  styleUrls: []
})
export class ConfDeleteComponent {


  isDeleteRolSource: boolean = false;

  constructor(private modalDeleteRol: DataDeleteService, private router: Router) {
    modalDeleteRol.isDeleteRolSource$.subscribe(isOpen => this.isDeleteRolSource = isOpen);
 }

 openModalDeleteRol() {
   this.isDeleteRolSource = false;
 }

 closeModalDeleteRol() {
   this.isDeleteRolSource = false;
 }
 //SwitchAlert
 Exit() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Eliminado con Exito',
    showConfirmButton: false,
    timer: 1500
  }).then(() => {
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/home']); // Reemplaza 'login' con la ruta real de tu página de inicio de sesión
  });
}
}
