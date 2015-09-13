

function drawRoute(info) {

    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();

    console.log("drawing route");
    console.log(info);

    directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(map);

    var org = info[0]["location"];
    if (org == null) {
        var index = 1;
        while (org == null && index < info.length) {
            org = info[index]["location"]
            orgPlace = info[index];
            index++;
        }
    }
    var dest = info[info.length - 1]["location"];
    if (dest == null) {
        var dIndex = info.length - 2;
        while (dest == null && dIndex >= 0) {
            dest = info[dIndex]["location"]
            destPlace = info[dIndex];
            dIndex--;
        }
    }

    var wps = [];
    if (index != dIndex) {
        for (var i = index + 1; i < dIndex; i++)
        {
           if (info[i]["location"] != null) {
                wps.push({location: info[i]["location"]});
            }
        }
    }

    // var wps = [{ location: point1 }, { location: point2 }, {location: point3}];

    var request = {
    origin: org,
    destination: dest,
    waypoints: wps,
    travelMode: google.maps.TravelMode.WALKING
    };

    console.log(org == dest);

    if (org == dest) {
        geocodeLocation(org, "route");
    } else if ((org != null) && (dest == null)) {
        geocodeLocation(org, "route");
    } else if ((org == null) && (dest != null)) {
        geocodeLocation(dest, "route");
    } else if (org != dest) {
        directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            } else {
                alert("couldn't get directions:" + status);
            }
        });
    }
}
    // google.maps.event.addDomListener(window, 'load', drawRoute);
