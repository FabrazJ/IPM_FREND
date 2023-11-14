import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddButtonUsuarioRolService {
 
  private isAddButtonUsuarioRolSource = new BehaviorSubject<boolean>(false);
  isAddButtonUsuarioRolS$ = this.isAddButtonUsuarioRolSource.asObservable();

  openModalAddNewRol() {
    this.isAddButtonUsuarioRolSource.next(true);
  }

  closeModalAddNewRol() {
    this.isAddButtonUsuarioRolSource.next(false);
  }
  
}




  




