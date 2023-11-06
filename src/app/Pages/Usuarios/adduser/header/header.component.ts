import { Component } from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalAddUser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {


  constructor(private modalAddUser: ModalService) {}

    
  isModalOpenAUs = false;


  OpenUserModal() {
    this.modalAddUser.OpenUserModal();
    this.isModalOpenAUs = false;
  }

  CloseUserModal() {
    this.isModalOpenAUs = false;
  }

}
