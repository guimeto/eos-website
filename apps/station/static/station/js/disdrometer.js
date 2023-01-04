$(function () {
  (function (H) {
    H.wrap(H.ColorAxis.prototype, 'toColor', function (proceed, value, point) {
      if (value == 0)
        return 'rgba(255, 255, 255, 0)'; // My color
      else
        return proceed.apply(this, Array.prototype.slice.call(arguments, 1)); // Normal coloring
    });
  }(Highcharts));
    let today = new Date().toISOString().slice(0, 10)

  ///premier tracé pour le diamètre
  var options1 = {

    chart: {
      type: 'heatmap',
      renderTo: 'graphdiv',
      zoomType: 'xy',

    },


    title: {
      text: 'Diameter [mm]',
      style: {
                color: Highcharts.getOptions().colors[1],
                 fontSize:'20px'

            }

    },

    tooltip: {
            shared: true,
            useHTML: true,
            formatter: function () {
             var date = Highcharts.dateFormat('%e. %b %H:%M:%S', this.point.x);
              //  return '<p style = "font-size: 15px"> <b>'+today+'</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
               return '<p style = "font-size: 15px"> <b>'+date+'</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
                    + '<p style = "font-size: 15px">' + 'Number of particules: <b>' + this.point.value + '</b> </p>'
                //    + '<p style = "font-size: 15px">' + 'Recorded between <b>' + secondsTimeSpanToHMS((this.point.x * 10 * 60)) + '</b> and <b>' + secondsTimeSpanToHMS((this.point.x * 10 * 60) + (10*60)) + '</b></p>'
                    + '<p style = "font-size: 15px">' + 'Diameter: <b>' + this.series.yAxis.categories[this.point.y] + '</b> mm</p>';
            },
        },
          xAxis: {
            type: 'datetime',
            labels: {
                step: 1,
                style: {
                    fontSize: '15px'
                }
            },
            crosshair: true,
        }
        ,
   //         xAxis: {
   //            title: {
   //                enabled: true,
   //                text: 'Timestep [nb]',
   //                style: {
   //                    color: Highcharts.getOptions().colors[1],
   //                    fontSize:'15px'
//
  //                        }
   //                    },
    //        min: 1,
   //         max: 143,
   //         tickInterval: 6,
   //         labels: {
   //             step: 1,
   //             style: {
   //                 fontSize: '15px'
   //             }
   //         },
   //         crosshair: true,
   //     },

    yAxis: {
      title: {
        text: 'Diameters: mm',
        style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
      },

      categories: ['', 0.06, 0.19, 0.31, 0.44, 0.56, 0.69, 0.81, 0.94, 1.06, 1.19, 1.37, 1.62, 1.87, 2.12, 2.37, 2.75, 3.25, 3.75, 4.25, 4.75, 5.50, 6.50, 7.50, 8.50, 9.50, 11.00, 13.00, 15.00, 17.00, 19.00, 21.50, 24.00, ''],
      min: 0,
      max: 32,
      crosshair: true,
      labels: {
                style: {
                    color: Highcharts.getOptions().colors[1],
                    fontSize:'15px'
                        }
                    },
        }
    ,
        colorAxis: {
            reversed: false,
            stops: [
                [0, '#3060cf'],
                [0.1, '#66aee2'],
                [0.2, '#8ec5ed'],
                [0.3, '#4ee8b4'],
                [0.4, '#7ee567'],
                [0.5, '#fffbbc'],
                [0.6, '#f2c05e'],
                [0.7, '#ed9549'],
                [0.8, '#ed7031'],
                [0.9, '#ed4d21'],
                [1, '#c4463a']
            ],
            //min: [],
            //max: [],
            min:0,
            max:1000,
            startOnTick: true,
            endOnTick: true,
            labels: {
                format: '{value}',
                style: {
                     color: Highcharts.getOptions().colors[1],
                      fontSize:'15px'

                   }
            }
        },
    series: [{
      nullColor: '#EFEFEF',
      data: [],
      borderWidth: 0,
      colsize: 6e5 //10minutes
    }],
    legend: {
            align: 'right',
            layout: 'vertical',
            margin: 20,

            verticalAlign: 'top',
            y: 25,
            symbolHeight: 320,
        },

    credits: {
      enabled: false
    }
  };
  $.get(`${media_url}data/${dir_name}/diameter_timeserie.csv`, function (data) {
    // Split the lines
    var lines = data.split('\n');
    var fourCol = lines[1].split(",")[4];
    var fifCol = lines[1].split(",")[5];
    //options1.colorAxis.min.push([parseFloat(fourCol)])
    //options1.colorAxis.max.push([parseFloat(fifCol)])

    // Push column data into data list
    for (var i = 1; i < lines.length - 1; i++) {
      var firCol = lines[i].split(",")[1];
      var secCol = lines[i].split(",")[2];
      var thirdCol = lines[i].split(",")[3];
      //options1.series[0].data.push([parseFloat(firCol), parseFloat(secCol), parseFloat(thirdCol)])
      options1.series[0].data.push([parseInt(firCol), parseFloat(secCol), parseFloat(thirdCol)])
    }

    // Create the chart
    chart = new Highcharts.Chart(options1);
  });

  ///deuxieme tracé pour la vitesse

  var options2 = {

    chart: {
      type: 'heatmap',
      renderTo: 'graphdiv2',
      zoomType: 'xy',
    },


    title: {
      text: 'Velocities [m/s]',
      style: {
                color: Highcharts.getOptions().colors[1],
                 fontSize:'20px'

            }
    },
    tooltip: {
            shared: true,
            useHTML: true,
            formatter: function () {
                var date = Highcharts.dateFormat('%e. %b %H:%M:%S', this.point.x);
                //return '<p style = "font-size: 15px"> <b>'+today+'</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
                return '<p style = "font-size: 15px"> <b>'+date+'</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
                    + '<p style = "font-size: 15px">' + 'Number of particules: <b>' + this.point.value + '</b> </p>'
                 //   + '<p style = "font-size: 15px">' + 'Recorded between <b>' + secondsTimeSpanToHMS((this.point.x * 10 * 60)) + '</b> and <b>' + secondsTimeSpanToHMS((this.point.x * 10 * 60) + (10*60)) + '</b></p>'
                    + '<p style = "font-size: 15px">' + 'Velocity: <b>' + this.series.yAxis.categories[this.point.y]+ '</b> m/s</p>';
            },
        },
             xAxis: {
            type: 'datetime',
            labels: {
                step: 1,
                style: {
                    fontSize: '15px'
                }
            },
            crosshair: true,
        }
        ,
  //          xAxis: {
  //             title: {
  //                 enabled: true,
  //                 text: 'Timestep [nb]',
  //                 style: {
  //                     color: Highcharts.getOptions().colors[1],
  //                     fontSize:'15px'
//
//                          }
  //                     },
  //          min: 1,
   //         max: 143,
   //         tickInterval: 6,
   //         labels: {
   //             step: 1,
   //             style: {
   //                 fontSize: '15px'
   //             }
   //         },
   //         crosshair: true,
   //     },

    yAxis: {
      title: {
        text: 'Fall speed: m/s',
        style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
      },

      categories: ['', 0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1.10, 1.30, 1.5, 1.7, 1.9, 2.2, 2.6, 3, 3.4, 3.8, 4.4, 5.2, 6, 6.8, 7.6, 8.8, 10.4, 12, 13.6, 15.2, 17.6, 20.80, ''],
      min: 0,
      max: 32,
      crosshair: true,
      labels: {
                style: {
                    color: Highcharts.getOptions().colors[1],
                    fontSize:'15px'
                        }
                    },
    }
    ,
          colorAxis: {
            reversed: false,
            stops: [
                [0, '#3060cf'],
                [0.1, '#66aee2'],
                [0.2, '#8ec5ed'],
                [0.3, '#4ee8b4'],
                [0.4, '#7ee567'],
                [0.5, '#fffbbc'],
                [0.6, '#f2c05e'],
                [0.7, '#ed9549'],
                [0.8, '#ed7031'],
                [0.9, '#ed4d21'],
                [1, '#c4463a']
            ],
            //min: [],
            min:0,
            max:1000,
            startOnTick: true,
            endOnTick: true,
            labels: {
                format: '{value}',
                style: {
                     color: Highcharts.getOptions().colors[1],
                      fontSize:'15px'

                   }
            }
        },
    series: [{
      nullColor: '#EFEFEF',
      data: [],
      borderWidth: 0,
      colsize: 6e5 //10minutes
    }]
    ,
    legend: {
            align: 'right',
            layout: 'vertical',
            margin: 20,

            verticalAlign: 'top',
            y: 25,
            symbolHeight: 320,
        },
    credits: {
      enabled: false
    }
  };

  $.get(`${media_url}data/${dir_name}/speed_timeserie.csv`, function (data) {
    // Split the lines
    var lines = data.split('\n');
    var fourCol = lines[1].split(",")[4];
    var fifCol = lines[1].split(",")[5];
    //console.log(fifCol)
    //console.log(parseInt(fifCol))
    //console.log(parseFloat(fifCol))
    
    //options2.colorAxis.min.push([parseInt(fourCol)])
    //options2.colorAxis.max.push([parseInt(fifCol)])

    // Push column data into data list
    for (var i = 1; i < lines.length - 1; i++) {
      var firCol = lines[i].split(",")[1];
      var secCol = lines[i].split(",")[2];
      var thirdCol = lines[i].split(",")[3];
      //options2.series[0].data.push([parseFloat(firCol), parseFloat(secCol), parseFloat(thirdCol)])
      options2.series[0].data.push([parseInt(firCol), parseFloat(secCol), parseFloat(thirdCol)])
    }
    // Create the chart
    chart = new Highcharts.Chart(options2);
  });

  function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s / 3600); //Get whole hours
    s -= h * 3600;
    var m = Math.floor(s / 60); //Get remaining minutes
    s -= m * 60;
    return h + "H" + (m < 10 ? '0' + m : m); //zero padding on minutes and seconds ref http://jsfiddle.net/9UGJc/3/
  }
});















