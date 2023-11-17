import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-GraficoCircular',
  templateUrl: './GraficoCircular.component.html',
  styleUrls: []
})
export class GraficoCircularComponent implements AfterViewInit {
//Usando chart para hacer una simulacion en el grafico circular con datos irreales
//Donde se muestran los proyectos
  ngAfterViewInit(): void {
    const canvas: HTMLCanvasElement | null = document.getElementById('myPieChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['ISC_2023', 'ISC_2023BCOGYE', 'ISC_2024', 'ISC_BCOMACHALA', 'ISC_INCOGNITO'],
            datasets: [
              {
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 206, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                ],
              },
            ],
          },
        });
      }
    }
  }
}