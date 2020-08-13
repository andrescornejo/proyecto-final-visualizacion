import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  constructor() { }
  Highcharts = Highcharts;
  chartOptions = {}

  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: 'Temperatura maxima por año, según región'
    },
    yAxis: {
        title: {
            text: 'Temperatura Maxima'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Año'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1980,
            pointEnd: 2013
        }
    },

    series: data,

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
    }
  }

}



var data = [
  {name:'Europa',
  data:[14.99,15.56,15.61,15.20,14.61,14.48,15.73,14.76,15.50,15.19,15.40,14.75,15.83,15.49,15.43,15.67,15.96,15.91,16.23,16.27,16.31,15.26,16.88,17.82,15.73,16.18,16.52,17.11,16.45,15.95,16.28,16.49,16.17,16.23]},
  {name:'Asia',
  data:[25.86,25.41,25.32,25.62,25.44,25.56,25.49,25.73,25.99,25.42,26.01,25.72,25.39,25.58,25.79,26.11,25.71,26.07,26.59,26.08,26.03,26.27,26.10,25.96,26.16,26.29,26.56,26.57,26.23,26.35,26.85,26.45,26.67,26.42]},
  {name:'Norte America',
  data: [25.73,25.33,25.40,25.72,25.14,25.44,25.14,25.77,25.69,25.32,25.63,25.69,25.51,25.61,25.69,26.00,25.48,25.88,26.36,25.72,25.43,25.84,25.78,25.72,25.83,26.11,26.02,26.12,25.81,25.78,26.33,26.18,26.17,25.83]},
  {name:'Sur America',
  data:[18.59,18.17,18.61,18.20,17.80,18.54,18.92,18.96,18.14,18.71,18.43,18.79,19.20,18.88,19.08,18.84,17.90,19.20,19.13,18.40,18.83,18.47,18.17,19.36,19.01,19.50,19.08,18.61,18.26,18.62,19.24,19.02,18.91,19.28]},
  {name:'Ocenia',
  data:[23.81,23.95,23.66,24.10,24.08,23.72,23.99,23.88,24.36,23.93,24.17,24.05,24.09,23.92,23.74,24.18,24.25,23.76,24.46,24.01,24.19,24.19,24.51,24.15,24.25,24.14,24.06,24.54,24.13,23.97,24.63,24.34,23.99,24.53]},
  {name:'Africa',
  data:[24.52,24.56,24.61,24.92,24.53,24.58,24.56,24.83,24.90,24.65,25.11,24.84,24.69,24.80,24.63,25.03,24.65,24.92,25.38,25.23,24.90,24.95,24.95,25.00,24.78,25.26,25.17,25.00,24.97,25.52,25.34,25.22,25.09,25.07]}
]