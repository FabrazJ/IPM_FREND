import { Component, OnInit } from '@angular/core';
import { ModalDeleteUserService } from 'src/app/Servicios/ModalDataService/ModalDeleteUser.service'; 
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: []
})
export class DeleteuserComponent implements OnInit {
  
  isModalOpenDel: boolean =false;

  constructor(private modalDel: ModalDeleteUserService, 
    private router:Router) { 
      modalDel.isModalOpenDel$.subscribe(isOpen => 
        this.isModalOpenDel = isOpen);
    }
    ngOnInit() {
    }
    OpenDelModal(){
      this.isModalOpenDel=true;
    }

    CloseDelModal(){
      this.isModalOpenDel=false;
    }
  //SwitchAlert
  DeleteUser() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Exit',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      // Redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/adduser']); // Reemplaza 'login' con la ruta real de tu página de inicio de sesión
    });
  }



}
