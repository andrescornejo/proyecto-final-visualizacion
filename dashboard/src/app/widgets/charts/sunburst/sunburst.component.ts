import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/';

interface Year {
    value: number;
}

var dataYears = [{ value: 1980 }, { value: 1981 }, { value: 1982 }, { value: 1983 }, { value: 1984 }, { value: 1985 }, { value: 1986 }, { value: 1987 }, { value: 1988 }, { value: 1989 }, { value: 1990 }, { value: 1991 }, { value: 1992 }, { value: 1993 }, { value: 1994 }, { value: 1995 }, { value: 1996 }, { value: 1997 }, { value: 1998 }, { value: 1999 }, { value: 2000 }, { value: 2001 }, { value: 2002 }, { value: 2003 }, { value: 2004 }, { value: 2005 }, { value: 2006 }, { value: 2007 }, { value: 2008 }, { value: 2009 }, { value: 2010 }, { value: 2011 }, { value: 2012 }, { value: 2013 }];


@Component({
    selector: 'app-sunburst',
    templateUrl: './sunburst.component.html',
    styleUrls: ['./sunburst.component.scss']
})
export class SunburstComponent implements OnInit {

    constructor() { }

    selected = 1980;
    Highcharts = Highcharts;
    chartOptions = {};

    years: Year[] = dataYears;


    ngOnInit(): void {
        this.chartOptions = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Temperaturas más altas registradas en la historia'
        },
        xAxis: {
            title: 'Pais',
            type: 'category'
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Temperatura'
            }
        },
        plotOptions: {

        },
        series: [{
            name: 'Temperatura',
            color: 'rgba(186,60,61,.9)',
            data:[
                ['Esatdos Unidos',56.7],
                ['Túnez', 55.0],
                ['Kuwait',54.2],
                ['Irak',53.9],
                ['Israel',53.9]
            ]
        }]
    };
}

};



/*
this.chartOptions = {
            chart: {
                type: "sunburst",
                height: '100%'
            },
            title: {
                text: 'Temperatura por año, según región'
            },
            series: [],
            tooltip: {
                headerFormat: "",
                pointFormat: 'La temperatura promedio de <b>{point.name}</b> es <b>{point.value}</b>'
            }
        };
*/