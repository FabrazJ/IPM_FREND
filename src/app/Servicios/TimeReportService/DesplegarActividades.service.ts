import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Task Interface
interface Task {
  id?: number;
  proyecto: string;
  codigoProyecto: string;
  descripcion: string;
  tipoActividad: string;
  fecha: string;
  horasRegistradas: number;
}

@Injectable({
  providedIn: 'root'
})
export class MostrarRegistro {

  private apiUrl = environment.BASE_URL_API_IPM;

  constructor(private http: HttpClient) {}

  tasks: Task[] = [];

  getTasks(date: string): Observable<Task[]> {
    const url = `${this.apiUrl}/actividad-diaria/obtener-por-fechas?fecha=${date}`;
    return this.http.get<Task[]>(url);
  }
}

// FilterByFecha Pipe - Desplegar actividades correspondientes del dia
@Pipe({
  name: 'FilterByFecha'
})
export class FilterByFechaPipe {
  transform(tasks: Task[], fecha: string): Task[] {
    return tasks.filter(task => task.fecha === fecha);
  }

}

