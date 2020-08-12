import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoroplethComponent } from './charts/choropleth/choropleth.component'
import { LineComponent } from './charts/line/line.component'
import { ScatterPlotComponent } from './charts/scatter-plot/scatter-plot.component'
import { } from './charts/line/line.component';
import { SunburstComponent } from './charts/sunburst/sunburst.component';
import { TreemapComponent } from './charts/treemap/treemap.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ChoroplethComponent,
    LineComponent,
    ScatterPlotComponent,
    SunburstComponent,
    TreemapComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    
  ],
  exports: [
    ChoroplethComponent,
    LineComponent,
    ScatterPlotComponent,
    SunburstComponent,
    TreemapComponent
  ]
})
export class WidgetsModule { }
