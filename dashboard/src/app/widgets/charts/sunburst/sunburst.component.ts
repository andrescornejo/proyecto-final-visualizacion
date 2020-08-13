import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/';

interface Year {
  value: number;
}

var dataYears = [{value:1980},{value:1981},{value:1982},{value:1983},{value:1984},{value:1985},{value:1986},{value:1987},{value:1988},{value:1989},{value:1990},{value:1991},{value:1992},{value:1993},{value:1994},{value:1995},{value:1996},{value:1997},{value:1998},{value:1999},{value:2000},{value:2001},{value:2002},{value:2003},{value:2004},{value:2005},{value:2006},{value:2007},{value:2008},{value:2009},{value:2010},{value:2011},{value:2012},{value:2013}];
var data;
data = [{},];


@Component({
  selector: 'app-sunburst',
  templateUrl: './sunburst.component.html',
  styleUrls: ['./sunburst.component.scss']
})
export class SunburstComponent implements OnInit {

  constructor() { }

  selected = 1980;
  chartOptions= {};
  Highcharts = Highcharts;

  years: Year[] = dataYears;


  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          height: '100%'
      },
      title: {
          text: 'Temperatura por año, segúun región'
      },
      series: [{
          type: "sunburst",
          data: data,
          allowDrillToNode: true,
          cursor: 'pointer',
          dataLabels: {
              format: '{point.name}',
              filter: {
                  property: 'innerArcLength',
                  operator: '>',
                  value: 16
              },
              rotationMode: 'circular'
          },
          levels: [{
              level: 1,
              levelIsConstant: false,
              dataLabels: {
                  filter: {
                      property: 'outerArcLength',
                      operator: '>',
                      value: 64
                  }
              }
          }, {
              level: 2,
              colorByPoint: true
          },
          {
              level: 3,
              colorVariation: {
                  key: 'brightness',
                  to: -0.5
              }
          }, {
              level: 4,
              colorVariation: {
                  key: 'brightness',
                  to: 0.5
              }
          }]
  
      }],
      tooltip: {
          headerFormat: "",
          pointFormat: 'La temperatura promedio de <b>{point.name}</b> es <b>{point.value}</b>'
      }
  };
  }

}
