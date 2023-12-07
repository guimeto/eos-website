
var today = new Date();
today.setMinutes(0);
var yesterday = today.setDate(today.getMonth() - 3) - today.getTimezoneOffset() * 60000;
///Panneau sur les températures
var c = []
var c2 = []
var start = []
var options1 = {

    chart: {
        renderTo: 'graphdiv',
        zoomType: 'xy',
        plotWidth: 10,
    },
    title: {
        text: '15 minutes temperature ',
        style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'20px'
            }
    },
    subtitle: {
        text: ' '
    },
        rangeSelector: {
            selected: 1,
            buttons: [{
                type: 'day',
                count: 1,
                text: '1d'
            }, {
                type: 'month',
                count: 1,
                text: '1m'
            }, {
                type: 'month',
                count: 3,
                text: '3m'
            }]
        },
    xAxis:{
    gridLineWidth: 1,
    title: {
        text: 'UTC',
        style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
       },
      type: 'datetime',
      //categories: c,
     //categories: []
     //reversed: true
         crosshair: true,
                 labels: {
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
       },

    yAxis: [{
    gridLineWidth: 1,
    // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
        title: {
            text: 'Temperature [°C]',
            style: {
                color: Highcharts.getOptions().colors[1],
                 fontSize:'15px'

            }
        },
         crosshair: true
        }
        ,{
                linkedTo:0,
                opposite:true,
                labels: {
                format: '{value}',
                style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
                       }
                 },
                title: {
                    text: 'Temperature [°C]',
                style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize:'15px'
                 }
                }
            }
    ]
    ,
    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    },
     tooltip: {xDateFormat: '%e %b - %H:%M',
        shared: true,
        useHTML: true,
        style: {fontSize: '15px'},
        headerFormat: '<strong>{point.key}</strong><table style="border-spacing: 5px 10px;"><br><hr style="height:2px;border-width:0;color:black;background-color:gray">',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
            '<td style="text-align: right"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        valueDecimals: 2
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        floating: false,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },

    series: [{
        name: '1 m',
        type: 'spline',
        data: [],
        tooltip: {
            valueSuffix: ' °C'
        },
        color: '#000075'
    },
        {
            name: '1.5 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' °C'
            },
        },
        {
            name: '2 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' °C'
            },
            color: '#ffe119'

        }
        ,
        {
            name: '3.5 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' °C'
            },
            color: '#f58231'

        }
        ,
        {
            name: '4.35 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' °C'
            },
            color: '#e6194B'

        }
        ,
        {
            name: '5 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' °C'
            },
            color: '#911eb4'

        }
        ,
        {
            name: '7.1 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' °C'
            },
            color: '#f032e6'

        }
         ,
        {
            name: '10 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' °C'
            },
            color: '#f032e6'

        }
    ],
    credits: {
        enabled: false
    },
    exporting: {
    enabled: false,
    csv: {
      itemDelimiter: ';'
    },
    filename: 'Temperature'
  },
};


///Panneau sur la precipitation et l'humidité relative

var options2 = {

    chart: {
        plotAreaWidth: 10,
        plotAreaHeight: 105,
        renderTo: 'graphdiv2',
        zoomType: 'xy'
    },
    title: {
        text: '15 minutes humidity time series',
          style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'20px'
            }
    },
    subtitle: {
        text: ' '
    },
    credits: {
        enabled: false
    }
    ,
    xAxis:{
    gridLineWidth: 1,
    title: {
        text: 'UTC',
         style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize:'15px'
                 }
       },
      type: 'datetime',
      //categories: c,
     //categories: []
     //reversed: true
         crosshair: true,
                 labels: {
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
       },
    yAxis: [{
    gridLineWidth: 1,
    // Primary yAxis on right
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
        max: 105,
        min: 0,
        tickInterval: 5,
        title: {
            text: 'Relative humidity [%]',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize: '15px'
            }
        },
        opposite: true,
        crosshair: true

    }, { // Secondary yAxis on left
        gridLineWidth: 1,
        title: {
            text: 'Precipitation [mm]',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize: '15px'
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        }

    }
    ],
   // tooltip: {
  //      shared: true,
 //       xDateFormat: '%e %b - %H h'
