import { Component, OnInit } from '@angular/core';

interface Region {
  value: string;
}

interface Country {
  value: string;
}

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

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
