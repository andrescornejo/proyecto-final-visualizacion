import { Component, OnInit } from "@angular/core";
import Highcharts from "highcharts/highmaps";
import worldMap from "@highcharts/map-collection/custom/world.geo.json";
import { convertCSVToArray } from "convert-csv-to-array";

interface Year {
  value: number;
}

//This function takes a csv formatted string, and the year to be filtered
//It outputs an array with the map data
//The array format is [iso-a2,value]
function create_array(input:string, year:string):string[][]{
    //Convert the csv to a normal array
    const arr= convertCSVToArray(input, {
      type: 'array',
      header: false,
      separator: ',', 
    });
    //Create the array with the filtered information.
    var new_arr:string[][] = new Array;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i][0]==year){
        new_arr.push([arr[i][3],arr[i][1]])
      }
    }
    return new_arr
}

var dataYears = [{value:1980},{value:1981},{value:1982},{value:1983},{value:1984},{value:1985},{value:1986},{value:1987},{value:1988},{value:1989},{value:1990},{value:1991},{value:1992},{value:1993},{value:1994},{value:1995},{value:1996},{value:1997},{value:1998},{value:1999},{value:2000},{value:2001},{value:2002},{value:2003},{value:2004},{value:2005},{value:2006},{value:2007},{value:2008},{value:2009},{value:2010},{value:2011},{value:2012},{value:2013}];


@Component({
  selector: 'app-choropleth',
  templateUrl: './choropleth.component.html',
  styleUrls: ['./choropleth.component.scss']
})
export class ChoroplethComponent implements OnInit{
  //Definition of the initial year.
  selected = 1980;
  years: Year[] = dataYears
  data_str:string; 

  //Definition of the choropleth map.
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartOptions: Highcharts.Options;

    onOptionsSelected(value:string){
        console.log("the selected value is " + value);
        this.ngOnInit()
    }

    ngOnInit() {
        this.data_str = document.getElementById('csv').innerHTML;
        this.createMap()
    }

  createMap(){
    var year= this.selected.toString();
    var data_array = create_array(this.data_str,year);
    this.mapChart(data_array, year);
  }

  mapChart(data_arr, year:string) {
    this.chartOptions = {
    chart: {
      map: worldMap
    },
    title: {
      text: "Temperaturas mundiales en el año "+year
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
        labels: {
            format: '{value} °C'
        },
        min: 1,
        type: 'linear',
        minColor: '#EEEEFF',
        maxColor: '#000022',
        stops: [
            [0, '#ADD8E6'],
            [0.25, '#7fff00'],
            [0.5, '#f7f705'],
            [0.75, '#ff4f00'],
            [1, '#a90303']
        ]
    },
    plotOptions:{
        series:{
            point:{
                events:{
                    click: function(){
                        alert(this.name);
                    }
                }
            }
        }
    },
    series: [
      {
        type: "map",
        name: "Temperature",
        states: {
          hover: {
            color: "#BADA55"
          }
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}"
        },
        tooltip: {
          pointFormat: '{point.name}: {point.value} °C'
        },
        allAreas: false,
        joinBy: ['iso-a2', 'hc-key'],
        data: data_arr, 
      }]
    };
  }
}
