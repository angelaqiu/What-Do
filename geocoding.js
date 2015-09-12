function geocodeLocation(place) {
	var geocoder;
	geocoder = new google.maps.Geocoder();
	var address = place;
	var address = "328 Morewood Ave.";
	geocoder.geocode({'address':address}, function(results, status) {
		pos = results[0].geometry.location;
		console.log(pos);
		return pos;
	})
}