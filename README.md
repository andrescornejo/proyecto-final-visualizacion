# proyecto-final-visualizacion


## Required packages/libraries
- Highcharts
- Highcharts-angular
- Highcharts-maps

i.e.
Inside the angular project directory run:
1. ```npm install highcharts --save```
2. ```npm install highcharts-angular --save```
3. ```npm i @highcharts/map-collection```
4. ```npm install ng5-slider --save```
5. ```npm i convert-csv-to-array```

## Compiler options
The choropleth map geometry is stored inside a json file.
To import json files, a compiler option has to be tweaked.

i.e.
In your 'tsconfig.app.json' file, add the following inside 'compiler options':
    ```"resolveJsonModule": true,```
    ```"esModuleInterop": true,```

## Highcharts library bugfix
When joining data to a choropleth map, Highcharts has a bug where typescript ignores the string array type.

The bug is documented here: [#13923](https://github.com/highcharts/highcharts/issues/13932)

A solution I found is to modify Highchart's 'highcharts.d.ts' file.

i.e.
In 'highcharts.d.ts' replace:
```joinBy?: string;```

with

```joinBy?: string|Array<string>;```