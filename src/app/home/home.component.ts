

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

  @ViewChild('hourlySalesChart') hourlySalesChartRef!: ElementRef;


  hourlySalesChart: Chart | undefined;

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');


    this.hourlySalesChart = new Chart(this.hourlySalesChartRef.nativeElement, {
      type: 'radar',
      data: {
        labels: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        datasets: [{
          label: 'Hourly Sales',
          data: [20, 10, 4, 2, 20, 30, 40, 35, 30, 20, 10, 5],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: false
            },
            suggestedMin: 0,
            suggestedMax: 50
          }
        }
      }
    });
  }

  constructor(private renderer: Renderer2) { 
    
  }
  setActiveButton(buttonNumber: number, buttonElement: ElementRef): void {
    // Remove the active class from the previous button
    if (this.previousButton) {
      this.renderer.removeClass(this.previousButton, 'active');
    }

    // Add the active class to the clicked button
    this.renderer.addClass(buttonElement, 'active');

    // Update the active button and store the current button as previous button
    this.activeButton = buttonNumber;
    this.previousButton = buttonElement;
  }
}









