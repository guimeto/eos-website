var currentDate = new Date()
var day = currentDate.getUTCDate()
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var month = monthNames[currentDate.getMonth()];
var year = currentDate.getUTCFullYear()
var hour = ('0'+currentDate.getUTCHours()).substr(-2)

function zeroFill(num, size) {
  let s = num + '';
  while (s.length < size) s = `0${s}`;
  return s;
}
var hour2 = zeroFill(hour, 2).toString();
var day2 = zeroFill(day, 2).toString();

var minutes = currentDate.getUTCMinutes()
var globalVariable

full_Date = day2 +' '+ month +' '+ year + ' ; ' + hour + minutes + ' UTC'

var map = L.map( 'map', {
  center: [45.5, -73.6],
  minZoom: 6,
  zoom: 9
});

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
 subdomains: ['a','b','c']
}).addTo( map );

var markerClusters = L.markerClusterGroup();
for ( var i = 0; i < stations.length; ++i )
  { 
    var j = i+1
    var popup = '<div  id="ori_date"><h5>'+full_Date+'</h5></div>' 
    + '<br><b>Station:        </b>'+stations[i].name 
    + '<br><b>Temperature:    </b>'+stations[i].Temp + ' °C'
    + '<br><b>Humidity:       </b>'+stations[i].Humidity + ' %'
    + '<br><b>Wind direction:       </b>'+stations[i].Dir + ' Deg '
    + '<br><b>Wind speed:       </b>'+stations[i].Speed + ' m/s'
    + '<br><b>Pressure:       </b>'+stations[i].Pressure.toFixed(1) + ' hPa'
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
