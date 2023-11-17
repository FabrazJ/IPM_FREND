import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalDeleteUserService {
  
//Modal para eliminar el usuario
// Donde Se crea una instancia privada de BehaviorSubject, que es un tipo de Observable proporcionado por la biblioteca RxJS. 
//Este BehaviorSubject se inicializa con un valor booleano de false. BehaviorSubject es útil porque almacena el último valor
// emitido y permite que los nuevos suscriptores obtengan inmediatamente el último valor.
  private isModalDeleteSource = new BehaviorSubject<boolean>(false);
    //Se crea una propiedad pública llamada que es una versión observable del BehaviorSubject anterior. 

  isModalOpenDel$ = this.isModalDeleteSource.asObservable();
//Para abrir el modal
  OpenDelModal() {
    this.isModalDeleteSource.next(true);
  }
//Para cerrar el modal

  CloseDelModal() {
    this.isModalDeleteSource.next(false);
  }

}
