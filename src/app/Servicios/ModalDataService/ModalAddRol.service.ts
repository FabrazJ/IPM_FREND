import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalAddRolService {
//Modal para agregar rol
// Donde Se crea una instancia privada de BehaviorSubject, que es un tipo de Observable proporcionado por la biblioteca RxJS. 
//Este BehaviorSubject se inicializa con un valor booleano de false. BehaviorSubject es útil porque almacena el último valor
// emitido y permite que los nuevos suscriptores obtengan inmediatamente el último valor.
  private isModalAddRolSource = new BehaviorSubject<boolean>(false);
//Se crea una propiedad pública llamada isModalAddRolS$ que es una versión observable del BehaviorSubject anterior. 
  isModalAddRolS$ = this.isModalAddRolSource.asObservable();
//se llama para abrir el modal. 
  openModalAddRol() {
    this.isModalAddRolSource.next(true);
  }
//se llama para cerrar el modal
  closeModalAddRol() {
    this.isModalAddRolSource.next(false);
  }

  


}
