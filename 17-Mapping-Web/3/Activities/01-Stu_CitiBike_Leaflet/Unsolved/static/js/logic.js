var newYorkCoords = [40.73, -74.0059];
var mapZoomLevel = 12;
// Create the createMap function
  // Create the tile layer that will be the background of our map
  var station_url = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";
  d3.json(station_url).then(function(response) {
    console.log(response);
        // An array which will be used to store created stationMarkers
    var stationMarkers = [];
    var stations = response.data.stations
    for (var i = 0; i < stations.length; i++) {
      var station = stations[i]
      // loop through the cities array, create a new marker, push it to the cityMarkers array
      stationMarkers.push(
        L.marker([station.lat, station.lon]).bindPopup("<h1>" + station.name + "</h1>")
      );
    }
    // Add all the stationMarkers to a new layer group.
    // Now we can handle them as one group instead of referencing each individually
    var stationLayer = L.layerGroup(stationMarkers);
    var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "light-v10",
      accessToken: API_KEY
    });
    var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "dark-v10",
      accessToken: API_KEY
    });
    // Only one base layer can be shown at a time
    var baseMaps = {
      Light: light,
      Dark: dark
    };
    // Overlays that may be toggled on or off
    var overlayMaps = {
      Stations: stationLayer
    };
    var myMap = L.map("map-id", {
      center: newYorkCoords,
      zoom: 12,
      layers: [light, stationLayer]
    });
    L.control.layers(baseMaps, overlayMaps).addTo(myMap);
  });