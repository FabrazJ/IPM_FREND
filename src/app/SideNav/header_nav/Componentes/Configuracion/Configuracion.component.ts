import { Component } from '@angular/core';
import { ModalConfiguracionService } from 'src/app/Servicios/ModalDataServiceHS/ModalConfiguracion.service';
@Component({
  selector: 'app-Configuracion',
  templateUrl: './Configuracion.component.html',
  styleUrls: []
})

export class ConfiguracionComponent {

  isModalOpenConf:boolean = false;

  constructor(private modalConf: ModalConfiguracionService) {
    modalConf.isModalOpenConf$.subscribe(isOpen => 
      this.isModalOpenConf = isOpen);
  }

  OpenConfModal() {
    this.isModalOpenConf = true;
  }

  CloseConfModal() {
    this.isModalOpenConf = false;
  }

}
