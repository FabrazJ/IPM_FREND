import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalAddRolService {

  private isModalAddRolSource = new BehaviorSubject<boolean>(false);
  isModalAddRolS$ = this.isModalAddRolSource.asObservable();

  openModalAddRol() {
    this.isModalAddRolSource.next(true);
  }

  closeModalAddRol() {
    this.isModalAddRolSource.next(false);
  }

  


}
