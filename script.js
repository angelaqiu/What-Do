var map;
var infowindow;

function initMap() {
  var pyrmont = {lat: 40.4483, lng: -79.9461};


  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();

  // var service = new google.maps.places.PlacesService(map);
  // service.nearbySearch({
  //   location: pyrmont,
  //   radius: 500,
  //   types: ['store']
  // }, callback);

  //listUpcomingEvents();
  geocodeLocation("Stever House");
<<<<<<< HEAD
  //drawRoute();
=======
  // drawRoute();
>>>>>>> 32289d53738486a145c65fd3557fcaeef9fc75fb
  foodSearch(pyrmont);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  console.log(place);
  var placeLoc = place.geometry.location;
  var placeID = place.place_id;
  if (place.types.indexOf("food") != -1) {
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      // icon: image
      });
  }
  else {
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      });
  }
  var infoContent = ("<h1>" + place.name + "</h1>" +
                      "<p><b> Address: &nbsp; </b>" + place.formatted_address + "</p>" +
                      "<p><b> Phone: &nbsp;&nbsp;&nbsp;&nbsp; </b>" + place.formatted_phone_number + "</p>" +
                      "<p><b> Rating: &nbsp;&nbsp;&nbsp;&nbsp; </b>" + place.rating + "</p>" +
                      "<p><b> Hours: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>" + place.opening_hours.weekday_text[0] + "</p>" +
                      "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[1] + "</p>" +
                      "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[2] + "</p>" +
                      "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[3] + "</p>" +
                      "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[4] + "</p>" +
                      "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[5] + "</p>" +
                      "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[6] + "</p>")
  google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(infoContent);
      infowindow.open(map, this); 
      });
  }
