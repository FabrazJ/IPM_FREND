import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-GraficoRadar',
  templateUrl: './GraficoRadar.component.html',
  styleUrls: []
})
export class GraficoRadarComponent  implements AfterViewInit {
//Usando chart para hacer una simulacion en el grafico radar con datos irreales
//Donde se muestren las actividades

  ngAfterViewInit(): void {
    const canvas: HTMLCanvasElement | null = document.getElementById('myRadarChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Mensuales', 'Semanales', 'Diarias'],
            datasets: [
              {
                label: 'Actividades',
                data: [12, 19, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
              },
            ],
          },
        });
      }
    }
  }
}