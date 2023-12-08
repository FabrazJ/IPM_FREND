import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { AddRegistro } from 'src/app/Servicios/TimeReportService/AddRegistro.service'
;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})


export class RegistroComponent {

  //Descripción
  description: string = ''; // Initialize an empty string for description

  onDescriptionChange(event: any): void {
    this.description = event.target.value; // Update description with the input value
  }


  //Datepicker
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      const date = event.value; // Access the date only if it exists
      console.log(`${type}: Date: ${date.toISOString()}`);
    } else {
      console.log(`${type}: Date: Null`) // Log message when date is null
    }
    this.events.push(`${type}: ${event.value}`);
  }

  //Selecion de Proyecto
  selectedProyecto: string | undefined; // Initialize as undefined

  seleccionProyecto(event: any): void {
    console.log(`Selected Project: ${event.target.value}`);
    this.selectedProyecto = event.target.value;
  }

  //Codigo de Proyecto
  codigoProyecto: string | undefined; // Initialize as undefined

  seleccionCodigoProyecto(event: any): void {
    console.log(`Selected Project: ${event.target.value}`);
    this.codigoProyecto = event.target.value;
  }

  //Agregar registro mediante el servicio AddRegistro

  constructor(private registroService: AddRegistro) {}
  //Agregar
  addRegistro(): void {
    // Variables a agregar
    const data = {
      descripcion: this.description,
      date: this.events[0], // Assumiend que el 1er elementos del array de events is la fecha seleccionada.
      proyecto: this.selectedProyecto,
      codigoProyecto: this.codigoProyecto,
    };

    this.registroService.addRegistro(data).subscribe(
    (response) => {
      console.log('Registro agregadp exitosamente!');
    },
    (error) => {
      console.error('Error agregando registro', error);
    }
  );
  }

  //Toggles para los dropdown del registro
  isDropdownOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isDropdownOpen2 = false;
  toggleDropdown2() {
    this.isDropdownOpen2 = !this.isDropdownOpen2;
  }



}
