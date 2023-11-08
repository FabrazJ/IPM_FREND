// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataDeleteService {
  private data: any[] = []; // Reemplaza con tus datos reales

  deleteData(index: number) {
    this.data.splice(index, 1);
  }

  getData() {
    return this.data;
  }
}
