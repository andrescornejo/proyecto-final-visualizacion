import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

interface Region {
  value: string;
  view: string;
}

interface Country {
  value: string;
  view: string;
}


@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  constructor() { }
  Highcharts = Highcharts;
  chartOptions = {}

  region = "None";
  country = "None";

  regions: Region[] = [
    {value: "None", view: "None"},
    {value: "None 1", view: "None"},
    {value: "None 2", view: "None"}
  ];

  countries: Country[] = [
    {value: "None", view: "None"},
    {value: "None 1", view: "None"},
    {value: "None 2", view: "None"}
  ];

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
            pointStart: 2010
        }
    },

    series: [],

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
