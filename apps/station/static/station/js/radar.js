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
 ///   let s = new Date(new Date().setMinutes(new Date().getMinutes() - (30))).toLocaleString()
 ///   let last_r = ((s.split(",")[1]).split(":")[0]) + 'h' + ((s.split(",")[1]).split(":")[1])
    ///tracé pour la vitesse de chute
    var options1 = {

        chart: {
            type: 'heatmap',
            renderTo: 'graphdiv',
            zoomType: 'xy',

        },


        title: {
            text: 'Doppler velocity [m/s]',
            style: {
                color: Highcharts.getOptions().colors[1],
                 fontSize:'20px'

            }
        },
        tooltip: {
            shared: true,
            useHTML: true,
            formatter: function () {
                var date = Highcharts.dateFormat('%e. %b %H:%M', this.point.x);
                //return '<p style = "font-size: 15px"> <b>'+today+'</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
                  return '<p style = "font-size: 15px"> <b>'+date+'</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
                    + '<p style = "font-size: 15px">' + 'Doppler velocity: <b>' + this.point.value + '</b> m/s</p>'
                //    + '<p style = "font-size: 15px">' + 'Recorded between <b>' + secondsTimeSpanToHMS((this.point.x * 10 * 60)) + '</b> and <b>' + secondsTimeSpanToHMS((this.point.x * 10 * 60) + (10*60)) + '</b></p>'
                    + '<p style = "font-size: 15px">' + 'Altitude: <b>' + this.point.y*200 + '</b> meters</p>';
            },
        }
        ,
        boost: {
            useGPUTranslations: true
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
//        xAxis: {
//
//               title: {
//                   enabled: true,
//                   text: 'Timestep [nb]',
//                   style: {
//                       color: Highcharts.getOptions().colors[1],
//                       fontSize:'15px'
//
 //                         }
 //                      },
 //           min: 1,
 //           max: 143,
 //           tickInterval: 6,
 //           labels: {
 //               step: 1,
  //              style: {
 //                   fontSize: '15px'
  //              }
  //          },
  //          crosshair: true,
 //       }
   //     ,
        yAxis: {
            title: {
              //  enabled: true,
                text: 'Altitude [m]',
                style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
            },

            categories: ['', 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600, 5800, 6000, 6200, ''],

            min: 0,
            max: 30,
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
            min: [],
            max: [],
            startOnTick: true,
            endOnTick: true,
            labels: {
                format: '{value}',
                style: {
                     color: Highcharts.getOptions().colors[1],
                      fontSize:'15px'

                   }
            }
        }
        ,

        series: [{
            nullColor: '#EFEFEF',
            data: [],
            borderWidth: 0,
            turboThreshold: 10000,
            colsize: 3e5 // 5minutes
        }]
        ,
          legend: {
            align: 'right',
            layout: 'vertical',
            margin: 20,

            verticalAlign: 'top',
            y: 25,
            symbolHeight: 320,
        }
        ,
        credits: {
            enabled: false
        }
    };
    $.get(`${media_url}data/${dir_name}/doppler_result.csv`, function (data) {
        // Split the lines
        var lines = data.split('\n');
        var fourCol = lines[1].split(",")[4];
        var fifCol = lines[1].split(",")[5];
        options1.colorAxis.min.push([parseFloat(fourCol)]);
        options1.colorAxis.max.push([parseFloat(fifCol)]);

        // Push column data into data list
        for (var i = 1; i < lines.length - 1; i++) {
            var firCol = lines[i].split(",")[1];
            var secCol = lines[i].split(",")[2];
            var thirdCol = lines[i].split(",")[3];
            options1.series[0].data.push([parseInt(firCol), parseFloat(secCol), parseFloat(thirdCol).toFixed(2)])
           // options1.series[0].data.push([parseFloat(firCol), parseFloat(secCol), parseFloat(thirdCol)])
        }

        // Create the chart
        chart = new Highcharts.Chart(options1);
    });

    /// Tracé pour la réflectivité

    var options2 = {

        chart: {
            type: 'heatmap',
            renderTo: 'graphdiv2',
            zoomType: 'xy',
        },


        title: {
            text: 'Reflectivity [dBz]',
            style: {
                color: Highcharts.getOptions().colors[1],
                 fontSize:'20px'

            }
        },

         tooltip: {
            shared: true,
            useHTML: true,
            formatter: function () {
                var date = Highcharts.dateFormat('%e. %b %H:%M', this.point.x);
               // return '<p style = "font-size: 15px"> <b>'+today+'</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
                return '<p style = "font-size: 15px"> <b>'+date+'</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
                    + '<p style = "font-size: 15px">' + 'Reflectivity: <b>' + this.point.value + '</b> dBZ</p>'
             //       + '<p style = "font-size: 15px">' + 'Recorded between <b>' + secondsTimeSpanToHMS((this.point.x * 10 * 60)) + '</b> and <b>' + secondsTimeSpanToHMS((this.point.x * 10 * 60) + (10*60)) + '</b></p>'
                    + '<p style = "font-size: 15px">' + 'Altitude: <b>' + this.point.y*200 + '</b> meters</p>';
            },
        }
        ,
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
   //  ,
   //     xAxis: {

  //          title: {
  //                 enabled: true,
  //                 text: 'Timestep [nb]',
  //                 style: {
   //                    color: Highcharts.getOptions().colors[1],
  //                     fontSize:'15px'

   //                       }
   //                    },

    //        min: 1,
    //        max: 143,
    //        tickInterval: 6,
    //        labels: {
    //            step: 1,
    //            style: {
    //                fontSize: '15px'
    //            }
    //        },
    //        crosshair: true,
    //    }
        yAxis: {
            title: {
              //  enabled: true,
                text: 'Altitude [m]',
                style: {
                color: Highcharts.getOptions().colors[1],
                fontSize:'15px'
            }
            },

            ///categories: ['', 0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1.10, 1.30, 1.5, 1.7, 1.9, 2.2, 2.6, 3, 3.4, 3.8, 4.4, 5.2, 6, 6.8, 7.6, 8.8, 10.4, 12, 13.6, 15.2, 17.6, 20.80, ''],
            categories: ['', 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600, 5800, 6000, 6200, ''],

            min: 0,
            max: 30,
            crosshair: true,
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1],
                    fontSize:'15px'
                        }
                    }
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
            min: [],
            max: [],
            startOnTick: true,
            endOnTick: true,
            labels: {
                format: '{value}',
                style: {
                     color: Highcharts.getOptions().colors[1],
                      fontSize:'15px'

                   }
            }
        }
        ,
        series: [{
            nullColor: '#EFEFEF',
            data: [],
            borderWidth: 0,
            colsize: 3e5 //5minutes
        }]

        ,
          legend: {
            align: 'right',
            layout: 'vertical',
            margin: 20,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 320
        }
        ,
        credits: {
            enabled: false
        }
    };

    $.get(`${media_url}data/${dir_name}/2D_reflectivity_result.csv`, function (data) {
        // Split the lines
        var lines = data.split('\n');
        var fourCol = lines[1].split(",")[4];
        var fifCol = lines[1].split(",")[5];
        options2.colorAxis.min.push([parseFloat(fourCol)]);
        options2.colorAxis.max.push([parseFloat(fifCol)]);

        // Push column data into data list
        for (var i = 1; i < lines.length - 1; i++) {
            var firCol = lines[i].split(",")[1];
            var secCol = lines[i].split(",")[2];
            var thirdCol = lines[i].split(",")[3];
           // options2.series[0].data.push([parseFloat(firCol), parseFloat(secCol), parseFloat(thirdCol)])
            options2.series[0].data.push([parseInt(firCol), parseFloat(secCol), parseFloat(thirdCol).toFixed(2)])
        }
        // Create the chart
        chart = new Highcharts.Chart(options2);
    });

    var options3 = {

        chart: {
            type: 'heatmap',
            renderTo: 'graphdiv3',
            zoomType: 'xy',

        },


        title: {
            text: 'Doppler velocity [m/s]',
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
                //return '<p style = "font-size: 15px"> Start record time: <b> '+ today + '</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
                  return '<p style = "font-size: 15px"><b> '+ date + '</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
                    + '<p style = "font-size: 15px">' + 'Doppler velocity: <b>' + this.point.value + '</b> m/s</p>'
                   // + '<p style = "font-size: 15px">' + 'Recorded between <b>' + secondsTimeSpanToMS((this.point.x * 10 - 10)) + '</b> and <b>' + secondsTimeSpanToMS(this.point.x * 10) + '</b></p>'
                    + '<p style = "font-size: 15px">' + 'Altitude: <b>' + this.point.y*200 + '</b> meters</p>';
            },
        }
        ,
        boost: {
            useGPUTranslations: true
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
     //   xAxis: {

             //title: {
               //    enabled: true,
                 //  text: 'Timestep [nb]',
                  // style: {
                    //   color: Highcharts.getOptions().colors[1],
                      // fontSize:'15px'

                        //  }
                      // },

        //    min: 1,
        //    max: 180,
        //    tickInterval: 10,
        //    labels: {
        //        step: 1,
        //        style: {
        //            fontSize: '15px'
         //       }
         //   },
         //   crosshair: true,

       // }
        //,

        yAxis: {
            title: {
                enabled: true,
                text: 'Altitude [m]',
                style: {
                    color: Highcharts.getOptions().colors[1],
                    fontSize:'15px'

            }
            },

            categories: ['', 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600, 5800, 6000, 6200, ''],
            min: 0,
            max: 30,
            crosshair: true,
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1],
                    fontSize:'15px'
                        }
                    }


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
            min: [],
            max: [],
            startOnTick: true,
            endOnTick: true,
            labels: {
                format: '{value}',
                style: {
                     color: Highcharts.getOptions().colors[1],
                      fontSize:'15px'

                   }
            }
        }
        ,

        series: [{
            nullColor: '#EFEFEF',
            data: [],
            borderWidth: 0,
            colsize: 0.1e5 //10 seconds
        }]
        ,
          legend: {
            align: 'right',
            layout: 'vertical',
            margin: 20,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 320
        }
        ,
        credits: {
            enabled: false
        }
    };

    $.get(`${media_url}data/${dir_name}/doppler_result_30min.csv`, function (data) {
        // Split the lines
        var lines = data.split('\n');
        var fourCol = lines[1].split(",")[4];
        var fifCol = lines[1].split(",")[5];
        options3.colorAxis.min.push([parseFloat(fourCol)]);
        options3.colorAxis.max.push([parseFloat(fifCol)]);

        // Push column data into data list
        for (var i = 1; i < lines.length - 1; i++) {
            var firCol = lines[i].split(",")[1];
            var secCol = lines[i].split(",")[2];
            var thirdCol = lines[i].split(",")[3];
            //options3.series[0].data.push([parseFloat(firCol), parseFloat(secCol), parseFloat(thirdCol).toFixed(2)])
            options3.series[0].data.push([parseInt(firCol), parseFloat(secCol), parseFloat(thirdCol).toFixed(2)])
        }

        // Create the chart
        chart = new Highcharts.Chart(options3);
    });

    ///deuxieme tracé pour la vitesse

    var options4 = {

        chart: {
            type: 'heatmap',
            renderTo: 'graphdiv4',
            zoomType: 'xy',
        },


        title: {
            text: 'Reflectivity [dBz]',
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
                //return '<p style = "font-size: 15px"> Start record time: <b> '+ today + '</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
                return '<p style = "font-size: 15px"><b> '+ date + '</b></p><hr style="height:2px;border-width:0;color:black;background-color:gray">'
                    + '<p style = "font-size: 15px">' + 'Reflectivity: <b>' + this.point.value + '</b> dBZ</p>'
                 //   + '<p style = "font-size: 15px">' + 'Recorded between <b>' + secondsTimeSpanToMS((this.point.x * 10 - 10)) + '</b> and <b>' + secondsTimeSpanToMS(this.point.x * 10) + '</b></p>'
                    + '<p style = "font-size: 15px">' + 'Altitude: <b>' + this.point.y*200 + '</b> meters</p>';
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

//        xAxis: {
//                title: {
//                   enabled: true,
//                   text: 'Timestep [nb]',
//                   style: {
//                       color: Highcharts.getOptions().colors[1],
//                       fontSize:'15px'

//                          }
//                       },

//            min: 1,
//            max: 180,
//            tickInterval: 10,
//            labels: {
//                step: 1,
//                style: {
//                    fontSize: '15px'
//                }
//            },
//            crosshair: true,

//        }
//        ,
        yAxis: {
            title: {
                enabled: true,
                text: 'Altitude [m]',
            style: {
                color: Highcharts.getOptions().colors[1],
                 fontSize:'15px'

            }
            },
            categories: ['', 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600, 5800, 6000, 6200, ''],
            min: 0,
            max: 30,
            crosshair: true,
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1],
                    fontSize:'15px'
                        }
                    }
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
            min: [],
            max: [],
            startOnTick: true,
            endOnTick: true,
            labels: {
                format: '{value}',
                style: {
                     color: Highcharts.getOptions().colors[1],
                      fontSize:'15px'

                   }
            }
        }
        ,
        series: [{
            nullColor: '#EFEFEF',
            data: [],
            borderWidth: 0,
            colsize: 0.1e5 //10 seconds
        }],
          legend: {
            align: 'right',
            layout: 'vertical',
            margin: 20,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 320
        }
        ,
        credits: {
            enabled: false
        }
    };

    $.get(`${media_url}data/${dir_name}/2D_reflectivity_result_30min.csv`, function (data) {
        // Split the lines
        var lines = data.split('\n');
        var fourCol = lines[1].split(",")[4];
        var fifCol = lines[1].split(",")[5];
        options4.colorAxis.min.push([parseFloat(fourCol)]);
        options4.colorAxis.max.push([parseFloat(fifCol)]);

        // Push column data into data list
        for (var i = 1; i < lines.length - 1; i++) {
            var firCol = lines[i].split(",")[1];
            var secCol = lines[i].split(",")[2];
            var thirdCol = lines[i].split(",")[3];
            options4.series[0].data.push([parseInt(firCol), parseFloat(secCol), parseFloat(thirdCol).toFixed(2)])
         //   options4.series[0].data.push([parseFloat(firCol), parseFloat(secCol), parseFloat(thirdCol).toFixed(2)])
        }
        // Create the chart
        chart = new Highcharts.Chart(options4);
    });


    function secondsTimeSpanToHMS(s) {
        var h = Math.floor(s / 3600); //Get whole hours
        s -= h * 3600;
        var m = Math.floor(s / 60); //Get remaining minutes
        s -= m * 60;
    //    return h + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);//zero padding on minutes and seconds ref http://jsfiddle.net/9UGJc/3/
        return h + "h" + (m < 10 ? '0' + m : m);//zero padding on minutes and seconds ref http://jsfiddle.net/9UGJc/3/
    }

    function secondsTimeSpanToMS(s) {
        var h = Math.floor(s / 3600); //Get whole hours
        s -= h * 3600;
        var m = Math.floor(s / 60); //Get remaining minutes
        s -= m * 60;
        return (m < 10 ? '0' + m : m) + " mn " + (s < 10 ? '0' + s : s) + " s ";//zero padding on minutes and seconds ref http://jsfiddle.net/9UGJc/3/

    }
});