//    },

     tooltip: {xDateFormat: '%e %b - %H:%M',
        shared: true,
        useHTML: true,
        style: {fontSize: '15px'},
        headerFormat: '<strong>{point.key}</strong><table style="border-spacing: 5px 10px;"><br><hr style="height:2px;border-width:0;color:black;background-color:gray">',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
            '<td style="text-align: right"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        valueDecimals: 2
    },




    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    }
    ,
    legend: {
        layout: 'horizontal',
        align: 'center',
        floating: false,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    series: [{
        name: 'Total precipitation',
        type: 'column',
        yAxis: 1,
        data: [],
        tooltip: {
            valueSuffix: ' mm'
        },
            color: '#000075'

    },
        {
            name: 'HR 1 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' %'
            },
            color: '#000075'
        },
        {
            name: 'HR 1.5 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' %'
            },
            color: '#3cb44b'

        },
        {
            name: 'HR 2 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' %'
            },
            color: '#ffe119'

        }
        ,
        {
            name: 'HR 3.5 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' %'
            },
            color: '#f58231'

        }
        ,
        {
            name: 'HR 4.35 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' %'
            },
            color: '#e6194B'

        }
        ,
        {
            name: 'HR 5 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' %'
            },
            color: '#911eb4'

        }
        ,
        {
            name: 'HR 7.1 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' %'
            },
            color: '#f032e6'

        }
        ,
        {
            name: 'HR 10 m',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' %'
            },
            color: '#f032e6'

        }
        ],

        exporting: {
    enabled: false,
    csv: {
      itemDelimiter: ';'
    },
    filename: 'Humidity'
  }
};


///Panneau sur pression de surface

var options3 = {

    chart: {
        renderTo: 'graphdiv3',
        zoomType: 'xy'
    },
    title: {
        text: '15 minutes pressure time series',
          style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'20px'
            }
    },
    subtitle: {
        text: ' '
    },
    credits: {
        enabled: false
    }
    ,
    xAxis:{
    gridLineWidth: 1,
    title: {
        text: 'UTC',
         style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize:'15px'
                 }
       },
      type: 'datetime',
      //categories: c,
     //categories: []
     //reversed: true
         crosshair: true,
                 labels: {
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
       },
    yAxis: [{
    gridLineWidth: 1,
    // Primary yAxis
        min: 980,
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
        title: {
            text: 'Pressure [hPa]',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize: '15px'
            }
        },
        crosshair: true

        }
        ,{
                linkedTo:0,
                opposite:true,
                labels: {
                format: '{value}',
                style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
                       }
                 },
                title: {
                    text: 'Pressure [hPa]',
                style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize: '15px'
                 }
                }
            }
    ],
     tooltip: {xDateFormat: '%e %b - %H:%M',
        shared: true,
        useHTML: true,
        style: {fontSize: '15px'},
        headerFormat: '<strong>{point.key}</strong><table style="border-spacing: 5px 10px;"><br><hr style="height:2px;border-width:0;color:black;background-color:gray">',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
            '<td style="text-align: right"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        valueDecimals: 2
    },
    plotOptions: {

        area: {
            marker: {
                enabled: false
            }
        }
    }
    ,
    legend: {
        layout: 'horizontal',
        align: 'center',
        floating: false,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },

    series: [{
        name: 'Pressure',
        type: 'area',
        data: [],
        tooltip: {
            valueSuffix: ' hPa'
        },
        color: Highcharts.getOptions().colors[3],
        fillColor: {
            linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
            stops: [
                [0, Highcharts.getOptions().colors[3]],
                [
                    1,
                    Highcharts.color(Highcharts.getOptions().colors[3])
                        .setOpacity(0.25).get()
                ]
            ]
        }

    }
    ],
    exporting: {
    enabled: false,
    csv: {
      itemDelimiter: ';'
    },
    filename: 'Pressure'
  },
};

