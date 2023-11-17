import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

//Modal para agregar el usuario
// Donde Se crea una instancia privada de BehaviorSubject, que es un tipo de Observable proporcionado por la biblioteca RxJS. 
//Este BehaviorSubject se inicializa con un valor booleano de false. BehaviorSubject es útil porque almacena el último valor
// emitido y permite que los nuevos suscriptores obtengan inmediatamente el último valor.
  private isModalOpenUserAdd = new BehaviorSubject<boolean>(false);
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
