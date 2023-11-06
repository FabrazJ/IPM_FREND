import { Component} from '@angular/core';
import { ModalService } from 'src/app/Servicios/ModalDataService/ModalEdit.service';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: []
})
export class EdituserComponent  {

    isModalOpen:boolean = false;

    constructor(private modalServiceD: ModalService) {
      modalServiceD.isModalOpen$.subscribe(isOpen => 
        this.isModalOpen = isOpen);
    }
  
    openModal() {
      this.isModalOpen = true;
    }
  
    closeModal() {
      this.isModalOpen = false;
    }
  
}