///Panneau sur la direction du vent et le module
var options4 = {

    chart: {
        renderTo: 'graphdiv4',
        zoomType: 'xy'
    },
    title: {
        text: '30 minutes wind module and direction (Anemometer)',
          style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'20px'
            }
    },
    subtitle: {
        text: ' '
    },
    credits: {
        enabled: false
    }
    ,
    xAxis:{
    gridLineWidth: 1,
    title: {
        text: 'UTC',
         style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize:'15px'
                 }
       },
      type: 'datetime',
      //categories: c,
     //categories: []
     //reversed: true
         crosshair: true,
                 labels: {
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
       },
    yAxis: [{
     gridLineWidth: 1,
     // Primary yAxis
        labels: {
            format: '{value}',
             style: {
                fontSize:'15px'
            }
        },
        title: {
            text: 'Wind speed [m/s]',
             style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize:'15px'
                 }
        },
        crosshair: true

    }
    ],

    plotOptions: {
        //series: {
         //   pointStart: yesterday,
        //    pointInterval: 3600000 // one hour
       // },

        area: {
            marker: {
                enabled: false
            }
        }
    },

    series: [{
        type: 'windbarb',
        data: [],
        name: 'Wind direction',
        color: Highcharts.getOptions().colors[1],
        tooltip: {
            valueSuffix: ' km/h'
        }
    }, {
        type: 'area',
        keys: ['x','y', 'rotation'], // rotation is not used here
        data: [],
        color: Highcharts.getOptions().colors[0],
        fillColor: {
            linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
            stops: [
                [0, Highcharts.getOptions().colors[0]],
                [
                    1,
                    Highcharts.color(Highcharts.getOptions().colors[0])
                        .setOpacity(0.25).get()
                ]
            ]
        },
        name: 'Wind speed',
        tooltip: {
           valueSuffix: ' m.s-1',
           xDateFormat: '%e %b - %H:%M'
       }
    }],
    exporting: {
    enabled: false,
    csv: {
      itemDelimiter: ';'
    },
    filename: 'Wind'
  }
};

///Panneau sur la radiation net
var options5 = {

    chart: {
        plotAreaWidth: 10,
        plotAreaHeight: 100,
        renderTo: 'graphdiv5',
        zoomType: 'xy'
    },
    title: {
        text: '30 minutes Net Radiation',
        style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'20px'
            }
    },
    subtitle: {
        text: ' '
    },
    credits: {
        enabled: false
    }
    ,
     xAxis:{
    gridLineWidth: 1,
    title: {
        text: 'UTC',
         style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize:'15px'
                 }
       },
      type: 'datetime',
      //categories: c,
     //categories: []
     //reversed: true
         crosshair: true,
                 labels: {
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
       },
    yAxis: [{
     gridLineWidth: 1,
    // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
        max: 600,
        min: 200,
        title: {
            text: 'Longwave [W/m2]',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize: '15px'
            }
        },
        opposite: true,
        crosshair: true

    }, { // Secondary yAxis
        gridLineWidth: 1,
        max: 1000,
        min: -250,
        title: {
            text: 'Shortwave [W/m2]',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize: '15px'
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        }

    }
    ],

    tooltip: {xDateFormat: '%e %b - %H:%M',
        shared: true,
        useHTML: true,
        style: {fontSize: '15px'},
        headerFormat: '<strong>{point.key}</strong><table style="border-spacing: 5px 10px;"><br><hr style="height:2px;border-width:0;color:black;background-color:gray">',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
            '<td style="text-align: right"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        valueDecimals: 2
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    }
    ,
    legend: {
        layout: 'horizontal',
        align: 'center',
        floating: false,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    series: [{
        name: 'SW IN',
        type: 'spline',
        dashStyle: 'ShortDash',
        yAxis: 1,
        data: [],
        tooltip: {
            valueSuffix: ' W/m2'
        },
            color: '#FF0000'

    },{
        name: 'SW OUT',
        type: 'spline',
        dashStyle: 'ShortDash',
        yAxis: 1,
        data: [],
        tooltip: {
            valueSuffix: ' W/m2'
        },
            color: '#0000FF'
    },
        {
            name: 'LW IN',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' W/m2'
            },
            color: '#ff4000'
        },
        {
            name: 'LW OUT',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' W/m2'
            },
            color: '#00ffec'

        },
        {
            name: 'NETRAD',
            type: 'spline',
            yAxis: 1,
            data: [],
            tooltip: {
                valueSuffix: ' W/m2'
            },
            color: '#000000'

        }

        ],
        exporting: {
    enabled: false,
    csv: {
      itemDelimiter: ';'
    },
    filename: 'SW_LW_Flux'
  },
    //disable the nav export button
   // navigation: {
    //    buttonOptions: {
     //       enabled: false
      //  }
    //}
};


