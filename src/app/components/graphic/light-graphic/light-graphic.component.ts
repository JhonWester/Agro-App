import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { SensorLDR } from 'src/app/Models/Class/SensorLDR';
import { ConnectDataService } from 'src/app/Services/connect-data.service';

@Component({
  selector: 'app-light-graphic',
  templateUrl: './light-graphic.component.html',
  styleUrls: ['./light-graphic.component.css']
})
export class LightGraphicComponent implements OnInit {

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Indice 1', 'Indice 2', 'Indice 3', 'Indice 4', 'Indice 5', 'Indice 6', 'Indice 7' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Nivel de luz anterior %' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Nivel de luz actual %' }
    ]
  };
  
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  oldData: Array<number>;
  newData: Array<number>;
  sensorLuz: SensorLDR;

  constructor(private connectDB: ConnectDataService) { }

  ngOnInit(): void {
    this.getListFT();
    this.getLastLDR();
  }

  getListFT() {
    this.connectDB.getIndexLG().subscribe((res: any) => {
      if (res) {
        this.oldData = this.newData ?? res;
        this.newData = res;
        this.updateChart(this.oldData, this.newData);
      }
    })
  }

  updateChart(data1: Array<number>, data2: Array<number>) {
    this.barChartData = {
      labels: [ 'Indice 1', 'Indice 2', 'Indice 3', 'Indice 4', 'Indice 5', 'Indice 6', 'Indice 7' ],
      datasets: [
        { data: data1, label: 'Nivel de luz anterior %' },
        { data: data2, label: 'Nivel de luz actual %' }
      ]
    };
  }

  getLastLDR() {
    this.connectDB.getSensorLDR().subscribe((res: any) => {
      this.sensorLuz = JSON.parse(res);
    });
  }

  getPromedio() {
    let total = 0
    if (this.newData.length > 0) {
      total = this.newData.reduce(function(a, b) {return a += b}) / this.newData.length;
    }

    return total;
  }

}
