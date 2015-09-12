
function foodSearch(location) {
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: location,
        radius: 500,
        types: ['food']
    }, foodCallback);
}

function foodCallback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            foodPlace = results[i];
            placeID = foodPlace.place_id;
            var service = new google.maps.places.PlacesService(map);
            service.getDetails({placeId: placeID}, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    if (place.opening_hours != null) {
                    	var open = place.opening_hours.open_now;
                    	if (open) {
                        	createMarker(place);
                    }
                  }
                }
            });
        }
    }
}