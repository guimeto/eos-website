var currentDate = new Date()
var day = String(currentDate.getUTCDate()).padStart(2, '0');
var month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
var year = currentDate.getUTCFullYear()
var hour = currentDate.getUTCHours()
var minutes = currentDate.getUTCMinutes()
var globalVariable
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var month2 = monthNames[currentDate.getMonth()];

function zeroFill(num, size) {
  let s = num + '';
  while (s.length < size) s = `0${s}`;
  return s;
}

var hour2 = zeroFill(hour, 2);
var minutes2 = zeroFill(minutes, 2);

var full_Date2 = year.toString()+'/'+month+'/'+day+'  '+hour.toString()+':'+minutes.toString()
var full_Date = day +' '+ month2 +  ' ' year+' ; '+hour+minutes+' UTC'



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
    var popup = '<div class="stileone" id="ori_date"><h4>'+full_Date2+'</h4></div>' 
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
