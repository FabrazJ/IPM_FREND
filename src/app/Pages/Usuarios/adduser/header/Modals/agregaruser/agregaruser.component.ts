import { Component } from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalAddUser.service';
import Swal from 'sweetalert2';

import {  OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ElementRef, Renderer2,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdduserService } from 'src/app/Servicios/UserService/adduser.service';
@Component({
  selector: 'app-agregaruser',
  templateUrl: './agregaruser.component.html',
  styleUrls: []
})
export class AgregaruserComponent  implements OnInit{

  ngOnInit(): void {
    this.frmUserT=this.defaultForm;
  }

  //CONSTRUCTOR CON LAS VARIABLES QUE CORRESPONDE CADA UNA
  constructor(
    // VARIABLE DE AGREGAR USUARIO
    private modalAddUser: ModalService,
    // VARIABLE DE AGREGAR RUTA
    private router: Router,
    //VARIABLE DE ADD USER SERVICE (ES UN SERVICIO)
    private userSrv:AdduserService,

    private fb:FormBuilder,
    private renderer:Renderer2    ) {
    modalAddUser.isModalOpenAUs$.subscribe(isOpen =>
      this.isModalOpenAUs = isOpen);
  }
  //BOTON DE AGREGAR USUARIO PARA EL MODAL DE USUARIO
  isModalOpenAUs:boolean = false;

  OpenUserModal() {
    this.isModalOpenAUs = true;
  }

  CloseUserModal() {
    this.isModalOpenAUs = false;
  }

  ///PARA GUARDAR CAMBIOS ES UN SWITCH ALERT PARA GUARDAR CAMBIOS
  ShowSaveUser() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        this.isModalOpenAUs = false;

      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        this.isModalOpenAUs = false;

      }
    });
  }
//CONEXION DE LA API LOS DATOS REQUERIDOS (NO ESTA 100% CONSUMIDA)
//PERO PERSONITA QUE VA A CONECTAR BIEN LAS APIS, TEN MUCHO CUIDADO CON LAS VARIABLES
frmUserT!:FormGroup;

get defaultForm(){
  return this.fb.group({
    identificacion: this.fb.control('',[Validators.required,
      Validators.minLength(10), Validators.maxLength(10)]),
    nombres:this.fb.control('',[Validators.required,
      Validators.minLength(3)]),
    apellidos: this.fb.control('', [Validators.required,
      Validators.minLength(3)]),
    email: this.fb.control('', [Validators.required,
      Validators.email, Validators.minLength(3)]),
    status: this.fb.control('', [Validators.required,
      Validators.minLength(3)]),
    password:this.fb.control('', [Validators.required,
      Validators.minLength(3)]),
    confirmarpassword:this.fb.control('', [Validators.required,
      Validators.minLength(3)])
  });
}

get identificacion(){
  return this.frmUserT.get('identificacion');
}

get nombres(){
  return this.frmUserT.get('nombres')
}

get apellidos(){
  return this.frmUserT.get('apellidos')
}

get email(){
  return this.frmUserT.get('email')
}

get status(){
  return this.frmUserT.get('status')
}

get password(){
  return this.frmUserT.get('password')
}

get confirmarpassword(){
  return this.frmUserT.get('confirmarpassword')
}


createUser(){
  console.log(this.frmUserT);
  if (this.frmUserT.invalid){
    this.frmUserT.markAllAsTouched();
    Swal.fire({ icon: 'warning', title: 'Notificación',
      text: 'Corrija los datos del usuario e intente nuevamente.'});
    return;
  }

  this.userSrv.createUs(this.frmUserT.value).subscribe(resp=>{
    console.log(resp);
    if(resp.success){
      Swal.fire({ icon: 'success', title: 'Notificación', text: 'Usuario creado. Se enviaron las credenciales al correo electrónico '
      + this.email?.value});
      this.frmUserT.reset();
    }else{
      console.log('SUCCESS FALSE', resp);
      Swal.fire({ icon: 'error', title: 'Notificación', text: resp.message});
    }

  }, (err) => {
    console.log('ERR', err);
    Swal.fire({ icon: 'error', title: 'Notificación', text: err.message});
  });

}


}
