import { Component, OnInit } from '@angular/core';
import { DataDeleteService } from 'src/app/Servicios/ModalDataService/datadelete.service';
import { MostrarRegistro, FilterByFechaPipe } from 'src/app/Servicios/TimeReportService/DesplegarActividades.service';

interface Task {
  id?: number;
  proyecto: string;
  codigoProyecto: string;
  descripcion: string;
  tipoActividad: string;
  fecha: string;
  horasRegistradas: number;
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: [],
  providers: [FilterByFechaPipe]
})
export class TablaComponent implements OnInit{


  isDropDownOption = false;

  toggleDropdownOption(){
    this.isDropDownOption = !this.isDropDownOption;
  }

  isDropDownOption2 = false;

  toggleDropdownOption2(){
    this.isDropDownOption2 = !this.isDropDownOption2;
  }

  isDropDownOption3 = false;

  toggleDropdownOption3(){
    this.isDropDownOption3 = !this.isDropDownOption3;
  }


  //Fecha correspondiente al dia actual

  fechaVar : any;
  fechaVarRegistro : any;
  months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  date = new Date();
  currentMonth = this.date.getMonth();
  currentDay = this.date.getDate();

  getMonthName(monthIndex: number): string {
    return this.months[monthIndex];
  }

  //Horas registradas
  currentTotalHours: number = 0;

  updateTotalHours(event: any) {
    const enteredHours = Number(event.target.value);
    if (!isNaN(enteredHours)) {
      const currentTotalHours = Number(this.currentTotalHours);
      this.currentTotalHours = currentTotalHours + enteredHours;
    }
  }

  ngOnInit(): void {
    this.fechaVar = this.getMonthName(this.currentMonth) + " " + this.currentDay;
    this.fechaVarRegistro = new Date().toISOString().split('T')[0];
    this.getTasks();
  }

  //Modal para eliminar registro
  constructor(private modalDeleteRol: DataDeleteService, private mostrarRegistro: MostrarRegistro){}

  openModalDeleteRol() {
    this.modalDeleteRol.openModalDeleteRol();
  }

  //Desplegar Actividades en base al dia mediante el servicio DesplegarActividades

  tasks: Task[] = [];

  getTasks(): void {
    this.mostrarRegistro.getTasks(this.fechaVarRegistro).subscribe(
      (tasks) => {
        this.tasks = tasks;
        this.currentTotalHours = 0;
      },
      (error) => {
        console.error(error);
      }
    );
  }



}
