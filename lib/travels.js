"use strict";

var _leaflet = _interopRequireDefault(require("leaflet"));

require("leaflet/dist/leaflet.css");

var _navbar = _interopRequireDefault(require("./navbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import travelMapModule from './travels-map';
(0, _navbar["default"])(); // travelMapModule(); -travelMapModule leads to navbar not rendering

var travelMapModule;

_leaflet["default"].map('travels-map');

var tileLayer = _leaflet["default"].tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
  subdomains: 'abcd',
  maxZoom: 18
});

tileLayer.addTo(travelMapModule);
travelMapModule.setView([40.730833, -73.9975], 16);
console.log('travels page');
/* window.onload = function nav() {
  $.get('/src/nav.html', (data) => {
    $('#common-navbar').html(data);
    $('.navbar-nav').find('li:nth-child(2)')
      .addClass('active')
      .find('a')
      .append('<span class="sr-only">(current)</span>');
  });
}; */

/*  function travelMapModule() {
let travelsMap;
L.map('travels-map');
const tileLayer = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
  subdomains: 'abcd',
  maxZoom: 18,
});
tileLayer.addTo(travelsMap);
travelsMap.setView([40.730833, -73.9975], 16); */