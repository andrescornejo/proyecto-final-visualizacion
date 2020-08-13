import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


interface Region {
  value: string;
  view: string;
}

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.scss']
})
export class ScatterPlotComponent implements OnInit {

  constructor() { }
  Highcharts = Highcharts;
  chartOptions = {}

  region = "None";

  regions: Region[] = [
    { value: "None", view: "None"},
    { value: "None 1", view: "None"},
    { value: "None 2", view: "None" }
  ];

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'scatter',
        zoomType: 'xy'
      },
      title: {
        text: 'Temperaturas registradas por región, según país y año'
      },
      xAxis: {
        title: {
          enabled: true,
          text: 'Height (cm)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },
      yAxis: {
        title: {
          text: 'Weight (kg)'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
        borderWidth: 1
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} cm, {point.y} kg'
          }
        }
      },
      series: []
    };
  }

}
