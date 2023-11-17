import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataDeleteService {

  private isDeleteRolSource = new BehaviorSubject<boolean>(false);
  isDeleteRolSource$ = this.isDeleteRolSource.asObservable();

  openModalDeleteRol() {
    this.isDeleteRolSource.next(true);
  }

  closeModalDeleteRol() {
    this.isDeleteRolSource.next(false);
  
  }

}
