import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalCuentaService {


  private isModalOpenCtaSource = new BehaviorSubject<boolean>(false);
  isModalOpenCta$ = this.isModalOpenCtaSource.asObservable();

  OpenCtaModal() {
    this.isModalOpenCtaSource.next(true);
  }

  CloseCtafModal() {
    this.isModalOpenCtaSource.next(false);
  }
}
