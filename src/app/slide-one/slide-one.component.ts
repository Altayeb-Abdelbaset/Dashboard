
import { Component, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-slide-one',
  templateUrl: './slide-one.component.html',
  styleUrl: './slide-one.component.css'
})
export class SlideOneComponent {
  @ViewChild('salesChart') salesChartRef!: ElementRef;
 
     
    salesChart: Chart | undefined;
   
  
    ngAfterViewInit() {
        console.log('ngAfterViewInit called');
      this.salesChart = new Chart(this.salesChartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: ['Station 1', 'Station 2', 'Station 3', 'Station 4', 'Station 5', 'Station 6'],
          datasets: [{
            label:'',
            data: [300, 50, 100, 70,150,100],
            backgroundColor: '#ff7f50',
            borderWidth: 1,
            barThickness: 10,
            borderRadius:10
            
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
  
     
    }
}
