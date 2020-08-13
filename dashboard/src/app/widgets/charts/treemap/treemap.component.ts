import { Component, OnInit } from '@angular/core';
import * as  Highcharts from 'highcharts';

var data: string;
data = "";
var points = [];




@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.scss']
})
export class TreemapComponent implements OnInit {
  constructor() { }

  Highcharts = Highcharts;
  chartOptions: {};

  ngOnInit(): void {

    this.chartOptions = {
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        allowDrillToNode: true,
        animationLimit: 1000,
        dataLabels: {
            enabled: false
        },
        levelIsConstant: false,
        levels: [{
            level: 1,
            dataLabels: {
                enabled: true
            },
            borderWidth: 3
        }],
        data: points
    }],
    title: {
        text: 'Temperatura promedio según región'
    }
  };
  }

}
