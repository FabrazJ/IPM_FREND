import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalConfiguracionService {


  private isModalOpenConfSource = new BehaviorSubject<boolean>(false);
  isModalOpenConf$ = this.isModalOpenConfSource.asObservable();

  OpenConfModal() {
    this.isModalOpenConfSource.next(true);
  }

  CloseConfModal() {
    this.isModalOpenConfSource.next(false);
  }
}