///Panneau sur les temperatures du sol
var options6 = {

    chart: {
        plotAreaWidth: 10,
        plotAreaHeight: 100,
        renderTo: 'graphdiv6',
        zoomType: 'xy'
    },
    title: {
        text: 'CS65x soil probes',
          style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'20px'
            }
    },
    subtitle: {
        text: ' '
    },
    credits: {
        enabled: false
    }
    ,
      xAxis:{
    gridLineWidth: 1,
    title: {
        text: 'UTC',
        style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize:'15px'
                 }
       },
      type: 'datetime',
      //categories: c,
     //categories: []
     //reversed: true
         crosshair: true,
                 labels: {
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
       },
    yAxis: [{
     gridLineWidth: 1,
     // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
        //max: 600,
        //min: 200,
        title: {
            text: 'Soil water content [%]',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize: '15px'
            }
        },
        opposite: true,
        crosshair: true

    }, { // Secondary yAxis
        gridLineWidth: 0,
        //max: 1000,
        //min: -250,
        title: {
            text: 'Temperature [°C]',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize: '15px'
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1],
                 fontSize:'15px'
            }
        }

    }
    ],
    tooltip: {xDateFormat: '%e %b - %H:%M',
        shared: true,
        useHTML: true,
        style: {fontSize: '15px'},
        headerFormat: '<strong>{point.key}</strong><table style="border-spacing: 5px 10px;"><br><hr style="height:2px;border-width:0;color:black;background-color:gray">',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
            '<td style="text-align: right"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        valueDecimals: 2
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    }
    ,
    legend: {
        layout: 'horizontal',
        align: 'center',
        floating: false,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    series: [{
        name: 'TS_1_1_1',
        type: 'spline',
        dashStyle: 'ShortDash',
        yAxis: 1,
        data: [],
        tooltip: {
            valueSuffix: ' °C'
        },
            color: '#FF0000'

    },{
        name: 'TS_2_1_1',
        type: 'spline',
        dashStyle: 'ShortDash',
        yAxis: 1,
        data: [],
        tooltip: {
            valueSuffix: ' °C'
        },
            color: '#0000FF'
    },
        {
            name: 'SWC_1_1_1',
            type: 'spline',
            data: [],
            tooltip: {
                valueSuffix: ' %'
            },
            color: '#ff4000'
        }
        ],

        exporting: {
    enabled: false,
    csv: {
      itemDelimiter: ';'
    },
    filename: 'TS_SWC'
  },
    //disable the nav export button
    //navigation: {
     //   buttonOptions: {
    //        enabled: false
   //     }
  //  }
};
///Panneau sur les heat flux
var options7 = {

    chart: {
        plotAreaWidth: 10,
        plotAreaHeight: 50,
        renderTo: 'graphdiv7',
        zoomType: 'xy'
    },
    title: {
        text: 'Latent and sensible heat fluxes are measured by an IRGASON',
        style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'20px'
            }
    },
    subtitle: {
        text: ' '
    },
    credits: {
        enabled: false
    }
    ,
    xAxis:{
    gridLineWidth: 1,
    title: {
        text: 'UTC',
         style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize:'15px'
                 }
       },
      type: 'datetime',
      //categories: c,
     //categories: []
     //reversed: true
         crosshair: true,
                 labels: {
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
       },
         yAxis: [{
     gridLineWidth: 1,
     // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
        //max: 600,
        //min: 200,
        title: {
            text: '[W/m2]',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize: '15px'
            }
        },
        crosshair: true
    }
    ,{
                linkedTo:0,
                opposite:true,
                labels: {
                format: '{value}',
                style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
                       }
                 },
                title: {
                    text: '[W/m2]',
                style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize: '15px'
                 }
                }
            }
    ],
    tooltip: {xDateFormat: '%e %b - %H:%M',
        shared: true,
        useHTML: true,
        style: {fontSize: '15px'},
        headerFormat: '<strong>{point.key}</strong><table style="border-spacing: 5px 10px;"><br><hr style="height:2px;border-width:0;color:black;background-color:gray">',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
            '<td style="text-align: right"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        valueDecimals: 2
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    }
    ,
    legend: {
        layout: 'horizontal',
        align: 'center',
        floating: false,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    series: [{
        name: 'Latent Heat Flux (LE)',
        type: 'spline',
        dashStyle: 'ShortDash',
        data: [],
        tooltip: {
            valueSuffix: ' W/m2'
        },
            color: '#FF0000'

    },{
        name: 'Sensible Heat Flux',
        type: 'spline',
        dashStyle: 'ShortDash',
        data: [],
        tooltip: {
            valueSuffix: ' W/m2'
        },
            color: '#0000FF'
    }
        ],
    exporting: {
    enabled: false,
    csv: {
      itemDelimiter: ';'
    },
    filename: 'Heat_Flux'
  },
    //disable the nav export button
    //navigation: {
     //   buttonOptions: {
    //       enabled: false
     //   }
  // }
};

