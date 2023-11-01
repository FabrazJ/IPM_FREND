import { Component} from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './User.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent {

    email: string = 'michelle@example.com';
    password: string = '123';
  
    constructor(private userService: UserService, private router:Router) {}
  
    login() {
      this.userService.login(this.email, this.password).subscribe(
        (response: any) => {
          if (response.success) {
            alert('Inicio de sesión exitoso');
            this.router.navigate(['/sidebar']);
            // Puedes redirigir a otra página después del inicio de sesión exitoso aquí
          } else {
            alert('Inicio de sesión fallido. Credenciales incorrectas.');
          }
        },
        (error) => {
          console.error(error);
          alert('Inicio de sesión fallido. Ocurrió un error en el servidor.');
        }
      );
    }
  }
  
  
  
  
  
  
  
  //implements OnInit {
//   loginForm!: FormGroup;

//   constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
//   }
  
//   ngOnInit(): void {
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required],
//     });
//   }
//   onSubmit() {
//     if (this.loginForm.valid) {
//       const emailControl = this.loginForm.get('email');
//       const passwordControl = this.loginForm.get('password');
  
//       if (emailControl && passwordControl) {
//         const email = emailControl.value;
//         const password = passwordControl.value;
  
//         this.userService.login(email, password).subscribe(
//           (res: any) => {
//             if (res.success) {
//               alert('Inicio de sesión exitoso');
//               this.loginForm.reset();
//               this.router.navigate(['/sidebar']); // Redirigir a una página después del inicio de sesión exitoso
//             } else {
//               alert('Inicio de sesión fallido. Credenciales no válidas.');
//             }
//           },
//           (error) => {
//             console.error(error);
//             alert('Inicio de sesión fallido. Se produjo un error.');
//           }
//         );
//       } else {
//         alert('Los campos de correo electrónico y contraseña son nulos.');
//       }
//     } else {
//       alert('Por favor, complete todos los campos requeridos.');
//     }
//   }
  

// }

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


