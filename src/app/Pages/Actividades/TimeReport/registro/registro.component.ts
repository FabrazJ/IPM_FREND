import { Component } from '@angular/core';
declare var Datepicker: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent  {

  //Datepicker
  private initDatepicker(): void{
    setTimeout(()=> {
      const dateInput = document.getElementById('datepickerId');
      new Datepicker(dateInput, {
        //opciones
      })
    })
  }

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
