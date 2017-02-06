// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -5.810895, lng: -35.205258},
    zoom: 17
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
  var myLatLng = {lat: -5.810895, lng: -35.205258};

  //pontos no mapa
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Thiago Demas - Tecnico em Informatica'
  });

  var infoWindow = new google.maps.InfoWindow({map: map});
  var myLatLng = {lat: -5.810169, lng: -35.202747};

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Matheus - Tecnico em Informatica'
  });

  var infoWindow = new google.maps.InfoWindow({map: map});
  var myLatLng = {lat: -5.813006, lng: -35.207460};

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Wendell - Tecnico em Informatica'
  });

  var infoWindow = new google.maps.InfoWindow({map: map});
  var myLatLng = {lat: -5.809622, lng: -35.203394};

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Johann - Tecnico em Informatica'
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Minha Localização.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');



}
