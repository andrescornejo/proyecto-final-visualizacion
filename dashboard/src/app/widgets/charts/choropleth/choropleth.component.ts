import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

interface Year {
  value: number;
}

var dataYears = [{value:1980},{value:1981},{value:1982},{value:1983},{value:1984},{value:1985},{value:1986},{value:1987},{value:1988},{value:1989},{value:1990},{value:1991},{value:1992},{value:1993},{value:1994},{value:1995},{value:1996},{value:1997},{value:1998},{value:1999},{value:2000},{value:2001},{value:2002},{value:2003},{value:2004},{value:2005},{value:2006},{value:2007},{value:2008},{value:2009},{value:2010},{value:2011},{value:2012},{value:2013}];


@Component({
  selector: 'app-choropleth',
  templateUrl: './choropleth.component.html',
  styleUrls: ['./choropleth.component.scss']
})
export class ChoroplethComponent implements OnInit{
  
  constructor() {}
  Highcharts = Highcharts;
  barOptions = {}

  selected = 1980;
  years: Year[] = dataYears

  ngOnInit(): void {
    this.barOptions = {
      chart: {
        type: 'bar'
    },
    title: {
        text: 'Temperaturas por año'
    },
    xAxis: {
        categories: [],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Temperatura',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' temperatura'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: []
    }
  }
}
