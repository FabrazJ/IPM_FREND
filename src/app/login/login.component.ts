import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
//importacion de los models por lo que se van a usar en la conexion de la API
import { AuthRequest } from '../models/reports/AuthRequest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Servicios/UserService/auth.service';            
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //LLAMA LA RUTA QUE DONDE ESTA LA API QUE ESTE CASO SERIA LOGIN "/api/usuarios"
  //Se tiene que corregir
  private apiUrl = `${environment.BASE_URL_API_IPM}/login`;
  //Constructor para llamar el HTTPCLIENT donde agrupa conexiones HTTP siempre que sea posible y las usa para más de una solicitud
  constructor(private http: HttpClient, private fb:FormBuilder,
     private authService:AuthService, private router: Router) {}

  //AQUI AGRUPA LOS DATOS QUE VAS A CONSUMIR Y LOS VAS A VALIDAR
  frmUser = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(3)])
  });

  
}
