// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '274483148916-9p6rdem1ud3skl32vgrvphevmm86lnja.apps.googleusercontent.com';

var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

/**
 * Check if current user has authorized this application.
 */
function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES,
      'immediate': true
    }, handleAuthResult);
}

/**
 * Handle response from authorization server.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none';
    loadCalendarApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    authorizeDiv.style.display = 'inline';
  }
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 *
 * @param {Event} event Button click event.
 */
function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult);
  return false;
}

/**
 * Load Google Calendar client library. List upcoming events
 * once client library is loaded.
 */
function loadCalendarApi() {
  gapi.client.load('calendar', 'v3', listUpcomingEvents);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function listUpcomingEvents() {
  var request = gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  });

  request.execute(function(resp) {
    var events = resp.items;
    appendPre('Upcoming events:');
    var response = [];
    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        var respEvent = {};
        var event = events[i];
        var when = event.start.date;
        var when2 = event.end.date;
        //find today
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd='0'+dd;
        } 

        if(mm<10) {
            mm='0'+mm;
        } 
        respEvent["name"] = event.name;
        if (when.getMonth() == mm && when.getDate() == dd && 
            when2.getMonth() == mm && when2.getDate() == dd) {
          if (event.start.dateTime) {
            when = event.end.dateTime;
            respEvent["hours"] = when.getHours();
            respEvent["minutes"] = when.getMinutes();
          }
          if (event.end.dateTime) {
            when2 = event.end.dateTime;
            respEvent["hours2"] = when2.getHours();
            respEvent["minutes2"] = when2.getMinutes();
          }
        }
        if (event.location) {
          respEvent["location"] = event.location;
        }
      response.push(respEvent);
      }
    } else {
      console.log("No events found!!!");
    }
    console.log(response);
  });
}