import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  imports:      [ BrowserModule,
                FormsModule,
                HighchartsChartModule,
                Ng5SliderModule,],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
