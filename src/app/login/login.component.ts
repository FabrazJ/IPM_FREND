import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './User.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: UserService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['michelle@example.com', [Validators.required, Validators.email]],
      password: ['123', Validators.required],
    });
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      
      this.authService.login(email, password).subscribe(
        (res: any) => {
          if (res.success) {
            alert('Inicio de sesión exitoso');
            this.loginForm.reset();
            this.router.navigate(['/sidebar']); // Redirigir a una página después del inicio de sesión exitoso
          } else {
            alert('Inicio de sesión fallido. Credenciales no válidas.');
          }
        },
        (error) => {
          console.error(error);
          alert('Inicio de sesión fallido. Se produjo un error.');
        }
      );
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }


}

// conexion que si da 

//
// datos:any;

// constructor(private user:UserService){}
// ngOnInit(): void {
//   this.user.getDatos().subscribe((data: any) => {
//     this.datos = data;
//   });

//implements OnInit {
//   loginForm!: FormGroup;

//   constructor(
//     private fb: FormBuilder,

//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onLogin() {
//     if (this.loginForm.valid) {
//       this.auth.login(this.loginForm.value).subscribe(
//         (res: any) => {
//           if (res.success) {
//             alert('Inicio de sesión exitoso');
//             this.loginForm.reset();
//             this.router.navigate(['/sidebar']); // Asegúrate de que esta ruta exista en tu enrutador
//           } else {
//             alert('Inicio de sesión fallido. Credenciales no válidas.');
//           }
//         },
//         (error) => {
//           console.error(error);
//           alert('Inicio de sesión fallido. Se produjo un error.');
//         }
//       );
//     } else {
//       alert('Por favor, complete todos los campos requeridos.');
//     }
//   }


