
import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentComponent: string = 'child1';
  activeButton: number | null = null;
  previousButton: ElementRef | null = null;
  
  showComponent(component: string , x:any) {
    this.currentComponent = component;
    if (component === 'child1') {
      this.setActiveButton(1, x)
    }
    else {
      this.setActiveButton(2, x)
    }

  }


    @ViewChild('radarChart') radarChart!: ElementRef;
  
    chart: any;
  
    data = {
      labels: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '02:00', '04:00', '06:00', '08:00'],
      datasets: [{
        label: '',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }, {
         
        label: '',
        data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
  
    options = {
      title: {
        display: true,
        text: 'Radar Chart'
      },
      scale: {
        ticks: {
          beginAtZero: true
        }
      }
    };
  
    ngAfterViewInit() {
      this.chart = new Chart(this.radarChart.nativeElement, {
        type: 'radar',
        data: this.data,
        
      });
    }
  









  constructor(private renderer: Renderer2) { 
    
  }
  setActiveButton(buttonNumber: number, buttonElement: ElementRef): void {
    // Remove the active class from the previous button
    if (this.previousButton ) {
      this.renderer.removeClass(this.previousButton, 'active');
    }
    
    // Add the active class to the clicked button
    this.renderer.addClass(buttonElement, 'active');
   
    // Update the active button and store the current button as previous button
    this.activeButton = buttonNumber;
    this.previousButton = buttonElement;
  }
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}









