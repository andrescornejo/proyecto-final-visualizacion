import { Component, OnInit } from '@angular/core';

interface Year {
  value: number;
}

@Component({
  selector: 'app-sunburst',
  templateUrl: './sunburst.component.html',
  styleUrls: ['./sunburst.component.scss']
})
export class SunburstComponent implements OnInit {

  constructor() { }

  selected = 2000;

  years: Year[] = [
    {value: 2000},
    {value: 2001},    
  ]

  ngOnInit(): void {
  }

}
