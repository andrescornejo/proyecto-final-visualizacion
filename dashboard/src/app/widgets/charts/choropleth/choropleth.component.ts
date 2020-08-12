import { Component, OnInit } from '@angular/core';

interface Year {
  value: number;
}

@Component({
  selector: 'app-choropleth',
  templateUrl: './choropleth.component.html',
  styleUrls: ['./choropleth.component.scss']
})
export class ChoroplethComponent implements OnInit{
  
  constructor() {}

  selected = 2000;
  years: Year[] = [
    {value: 2000},
    {value: 2001},
    {value: 2002}
  ];

  ngOnInit(): void {
  }
}
