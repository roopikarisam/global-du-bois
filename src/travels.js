// import travelMap from './travels-map';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import navBarModule from './navbar';


navBarModule();

// travelMap();


/* window.onload = function nav() {
  $.get('/src/nav.html', (data) => {
    $('#common-navbar').html(data);
    $('.navbar-nav').find('li:nth-child(2)')
      .addClass('active')
      .find('a')
      .append('<span class="sr-only">(current)</span>');
  });
}; */

const travelMap = L.map('travels-map');
const tileLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  maxZoom: 18,
  ext: 'png',
});
tileLayer.addTo(travelMap);
travelMap.setView([37.741249, -25.675594], 2.5);

console.log('travels page');
