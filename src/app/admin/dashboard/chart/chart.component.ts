import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAnnotations, ApexChart, ApexDataLabels, ApexNonAxisChartSeries } from 'ng-apexcharts';
// import { ChartComponent } from 'ng-apexcharts';

// import {
//   ApexNonAxisChartSeries,
//   ApexResponsive,
//   ApexChart,
//   ApexTheme,
//   ApexTitleSubtitle,
//   ApexFill,
//   ApexStroke,
//   ApexYAxis,
//   ApexLegend,
//   ApexPlotOptions
// } from "ng-apexcharts";

export type ChartOptions = {
  // series: ApexNonAxisChartSeries;
  // chart: ApexChart;
  // responsive: ApexResponsive[];
  // labels: any;
  // theme: ApexTheme;
  // title: ApexTitleSubtitle;
  // fill: ApexFill,
  // yaxis: ApexYAxis,
  // stroke: ApexStroke,
  // legend: ApexLegend,
  // plotOptions: ApexPlotOptions
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  // @ViewChild("chart") chart!: ChartComponent;
  // public chartOptions!: Partial<ChartOptions>;
  chartSeries: ApexNonAxisChartSeries = [40, 32, 28, 55];

  chartDetails: ApexChart = {
    type : 'pie',
    toolbar:{
      show : true
    }
  }
  chartLable = ['apple', 'microsoft', 'alibaba', 'google'];
  chartDataLable: ApexDataLabels = {
  enabled:false
  };

  ngOnInit():void{

  }

//   constructor() {
//     this.chartOptions = {
//       series: [42, 39, 35, 29, 26],
//         chart: {
//           width: 380,
//           type: 'polarArea'
//         },
//         labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
//         fill: {
//           opacity: 1
//         },
//         stroke: {
//           width: 1,
//           colors: undefined
//         },
//         yaxis: {
//           show: false
//         },
//         legend: {
//           position: 'bottom'
//         },
//         plotOptions: {
//           polarArea: {
//             rings: {
//               strokeWidth: 0
//             }
//           }
//         },
//         theme: {
//           monochrome: {
//             //    enabled: true,
//             shadeTo: 'light',
//             shadeIntensity: 0.6
//           }
//         }
//     };
//   }
}

