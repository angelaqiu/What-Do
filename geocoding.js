function geocodeLocation(place,breaktype) {
	var geocoder;
	geocoder = new google.maps.Geocoder();
	var address = place;
	geocoder.geocode({'address':address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			console.log(breaktype);
			var pos;
			pos = results[0].geometry.location;
			if (breaktype == "lunch" || breaktype == "dinner") {
				foodSearch(pos);
			} else if (breaktype == "breaktime") {
				POISearch(pos);
			} else {
				createMarker(results[0], "route");
			}
			// return pos;
		}
	})
}