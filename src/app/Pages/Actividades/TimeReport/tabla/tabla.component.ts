import { Component } from '@angular/core';
import { Modal } from 'flowbite';
import type { ModalOptions, ModalInterface } from 'flowbite';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: []
})
export class TablaComponent {

  //No implementando todavia, pero es para cuando se agregue el proyecto. Todavia necesita modificaciones.

  isDropDownOption = false;

  toggleDropdownOption(){
    this.isDropDownOption = !this.isDropDownOption;
  }

  isDropDownModal = false;

  toggleDropdownModal(){
    this.isDropDownModal = !this.isDropDownModal;
  }

}
