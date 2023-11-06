import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalAddUser/ModalAddUser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {


  ngOnInit() {
  }

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
