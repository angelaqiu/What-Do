function drawRoute() {
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();

    console.log("drawing route");

    directionsDisplay = new google.maps.DirectionsRenderer();
    var chicago = new google.maps.LatLng(41.850033, -87.6500523);

    directionsDisplay.setMap(map);

    var start = new google.maps.LatLng(18.210885, -67.140884);
    var end = new google.maps.LatLng(18.211685, -67.141684);
    var request = {
    origin: start,
    destination: end,
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
