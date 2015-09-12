
function foodSearch(location) {
	var service = new google.maps.places.PlacesService(map);
	service.nearbySearch({
		location: location,
		radius: 500,
		type: ['food']
	}, foodCallback);
}

function foodCallback(results, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
      		place = results[i];
      		placeID = place.place_id;
      		var service = new google.maps.places.PlacesService(map);
      		service.getDetails({placeId: placeID}, function(place, status) {
      			if (status === google.maps.places.PlacesServiceStatus.OK) {
      				var open = place.opening_hours.open_now;
      				console.log(place);
      				if (open) {
      					createMarker(place);
      				}
      			}
      		})
    	}
	}
}