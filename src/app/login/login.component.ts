import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './service/usuario.service';
import { HttpErrorResponse,HttpResponse} from '@angular/common/http';

// import { User } from './service/user';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder, 
    private auth:UsuarioService, private router:Router){}
 ngOnInit(): void {
   this.loginForm=this.fb.group({
    email:['', Validators.required],
    password:['',Validators.required]
   })
 }

 onLogin(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value)
    this.auth.login(this.loginForm.value)
    .subscribe
    ({
      next: (res: HttpResponse<string>) => {
        alert(res);
        this.loginForm.reset();
        this.router.navigate(['./sidebar'])
      },
      error:(err:Error)=>{
          alert(err.message)
        }
    })
  }else{

  }
 }
}
