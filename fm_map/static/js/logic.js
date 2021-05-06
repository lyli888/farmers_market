//Glonally accessible map variable
var myMap;

//Globally Accessible Legend variable
var legend;

//Globally accessible quakeMarkers array
var marketMarkers = [];

//Globally accessible path to CSV
//var csvpath = "../data/farmers_market_cleaned.csv";

//Globally accessible path to geojson data
//var geojsonpath = "../data/GeoObs2.geojson";



// Creating map object
var myMap = L.map("map-id", {
  center: [40.7128, -74.0059],
  zoom: 11
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Use this link to get the geojson data.
var link = "static/data/nyc.geojson";

// Our style object
var mapStyle = {
  color: "white",
  fillColor: "pink",
  fillOpacity: 0.5,
  weight: 1.5
};
console.log(geojson);
L.geoJson(geojson).addTo(myMap);