///Panneau sur les snow depths
var options8 = {
    chart: {
        plotAreaWidth: 10,
        plotAreaHeight: 50,
        renderTo: 'graphdiv8',
        zoomType: 'xy'
    },
    title: {
        text: '15 minutes snow depth',
        style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'20px'
            }
    },
    subtitle: {
        text: ' '
    },
    credits: {
        enabled: false
    }
    ,
    xAxis:{
    gridLineWidth: 1,
    title: {
        text: 'UTC',
         style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize:'15px'
                 }
       },
      type: 'datetime',
      //categories: c,
     //categories: []
     //reversed: true
         crosshair: true,
                 labels: {
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
       },
         yAxis: [{
     gridLineWidth: 1,
     // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
        },
        //max: 600,
        //min: 200,
        title: {
            text: '[mm]',
            style: {
                color: Highcharts.getOptions().colors[1],
                fontSize: '15px'
            }
        },
        crosshair: true
    }
    ,{
                linkedTo:0,
                opposite:true,
                labels: {
                format: '{value}',
                style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
                       }
                 },
                title: {
                    text: '[mm]',
                style: {
                     color: Highcharts.getOptions().colors[1],
                     fontSize: '15px'
                 }
                }
            }
    ],
    tooltip: {xDateFormat: '%e %b - %H:%M',
        shared: true,
        useHTML: true,
        style: {fontSize: '15px'},
        headerFormat: '<strong>{point.key}</strong><table style="border-spacing: 5px 10px;"><br><hr style="height:2px;border-width:0;color:black;background-color:gray">',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
            '<td style="text-align: right"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        valueDecimals: 2
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    }
    ,
    legend: {
        layout: 'horizontal',
        align: 'center',
        floating: false,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    series: [{
        name: 'SR50A',
        type: 'spline',
        data: [],
        tooltip: {
            valueSuffix: ' mm'
        },
            color: '#FF0000',
            showInLegend: checkDataAvailability('SR50A') // Call a function to check data availability

    },{
        name: 'SDMS40',
        type: 'spline',
        data: [],
        tooltip: {
            valueSuffix: ' mm'
        },
            color: '#0000FF'
    }
        ],
    exporting: {
    enabled: false,
    csv: {
      itemDelimiter: ';'
    },
    filename: 'Snow_depth'
  },
    //disable the nav export button
    //navigation: {
     //   buttonOptions: {
    //       enabled: false
     //   }
  // }
};

