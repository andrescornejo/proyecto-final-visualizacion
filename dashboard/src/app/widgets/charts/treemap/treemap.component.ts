import { Component, OnInit } from '@angular/core';
import * as  Highcharts from 'highcharts';


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
      chart: {
        type: 'treemap',
        height: '100%'
      },
      title: {
        text: 'Temperatura promedio según región'
      },
      series: [/*{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        allowDrillToNode: true,
        animationLimit: 1000,
        dataLabels: {
          enabled: false
        },
        levelIsConstant: false,
        levels: [],
        data: []
      }*/],
    };
  }

}
