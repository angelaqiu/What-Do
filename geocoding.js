function geocodeLocation(place) {
	var geocoder;
	geocoder = new google.maps.Geocoder();
	var address = place;
	geocoder.geocode({'address':address}, function(results, status) {
		pos = results[0].geometry.location;
		console.log(pos);
		foodSearch(pos);
		return pos;
	})
}