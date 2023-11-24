import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private apiUrl = environment.BASE_URL_API_IPM;
//Modal para agregar el usuario
// Donde Se crea una instancia privada de BehaviorSubject, que es un tipo de Observable proporcionado por la biblioteca RxJS. 
//Este BehaviorSubject se inicializa con un valor booleano de false. BehaviorSubject es útil porque almacena el último valor
// emitido y permite que los nuevos suscriptores obtengan inmediatamente el último valor.
  private isModalOpenUserAdd = new BehaviorSubject<boolean>(false);

//Aqui empieza la logica de obtencion de Datos de la A
  constructor(private http: HttpClient) {}

 
  //Se crea una propiedad pública llamada que es una versión observable del BehaviorSubject anterior. 
  isModalOpenAUs$ = this.isModalOpenUserAdd.asObservable();
//se llama para abrir el modal. 

  OpenUserModal() {
    this.isModalOpenUserAdd.next(true);
  }
//se llama para cerrar el modal. 

  CloseUserModal() {
    this.isModalOpenUserAdd.next(false);
  }
}
