import { Component } from "@angular/core";
import Highcharts from "highcharts/highmaps";
import { Options } from "highcharts";
import worldMap from "@highcharts/map-collection/custom/world.geo.json";
import { HighchartsChartModule } from 'highcharts-angular';
import HC_data from "highcharts/modules/data";
import { FormStyle } from '@angular/common';
import { convertCSVToArray } from "convert-csv-to-array";

//This function takes a csv formatted string, and the year to be filtered
//It outputs an array with the map data
//The array format is [iso-a2,value]
function create_array(input:string, year:string):string[][]{
  console.log(year);
  const arr= convertCSVToArray(input, {
    type: 'array',
    header: false,
    separator: ',', // use the separator you use in your csv (e.g. '\t', ',', ';' ...)
  });
  //Create the filtered array.
  var new_arr:string[][] = new Array;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i][0]=='2010'){
      console.log(arr[i][1])
      new_arr.push([arr[i][3],arr[i][1]])
    }
  }
  return new_arr
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartOptions: Highcharts.Options;

  // chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];
  ngOnInit() {
    let year='2010';
    let data_str = document.getElementById('csv').innerHTML;

    var data_array = create_array(data_str,year);
    this.mapChart(data_array);
  }

  mapChart(data_arr) {
    this.chartOptions = {
    chart: {
      map: worldMap
    },
    title: {
      text: "Highmaps basic demo"
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
        min: 0,
        max: 35,
        minColor: '#ADD8E6',
        maxColor: '#FF2500',
    },
    series: [
      {
        type: "map",
        name: "Random data",
        states: {
          hover: {
            color: "#BADA55"
          }
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}"
        },
        allAreas: false,
        joinBy: ['iso-a2', 'hc-key'],
        data: data_arr, 
      }]
    };
  }
}
