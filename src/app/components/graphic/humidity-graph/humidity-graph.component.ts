import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { SensorFT } from 'src/app/Models/Class/SensorFT';
import { ConnectDataService } from 'src/app/Services/connect-data.service';

@Component({
  selector: 'app-humidity-graph',
  templateUrl: './humidity-graph.component.html',
  styleUrls: ['./humidity-graph.component.css']
})
export class HumidityGraphComponent implements OnInit {

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Anterior tasa de humedad' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Actual tasa de humedad ' }
  ];
  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
  };

  public radarChartLabels: string[] = ['Indice 1', 'Indice 2', 'Indice 3', 'Indice 4', 'Indice 5', 'Indice 6', 'Indice 7'];

  oldData: Array<number>;
  newData: Array<number>;
  sensorFT: SensorFT;

  constructor(private connectDB: ConnectDataService) { }

  ngOnInit(): void {
    this.getHumidity();
    this.getLastFt();
  }

  getHumidity() {
    this.connectDB.getIndexFT().subscribe(res => {
      this.oldData = this.newData;
      this.newData = res;
      this.radarChartDatasets = [
        {
          data: this.oldData, label: "Tasa anterior de humedad %"
        },
        {
          data: this.newData, label: "Nueva tasa de humedad %"
        }
      ]
    });
  }

  getPromedio() {
    let total = 0
    if (this.newData.length > 0) {
      total = this.newData.reduce(function(a, b) {return a += b}) / this.newData.length;
    }

    return total;
  }

  getLastFt() {
    this.connectDB.getSensorFT().subscribe((res: any) => {
      if (res) {
        this.sensorFT = JSON.parse(res);
      }
    })
  }

  stateSystem() {
    if (this.sensorFT != null) {
      return '👍'
    } else {
      return '👎'
    }
  }

}
