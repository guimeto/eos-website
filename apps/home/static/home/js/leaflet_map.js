var currentDate = new Date()
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var year = currentDate.getFullYear()
var hour = currentDate.getHours()
var minutes = currentDate.getMinutes()
var globalVariable


today = mm + '/' + dd + '/' + yyyy;
function zeroFill(num, size) {
  let s = num + '';
  while (s.length < size) s = `0${s}`;
  return s;
}

var hour = zeroFill(hour, 2);
var minutes = zeroFill(minutes, 2);

var full_Date = year.toString()+'/'+month+'/'+day+'  '+hour.toString()+':'+minutes.toString()


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
    + '<br><b>Temperature:    </b>'+stations[i].Temp1_Avg + ' °C'
    + '<br><b>Humidity:       </b>'+stations[i].RH1 + ' %'
    + '<br><b>Wind direction:       </b>'+stations[i].Mean_WindDir + ' Deg '
    + '<br><b>Wind speed:       </b>'+stations[i].WS_ms + ' m/s'
    + '<br><b>Pressure:       </b>'+stations[i].IRGASON_PA + ' mbar'
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
