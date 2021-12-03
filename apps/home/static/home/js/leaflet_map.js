var currentDate = new Date()
var day = currentDate.getUTCDate()
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var month = monthNames[currentDate.getMonth()];
var year = currentDate.getUTCFullYear()

var hour = currentDate.getUTCHours()

function zeroFill(num, size) {
  let s = num + '';
  while (s.length < size) s = `0${s}`;
  return s;
}
var hour2 = zeroFill(hour, 2).toString();
var day2 = zeroFill(day, 2).toString();

var minutes = currentDate.getUTCMinutes()
var globalVariable

full_Date = day2 +' '+ month +' '+ year + ' ; ' + hour2 + minutes + ' UTC'

var map = L.map( 'map', {
  center: [46, -73.0],
  minZoom: 6,
  zoom: 8
});

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
 subdomains: ['a','b','c']
}).addTo( map );

var markerClusters = L.markerClusterGroup();
for ( var i = 0; i < stations.length; ++i )
  { 
    var j = i+1
    var popup = '<div  id="ori_date"><h4>'+full_Date+'</h4></div>' 
    + '<br><b>Station:        </b>'+stations[i].name 
    + '<br><b>Temperature:    </b>'+stations[i].Temp1_Avg + ' °C'
    + '<br><b>Humidity:       </b>'+stations[i].RH1 + ' %'
    + '<br><b>Wind direction:       </b>'+stations[i].Mean_WindDir + ' Deg '
    + '<br><b>Wind speed:       </b>'+stations[i].WS_ms + ' m/s'
    + '<br><b>Pressure:       </b>'+stations[i].IRGASON_PA.toFixed(1) + ' hPa'
    + `<img id='container' src='${media_url}images/sentinel${j}.jpg' width='250' height='250'/><br>` 
    + '</a>'
    + '<div>'

    var m = L.marker( [stations[i].lat, stations[i].lon] )
    .bindPopup( popup );

    markerClusters.addLayer( m );
  }


map.addLayer( markerClusters );
map.on('popupopen', function(){
  var cont = document.getElementsByClassName('leaflet-popup-content')[0];    
  var lst = cont.getElementsByTagName('script');
  for (var i=0; i<lst.length;i++) {
    eval(lst[i].innerText)
  }
});
