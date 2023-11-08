import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent  {

  
  //No implementando todavia, pero es para cuando se agregue el proyecto. Todavia necesita modificaciones.

  isDropDownOpenResActividades = false;

  toggleDropdownActividad(){
    this.isDropDownOpenResActividades = !this.isDropDownOpenResActividades;
  }

  actividad: string = '';
  descripcion: string = '';
  proyecto: string = 'Proyecto'; // Default
  proyectos: string[] = ['Proyecto 1', 'Proyecto 2'];


}
