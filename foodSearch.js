
function foodSearch(location) {
    var service = new google.maps.places.PlacesService(map);
    var count = 0
    service.nearbySearch({
        location: location,
        radius: 750,
        types: ['food'],
        rankBy: google.maps.places.RankBy.PROMINENCE
    }, foodCallback);
}

function foodCallback(results, status, pagination) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            foodPlace = results[i];
            placeID = foodPlace.place_id;
            var service = new google.maps.places.PlacesService(map);
            service.getDetails({placeId: placeID}, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    if (place.opening_hours != null) {
                    	var open = place.opening_hours.open_now;
                    	// var open = true;
                    	if (open) {
                        	createMarker(place, "food");
                    }
                  }
                }
            });
        }
    }
}
