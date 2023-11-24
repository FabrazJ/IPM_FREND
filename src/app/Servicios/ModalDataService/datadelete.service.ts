import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataDeleteService {
  private apiUrl = environment.BASE_URL_API_IPM;
  private isDeleteRolSource = new BehaviorSubject<boolean>(false);

  isDeleteRolSource$ = this.isDeleteRolSource.asObservable();

  openModalDeleteRol() {
    this.isDeleteRolSource.next(true);
  }

  closeModalDeleteRol() {
    this.isDeleteRolSource.next(false);
  
  }

}
