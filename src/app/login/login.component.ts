import { Component,OnInit } from '@angular/core';
import{ FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from './service/usuario.service';
import { UsuarioRequest } from './service/usuarioRequest';
// import { UsuarioService } from './service/usuario.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginError:string="";
   loginForm=this.formBuilder.group({
    email:['michelle@example.com',[Validators.required,Validators.email]],
    passwor:['',Validators.required],
   })

   constructor(private formBuilder:FormBuilder, private router:Router, private UsuarioService:UsuarioService){   }

   ngOnInit(): void { }

   login(){
    if(this.loginForm.valid){
      this.UsuarioService.login(this.loginForm.value as UsuarioRequest).subscribe({
        next:(userData)=>{
          console.log(userData);
        },
        error:(errorData)=>{
          console.error(errorData);
          this.loginError=errorData;
        },
        complete:()=>{
          console.info('login COmpleto');
          this.router.navigateByUrl('/sidebar');  
          this.loginForm.reset();
        }

      })
    
    }
    else{
      alert("Error al ingresar los datos");
    }
   }

}
