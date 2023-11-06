import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalAddUser/ModalAddUser.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: []
})
export class AdduserComponent {

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
