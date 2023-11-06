
import { Component, OnInit } from '@angular/core';
import { EdituserComponent } from '../../adduser/body/Modals/edituser/edituser.component';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalEdit.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: []
})
export class BodyComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private modalServiceD: ModalService) {}
  
  isModalOpen = false;

  openModal() {
    this.modalServiceD.openModal();
        this.isModalOpen = false;
  }

  closeModal() {
    this.isModalOpen = false;
  }


}