// Function to check data availability for a series
function checkDataAvailability(seriesName) {
    // Check if options8.series is defined and is an array
    if (Array.isArray(options8.series)) {
        // You need to implement logic to check if data is available for the specified series
        // For example, you can check if the data array for the series is not empty
        // Modify this based on how you determine data availability
        return options8.series.find(series => series.name === seriesName)?.data?.length > 0;
    }

    // If options8.series is not an array or undefined, return false
    return false;
};
jQuery.get(`${media_url}data/${dir_name}/station_Metdata_new.csv`, function (data) {
    // Split the lines
    var lines = data.split('\n');

    // Push column data into data list
    for (var i = 1; i < lines.length-1; i++) {
        //var cat = lines[i].split(",")[0]
        var firCol = lines[i].split(",")[1];
        var secCol = lines[i].split(",")[2];
        var thirdCol = lines[i].split(",")[3];
        var fourCol = lines[i].split(",")[4];
        var fifCol = lines[i].split(",")[5];
        var sixCol = lines[i].split(",")[6];
        var sevCol = lines[i].split(",")[7];
        var eigCol = lines[i].split(",")[8];

        var tab_date = lines[i].split(",")[0]
        var y = tab_date.split(' ')[0].split('-')[0]
        var m = tab_date.split(' ')[0].split('-')[1]
        var d = tab_date.split(' ')[0].split('-')[2]
        var hh = tab_date.split(' ')[1].split(':')[0]
        var mm = tab_date.split(' ')[1].split(':')[1]
        var date_utc = Date.UTC(parseInt(y), parseInt(m)-1,parseInt(d), parseInt(hh),parseInt(mm))
       // console.log(tab_date)
        //c.push(cat)

        options1.series[0].data.push([date_utc,parseFloat(firCol)])     // Temp1_Avg
        options1.series[1].data.push([date_utc,parseFloat(secCol)])     // Temp2_Avg
        options1.series[2].data.push([date_utc,parseFloat(thirdCol)])   // Temp3_Avg
        options1.series[3].data.push([date_utc,parseFloat(fourCol)])    // Temp4_Avg
        options1.series[4].data.push([date_utc,parseFloat(fifCol)])     // Temp5_Avg
        options1.series[5].data.push([date_utc,parseFloat(sixCol)])     // Temp6_Avg
        options1.series[6].data.push([date_utc,parseFloat(sevCol)])     // Temp7_Avg
        options1.series[7].data.push([date_utc,parseFloat(eigCol)])     // Temp8_Avg
    }

    // Create the chart
   // chart = new Highcharts.StockChart(options1);
    chart = new Highcharts.Chart(options1);

    // Push column data into data list
    for (var i = 1; i < lines.length-1; i++) {
      //  var cat = lines[i].split(",")[0]
        var firCol = lines[i].split(",")[9];             // Rain_mm_tot 
        var secCol = lines[i].split(",")[10];             // RH1
        var thirdCol = lines[i].split(",")[11];           // RH2
        var fourCol = lines[i].split(",")[12];            // RH3
        var fifCol = lines[i].split(",")[13];             // RH4
        var sixCol = lines[i].split(",")[14];             // RH5
        var sevCol = lines[i].split(",")[15];             // RH6
        var heiCol = lines[i].split(",")[16];             // RH7
        var nineCol = lines[i].split(",")[17];            // RH8 
        var tab_date = lines[i].split(",")[0]
        var y = tab_date.split(' ')[0].split('-')[0]
        var m = tab_date.split(' ')[0].split('-')[1]
        var d = tab_date.split(' ')[0].split('-')[2]
        var hh = tab_date.split(' ')[1].split(':')[0]
        var mm = tab_date.split(' ')[1].split(':')[1]
        var date_utc = Date.UTC(parseInt(y), parseInt(m)-1,parseInt(d), parseInt(hh),parseInt(mm))

       // c.push(cat)
        options2.series[0].data.push([date_utc,parseFloat(firCol)])
        options2.series[1].data.push([date_utc,parseFloat(secCol)])
        options2.series[2].data.push([date_utc,parseFloat(thirdCol)])
        options2.series[3].data.push([date_utc,parseFloat(fourCol)])
        options2.series[4].data.push([date_utc,parseFloat(fifCol)])
        options2.series[5].data.push([date_utc,parseFloat(sixCol)])
        options2.series[6].data.push([date_utc,parseFloat(sevCol)])
        options2.series[7].data.push([date_utc,parseFloat(heiCol)])
        options2.series[8].data.push([date_utc,parseFloat(nineCol)])
    }

    // Create the chart
    chart = new Highcharts.Chart(options2);


    for (var i = 1; i < lines.length-1; i++) {
        //var cat = lines[i].split(",")[0]
        var Col = lines[i].split(",")[18];         // IRGASON_PA
        var tab_date = lines[i].split(",")[0]
        var y = tab_date.split(' ')[0].split('-')[0]
        var m = tab_date.split(' ')[0].split('-')[1]
        var d = tab_date.split(' ')[0].split('-')[2]
        var hh = tab_date.split(' ')[1].split(':')[0]
        var mm = tab_date.split(' ')[1].split(':')[1]
        var date_utc = Date.UTC(parseInt(y), parseInt(m)-1,parseInt(d), parseInt(hh),parseInt(mm))

        options3.series[0].data.push([date_utc,parseFloat(Col)*10])
        //c.push(cat)
       //console.log(Col)
    }

    // Create the chart
    chart = new Highcharts.Chart(options3);

     for (var i = 1; i < lines.length-1; i++) {
        //var cat = lines[i].split(",")[0]
        var Col = lines[i].split(",")[39];
        var tab_date = lines[i].split(",")[0]
        var firCol = lines[i].split(",")[19];   // SR50A_SnowDepth
        var secCol = lines[i].split(",")[20];   // SDMS40_Depth_Avg
        var y = tab_date.split(' ')[0].split('-')[0]
        var m = tab_date.split(' ')[0].split('-')[1]
        var d = tab_date.split(' ')[0].split('-')[2]
        var hh = tab_date.split(' ')[1].split(':')[0]
        var mm = tab_date.split(' ')[1].split(':')[1]
        var date_utc = Date.UTC(parseInt(y), parseInt(m)-1,parseInt(d), parseInt(hh),parseInt(mm))

        options8.series[0].data.push([date_utc,parseFloat(firCol)*1000])
        options8.series[1].data.push([date_utc,parseFloat(secCol)])
        //c.push(cat)
       //console.log(Col)
    }

    // Create the chart
    chart = new Highcharts.Chart(options8);


});

