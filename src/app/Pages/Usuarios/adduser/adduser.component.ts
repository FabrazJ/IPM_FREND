import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { ElementRef, Renderer2,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdduserService } from 'src/app/Servicios/UserService/adduser.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: []
})
export class AdduserComponent implements OnInit{
  
  constructor(private router: Router,
    private fb:FormBuilder, 
    private renderer:Renderer2,
    private userSrv:AdduserService) {}
  
  ngOnInit(): void {
    this.frmUserT=this.defaultForm;
  }


  goBackToLogin() {
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
  }
  
  // Variable para controlar el modal de agregar usuario
  showModalAddUser = false;
  
  // Función para mostrar u ocultar el modal de agregar usuario
  toggleModalAddUser() {
    this.showModalAddUser = !this.showModalAddUser;
  }
  
  //CONEXION DE LA API
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