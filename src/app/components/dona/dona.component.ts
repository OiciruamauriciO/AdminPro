import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit{

  public expectedString1: string = 'Download Sales 1';
  public expectedString2: string = 'Download Sales 2';
  public expectedString3: string = 'Download Sales 3';
  public expectedString4: string = 'Download Sales 4';

  ngOnInit(): void {
    console.log(this.labels);
    this.labelsObserver(this.labels[0]);
  }

  @Input('title') title: string = 'Sin Título';

  @Input('labels') labels: string[] = [
    'Sin label',
    'Sin label',
    'Sin label',
  ];

  // Doughnut
  public doughnutChartLabels: string[] = this.labels;

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#759eff', '#75c7ff', '#525558'],
      },
      {
        data: [50, 150, 120],
        backgroundColor: ['#759eff', '#75c7ff', '#525558'],
      },
      {
        data: [250, 130, 70],
        backgroundColor: ['#759eff', '#75c7ff', '#525558'],
      },
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  labelsObserver(element: string){
    if(element===this.expectedString1){
      this.doughnutChartLabels[0]=this.labels[0];
      this.doughnutChartLabels[1]=this.labels[1];
      this.doughnutChartLabels[2]=this.labels[2];
    } else if(element===this.expectedString2) {
      this.doughnutChartLabels[0]=this.labels[0];
      this.doughnutChartLabels[1]=this.labels[1];
      this.doughnutChartLabels[2]=this.labels[2];
    } else if(element===this.expectedString3) {
      this.doughnutChartLabels[0]=this.labels[0];
      this.doughnutChartLabels[1]=this.labels[1];
      this.doughnutChartLabels[2]=this.labels[2];
    } else if(element===this.expectedString4) {
      this.doughnutChartLabels[0]=this.labels[0];
      this.doughnutChartLabels[1]=this.labels[1];
      this.doughnutChartLabels[2]=this.labels[2];
    } else { 
      console.log("Unknown error or string is not coincident"); 
      this.doughnutChartLabels[0]=this.labels[0];
      this.doughnutChartLabels[1]=this.labels[1];
      this.doughnutChartLabels[2]=this.labels[2];
    }
  }

/*   dataObserver(element: Number){
    
  } */
}
