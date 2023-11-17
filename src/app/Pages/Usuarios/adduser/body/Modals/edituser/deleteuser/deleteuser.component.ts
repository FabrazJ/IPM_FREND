import { Component, OnInit } from '@angular/core';
import { ModalDeleteUserService } from 'src/app/Servicios/ModalDataService/ModalDeleteUser.service'; 
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: []
})
export class DeleteuserComponent implements OnInit {
  

  constructor(private modalDel: ModalDeleteUserService, 
    private router:Router, private route:ActivatedRoute) { 
      modalDel.isModalOpenDel$.subscribe(isOpen => 
        this.isModalOpenDel = isOpen);
    }
    ngOnInit() {
    }

    isModalOpenDel: boolean = false;

    OpenDelModal(){
      this.isModalOpenDel=true;
    }

    CloseDelModal(){
      this.isModalOpenDel=false;
    }
    DeleteUser() {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Delete',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        // Redirigir al usuario a la página home/adduser
        this.router.navigate(['home']);
        this.isModalOpenDel=false;

      });
    }



}
