var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
var globalVariable
var todayDate = new Date().getDate();

function zeroFill(num, size) {
  let s = num + '';
  while (s.length < size) s = `0${s}`;
  return s;
}

var hour = zeroFill(0, 2);

var full_Date = year.toString()+month.toString()+day.toString()+hour.toString()


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
    var popup = '<div class="stileone" id="ori_date"><h4>'+full_Date+'</h4></div>' 
    + '<br><b>Station:        </b>'+stations[i].name 
    + '<br><b>Temperature:    </b>'+stations[i].Temp1_Avg + ' Deg Celcius'
    + '<br><b>Humidity:       </b>'+stations[i].RH1 + ' %'
    + '<br><b>Wind direction:       </b>'+stations[i].Mean_WindDir + ' Deg '
    + '<br><b>Wind speed:       </b>'+stations[i].WS_ms + ' m.s-1'
    + '<br><b>Pressure:       </b>'+stations[i].TPS_Baro_Press_mbar_Corrected + ' mbar'
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