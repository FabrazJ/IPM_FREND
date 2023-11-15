import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalDeleteUserService {
  
  private isModalDeleteSource = new BehaviorSubject<boolean>(false);
  isModalOpenDel$ = this.isModalDeleteSource.asObservable();

  OpenDelModal() {
    this.isModalDeleteSource.next(true);
  }

  CloseDelModal() {
    this.isModalDeleteSource.next(false);
  }

}
