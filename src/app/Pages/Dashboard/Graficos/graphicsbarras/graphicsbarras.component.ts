import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graphicsbarras',
  templateUrl: './graphicsbarras.component.html',
  styleUrls: []
})
export class GraphicsbarrasComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const canvas: HTMLCanvasElement | null = document.getElementById('myBarChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Horas semanales', 'Horas mensuales', 'Horas diarias'],
            datasets: [
              {
                label: 'Horas',
                data: [12, 19, 3],
                backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  
                ],
                borderColor: [
                  'rgb(54, 162, 235)',
                  'rgb(75, 192, 192)',
                  'rgb(255, 206, 86)',
        
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }
}
