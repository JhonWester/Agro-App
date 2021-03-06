import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartConfiguration } from 'chart.js';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ThinkSpeakService } from 'src/app/Services/think-speak.service';
import { interval } from 'rxjs';
import { ConnectDataService } from 'src/app/Services/connect-data.service';


@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  initPieChart: boolean;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 }
        
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 }
      ];
    })
  );
  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = [ [ 'Temperatura', 'Grados' ], [ 'Humedad', '%' ]];
  public pieChartDatasets = [{
    data: [ 300, 500 ]
  }];

  public pieChartPlugins = [];

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];


  
  // PolarArea
  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 300, 500, 100, 40, 120 ] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: true,
  };

  constructor(private breakpointObserver: BreakpointObserver, private thingService: ThinkSpeakService, private connectDb: ConnectDataService) {}

  ngOnInit(): void {
    this.initPieChart = false;
    // this.getDataDHT();
    // this.intervalConsumer();
    // this.connectDb.getSensorDHT().subscribe(res => {
    //   console.log(res);
    // });
  }

  getDataDHT(): void {
    // this.thingService.getDataDHT().subscribe(res => {
    //   if (res) {
    //     this.pieChartDatasets = [{
    //       data: [Number(res.feeds[0].field1), Number(res.feeds[0].field2.toString())]
    //     }];
    //     this.initPieChart = true;
    //   }
    // },
    // error => {
    //   console.error(error);
    // })
}

  intervalConsumer(): void {
    interval(5000).subscribe(() => {
      this.getDataDHT();
    });
  }

}
