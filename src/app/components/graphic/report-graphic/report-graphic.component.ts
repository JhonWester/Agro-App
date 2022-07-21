import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { forkJoin } from 'rxjs';
import { ConnectDataService } from 'src/app/Services/connect-data.service';

@Component({
  selector: 'app-report-graphic',
  templateUrl: './report-graphic.component.html',
  styleUrls: ['./report-graphic.component.css']
})
export class ReportGraphicComponent implements OnInit {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Indice 1',
      'Indice 2',
      'Indice 3',
      'Indice 4',
      'Indice 5',
      'Indice 6',
      'Indice 7'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Nivel de humedad de suelo',
        fill: true,
        tension: 0.5,
        borderColor: 'rgba(77,83,96,1)',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  newDataLG: Array<number>;
  newDataFT: Array<number>;

  public lineChartLegend = true;
  
  constructor(private connectDB: ConnectDataService) { }

  ngOnInit(): void {
    this.getListLG();
  }

  getListLG() {
    this.connectDB.getIndexLG().subscribe((res: any) => {
      if (res) {
        this.newDataLG = res;
        this.getListFT();
      }
    })
  }

  getListFT() {
    this.connectDB.getIndexFT().subscribe(res => {
      this.newDataFT = res;
      this.updateChart();
    });
  }

  updateChart() {
    this.lineChartData.labels = [
      'Indice 1',
      'Indice 2',
      'Indice 3',
      'Indice 4',
      'Indice 5',
      'Indice 6',
      'Indice 7'
    ];

    this.lineChartData.datasets = [
      {
        data: this.newDataLG,
        label: 'Luz actual %',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: this.newDataFT,
        label: 'Humedad actual %',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin'
      }
    ];
    this.chart?.update();
  }

}
