import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private isModalOpenUserAdd = new BehaviorSubject<boolean>(false);
  isModalOpenAUs$ = this.isModalOpenUserAdd.asObservable();

  OpenUserModal() {
    this.isModalOpenUserAdd.next(true);
  }

  CloseUserModal() {
    this.isModalOpenUserAdd.next(false);
  }
}
