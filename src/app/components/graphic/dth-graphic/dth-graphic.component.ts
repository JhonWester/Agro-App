import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Environment } from 'src/app/Models/Class/Environment';
import { ConnectDataService } from 'src/app/Services/connect-data.service';

@Component({
  selector: 'app-dth-graphic',
  templateUrl: './dth-graphic.component.html',
  styleUrls: ['./dth-graphic.component.css']
})
export class DthGraphicComponent implements OnInit {
  
  initPieChart: boolean;
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = [ [ 'Temperatura', 'Grados' ], [ 'Humedad', '%' ]];

  public pieChartDatasets = [{
    data: [ 300, 500 ]
  }];

  public pieChartPlugins = [];
  longText = '';

  sensorDTH: Environment;

  constructor(private connectDb: ConnectDataService) { }

  ngOnInit(): void {
    this.initPieChart = false;
    this.getDataDHT();
  }

  getDataDHT(): void {
    this.connectDb.getSensorDHT().subscribe((res: any) => {
      if (res) {
        this.sensorDTH = JSON.parse(res);
        this.pieChartDatasets = [{
          data: [this.sensorDTH.Humidity, this.sensorDTH.Temperature]
        }];
        this.longText = `Actualmente el sistema se encuentra con una medicion de humedad de ${this.sensorDTH.Humidity}% y uan medicion de temperatura de
                          ${this.sensorDTH.Temperature}°c, esta medicion puede variar en el tiempo ya que son datos tomados en tiempo real desde la estacion
                          Meteorologica realizada con IoT.\n
                          Cada cambio que se encuentra en la medicion, sera actualizado en la grafica y obtener los resultados de las mediciones del dispositivo Be_Agro.`

        this.initPieChart = true;
      }
    },
    error => {
      console.error(error);
    })
  }


  // getDataDHT(): void {
  //   this.thingService.getDataDHT().subscribe(res => {
  //     if (res) {
  //       this.pieChartDatasets = [{
  //         data: [Number(res.feeds[0].field1), Number(res.feeds[0].field2.toString())]
  //       }];
  //       this.initPieChart = true;
  //     }
  //   },
  //   error => {
  //     console.error(error);
  //   })
  // }

  // intervalConsumer(): void {
  //   interval(5000).subscribe(() => {
  //     this.getDataDHT();
  //   });
  // }

}
