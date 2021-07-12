// pk.eyJ1IjoibXJjcm9kbyIsImEiOiJjazY5cDBnYnowZ2prM2RwbXZjOG1zMTBwIn0.OXhUF1nfFLIWWxCpweanaA
import Vue from 'vue';
import MapBox from 'mapbox-gl'
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibXJjcm9kbyIsImEiOiJjazY5cDBnYnowZ2prM2RwbXZjOG1zMTBwIn0.OXhUF1nfFLIWWxCpweanaA';
var map = new mapboxgl.Map({
  container: 'pk.eyJ1IjoibXJjcm9kbyIsImEiOiJjazY5cDBnYnowZ2prM2RwbXZjOG1zMTBwIn0.OXhUF1nfFLIWWxCpweanaA',
  style: 'mapbox://styles/mapbox/streets-v11'
});