

function drawRoute(info) {

    // var point0 = new google.maps.LatLng ( -33.89192157947345,151.13604068756104);
    // var point1 = new google.maps.LatLng(-33.8975098545041,151.09962701797485);
    // var point2 = new google.maps.LatLng(-33.8584421519279,151.0693073272705);
    // var point3 = new google.maps.LatLng(-33.84525521656404,151.0421848297119);
    // var point4 = new google.maps.LatLng ( -33.69727974097957,150.29047966003418);

    // var point0 = "Stever House";
    // var point1 = "Carnegie Mellon University";
    // var point2 = "Carnegie Museum of Natural History";
    // var point3 = "University of Pittsburgh";
    // var point4 = "Duquesne University";

    // var point0 = geocodeLocation("Carnegie Mellon University");
    // console.log(point0);

    // var points = [point0, point1, point2, point3, point4];
    // var points = [point0, point1, point3];

    // geocodeLocation(points);

    // var info = {};
    // info["location"] = points;

    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();

    console.log("drawing route");
    console.log(info);

    directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(map);

    var wps = [];

    for (var i = 1; i < info.length - 1; i++)
    {
        wps.push({location: info[i]["location"]});
    }

    // var wps = [{ location: point1 }, { location: point2 }, {location: point3}];

    var org = info[0]["location"];
    var dest = info[info.length - 1]["location"];

    var request = {
    origin: org,
    destination: dest,
    waypoints: wps,
    travelMode: google.maps.TravelMode.WALKING
    };

    directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    } else {
      alert("couldn't get directions:" + status);
    }
    });


}
    // google.maps.event.addDomListener(window, 'load', drawRoute);