jQuery.get(`${media_url}data/${dir_name}/station_anemometer.csv`, function (data) {
    // Split the lines
    var lines = data.split('\n');
    var tab_date = lines[1].split(',')[0]
    var y = tab_date.split(' ')[0].split('-')[0]
    var m = tab_date.split(' ')[0].split('-')[1]
    var d = tab_date.split(' ')[0].split('-')[2]
    
    // Push column data into data list
    for (var i = 1; i < lines.length-1; i++) {
        var tab_date = lines[i].split(",")[0]
        var y = tab_date.split(' ')[0].split('-')[0]
        var m = tab_date.split(' ')[0].split('-')[1]
        var d = tab_date.split(' ')[0].split('-')[2]
        var hh = tab_date.split(' ')[1].split(':')[0]
        var mm = tab_date.split(' ')[1].split(':')[1]
        var date_utc = Date.UTC(parseInt(y), parseInt(m)-1,parseInt(d), parseInt(hh),parseInt(mm))

        var firCol = lines[i].split(",")[1];                                                 // wind speed WS
        var secCol = lines[i].split(",")[2];                                                // wind direction WD 
        options4.series[0].data.push([date_utc,  parseFloat(firCol), parseFloat(secCol)])
        options4.series[1].data.push([date_utc,  parseFloat(firCol), parseFloat(secCol)])
      //  c2.push(cat)
      //  console.log([parseFloat(firCol), parseFloat(secCol)])
    }
    // Create the chart
    chart = new Highcharts.Chart(options4);
});




