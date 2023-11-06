import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalAddUser.service';
@Component({
  selector: 'app-agregaruser',
  templateUrl: './agregaruser.component.html',
  styleUrls: []
})
export class AgregaruserComponent {

  isModalOpenAUs:boolean = false;

  constructor(private modalAddUser: ModalService) {
    modalAddUser.isModalOpenAUs$.subscribe(isOpen => 
      this.isModalOpenAUs = isOpen);
  }

  OpenUserModal() {
    this.isModalOpenAUs = true;
  }

  CloseUserModal() {
    this.isModalOpenAUs = false;
  }
}
