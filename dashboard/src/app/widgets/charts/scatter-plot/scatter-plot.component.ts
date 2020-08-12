import { Component, OnInit } from '@angular/core';


interface Region {
  value: string;
}

interface Country {
  value: string;
}

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.scss']
})
export class ScatterPlotComponent implements OnInit {

  constructor() { }

  region = "None";
  country = "None";

  regions: Region[] = [
    {value: "None"},
    {value: "None 1"},
    {value: "None 2"}
  ];

  countries: Country[] = [
    {value: "None"},
    {value: "None 1"},
    {value: "None 2"}
  ];

  ngOnInit(): void {
  }

}