jQuery.get(`${media_url}data/${dir_name}/station_flux_data_new.csv`, function (data) {
    // Split the lines
    var lines = data.split('\n');
    var tab_date = lines[1].split(',')[0]
    var y = tab_date.split(' ')[0].split('-')[0]
    var m = tab_date.split(' ')[0].split('-')[1]
    var d = tab_date.split(' ')[0].split('-')[2]
    
    // Push column data into data list
    for (var i = 1; i < lines.length-1; i++) {
        var tab_date = lines[i].split(",")[0]
        var y = tab_date.split(' ')[0].split('-')[0]
        var m = tab_date.split(' ')[0].split('-')[1]
        var d = tab_date.split(' ')[0].split('-')[2]
        var hh = tab_date.split(' ')[1].split(':')[0]
        var mm = tab_date.split(' ')[1].split(':')[1]
        var date_utc = Date.UTC(parseInt(y), parseInt(m)-1,parseInt(d), parseInt(hh),parseInt(mm))

        var firCol = lines[i].split(",")[3];                  // SW_IN
        var secCol = lines[i].split(",")[4];                  //  SW_OUT
        var fourCol = lines[i].split(",")[5];                 // LW_IN
        var fifCol = lines[i].split(",")[6];                  //  LW_OUT
        var sixCol = lines[i].split(",")[7];                 //  NETRAD
        options5.series[0].data.push([date_utc,parseFloat(firCol)])
        options5.series[1].data.push([date_utc,parseFloat(secCol)])
        options5.series[2].data.push([date_utc,parseFloat(fourCol)])
        options5.series[3].data.push([date_utc,parseFloat(fifCol)])
        options5.series[4].data.push([date_utc,parseFloat(sixCol)])
        //c2.push(cat)
     //   console.log([parseFloat(firCol), parseFloat(secCol)])

    }
    // Create the chart
    chart = new Highcharts.Chart(options5);
 // Push column data into data list
    for (var i = 1; i < lines.length-1; i++) {
        var tab_date = lines[i].split(",")[0]
        var y = tab_date.split(' ')[0].split('-')[0]
        var m = tab_date.split(' ')[0].split('-')[1]
        var d = tab_date.split(' ')[0].split('-')[2]
        var hh = tab_date.split(' ')[1].split(':')[0]
        var mm = tab_date.split(' ')[1].split(':')[1]
        var date_utc = Date.UTC(parseInt(y), parseInt(m)-1,parseInt(d), parseInt(hh),parseInt(mm))

        var firCol = lines[i].split(",")[8];                        // TS_1_1_1
        var secCol = lines[i].split(",")[9];                        //  TS_2_1_1
        var thirdCol = lines[i].split(",")[10];                      // SWC_1_1_1

        options6.series[0].data.push([date_utc,parseFloat(firCol)])
        options6.series[1].data.push([date_utc,parseFloat(secCol)])
        options6.series[2].data.push([date_utc,parseFloat(thirdCol)])

     //   console.log([parseFloat(firCol), parseFloat(secCol)])

    }

    // Create the chart
    chart = new Highcharts.Chart(options6);
// Push column data into data list
    for (var i = 1; i < lines.length-1; i++) {

        var tab_date = lines[i].split(",")[0]
        var y = tab_date.split(' ')[0].split('-')[0]
        var m = tab_date.split(' ')[0].split('-')[1]
        var d = tab_date.split(' ')[0].split('-')[2]
        var hh = tab_date.split(' ')[1].split(':')[0]
        var mm = tab_date.split(' ')[1].split(':')[1]
        var date_utc = Date.UTC(parseInt(y), parseInt(m)-1,parseInt(d), parseInt(hh),parseInt(mm))
        var firCol = lines[i].split(",")[11];                                                     // LE Latent Heat Flux
        var secCol = lines[i].split(",")[12];                                                     //  H Sensible Heat Flux

        options7.series[0].data.push([date_utc,parseFloat(firCol)])
        options7.series[1].data.push([date_utc,parseFloat(secCol)])




     //   c2.push(cat)
     //   console.log([parseFloat(firCol), parseFloat(secCol)])

    }
   // options7.series[0].pointStart.push(date_utc)
    // Create the chart
    chart = new Highcharts.Chart(options7);
});


$(".my-check").change(function() {
var inputValue = $(this).attr("value");
    if ( $(this).is(':checked') ) {
        $("." + inputValue).show();
    } else {
        $("." + inputValue).hide();
    }
});

