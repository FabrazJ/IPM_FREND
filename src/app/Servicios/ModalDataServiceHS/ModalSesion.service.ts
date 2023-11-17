import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalSesionService {
  //Modal para cerrar el usuario
// Donde Se crea una instancia privada de BehaviorSubject, que es un tipo de Observable proporcionado por la biblioteca RxJS. 
//Este BehaviorSubject se inicializa con un valor booleano de false. BehaviorSubject es útil porque almacena el último valor
// emitido y permite que los nuevos suscriptores obtengan inmediatamente el último valor.
  private isModalSesionSource = new BehaviorSubject<boolean>(false);
//Se crea una propiedad pública llamada que es una versión observable del BehaviorSubject anterior. 

  isModalOpenSes$ = this.isModalSesionSource.asObservable();
//Abrir modal
  OpenSesModal() {
    this.isModalSesionSource.next(true);
  }
//Cerrar modal
  CloseSesModal() {
    this.isModalSesionSource.next(false);
  }

}
