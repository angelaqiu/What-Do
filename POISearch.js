
function POISearch(location) {
	var service = new google.maps.places.PlacesService(map);
	service.nearbySearch({
        location: location,
        radius: 3000,
        types: ['amusement_park', 'aquarium', 'art_gallery', 
        	'book_store', 'bowling_alley', 'casino', 'department_store', 
        	'electronics_store', 'movie_theater', 'museum', 'night_club', 'park', 
        	'shopping_mall', 'zoo'],
        rankBy: google.maps.places.RankBy.PROMINENCE
    }, POICallback);
}
 
// makes markers out of top 5 rated results
function POICallback(results, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) { // creates list of open POIs
		var POIList = new Array();
        for (var i = 0; i < results.length; i++) {
            intPlace = results[i];
            placeID = intPlace.place_id;
            var service = new google.maps.places.PlacesService(map);
            service.getDetails({placeId: placeID}, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    if (place.opening_hours != null) {
                    	var open = place.opening_hours.open_now;
                      // var open = true;
                    	if (open) {
                          createMarker(place, "POI")
                    }
                  }
                }
            });
        }
    }
}
//     var sortedPOIList = POIList.sort(function(POIA, POIB) {
//     	return (POIB.rating - POIA.rating);
//     if (length >= 5) {
//     	var count5 = 4;
//     }
//     else {
//     	var count5 = length;
//     }
//     while (count5 >= 0) {
//     	place = sortedPOIList[count5].place;
//     	createMarker(place, "POI");
//     	count5--;
//     }
//     })
// }





