import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalSesionService {

  private isModalSesionSource = new BehaviorSubject<boolean>(false);
  isModalOpenSes$ = this.isModalSesionSource.asObservable();

  OpenSesModal() {
    this.isModalSesionSource.next(true);
  }

  CloseSesModal() {
    this.isModalSesionSource.next(false);
  }

}
