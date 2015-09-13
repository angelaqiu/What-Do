var map;
var infowindow;

function initMap() {
  var pyrmont = {lat: 40.4483, lng: -79.9461};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 14
  });

  infowindow = new google.maps.InfoWindow();

  // var service = new google.maps.places.PlacesService(map);
  // service.nearbySearch({
  //   location: pyrmont,
  //   radius: 500,
  //   types: ['store']
  // }, callback);

  //listUpcomingEvents();
  // geocodeLocation("Stever House");
// <<<<<<< HEAD
//   //drawRoute();
// =======
//   // drawRoute();
// >>>>>>> 32289d53738486a145c65fd3557fcaeef9fc75fb
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place, type) {
  var placeLoc = place.geometry.location;
  var placeID = place.place_id;
  
  if (type == "food") {
    var image = {
      url: 'Restaurant-Icon.png',
      size: new google.maps.Size(380,380),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0,0),
      scaledSize: new google.maps.Size(25,25)
      };
    // var shape = {
    //   coords: [1, 1, 1, 31, 19, 31, 19, 1],
    //   type: 'poly'
    // };
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      icon: image
      });
  } else if (type == "POI") {
    var image = {
        url: 'Binoculars-Icon.png',
        size: new google.maps.Size(512,512),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0),
        scaledSize: new google.maps.Size(25,25)
    };
    var marker = new google.maps.Marker({
        map: map,
        position: placeLoc,
        icon: image
      });
  } else {
  var marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      label: "A"
      });
  }
  
  if (type == "food" || type == "POI") {
    if (place.rating != null) {
        rating = place.rating;
    } else {
        rating = "N/A";
    }
    if (place.formatted_phone_number != null) {
        phone = place.formatted_phone_number;
    } else {
        phone = "N/A";
    }
    var infoContent = ("<h1>" + place.name + "</h1>" +
                        "<p><b> Address: &nbsp; </b>" + place.formatted_address + "</p>" +
                        "<p><b> Phone: &nbsp;&nbsp;&nbsp;&nbsp; </b>" + phone + "</p>" +
                        "<p><b> Rating: &nbsp;&nbsp;&nbsp;&nbsp; </b>" + rating + "</p>" +
                        "<p><b> Hours: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>" + place.opening_hours.weekday_text[0] + "</p>" +
                        "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[1] + "</p>" +
                        "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[2] + "</p>" +
                        "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[3] + "</p>" +
                        "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[4] + "</p>" +
                        "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[5] + "</p>" +
                        "<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + place.opening_hours.weekday_text[6] + "</p>")
  } else {
    var infoContent = place.formatted_address;
    }
  marker.addListener('click', function() {
      infowindow.setContent(infoContent);
      if (type == "route") {
        infowindow.open(map, marker);
      } else {
      infowindow.setPosition(placeLoc);
      infowindow.open(map); 
      }
      });
}



