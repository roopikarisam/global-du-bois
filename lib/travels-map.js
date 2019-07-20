"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _leaflet = _interopRequireDefault(require("leaflet"));

require("leaflet/dist/leaflet.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var travelMap = _leaflet["default"].map("travels-map");

var tileLayer = _leaflet["default"].tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
  attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
  subdomains: "abcd",
  maxZoom: 18
});

tileLayer.addTo(travelMap);
travelMap.setView([40.730833, -73.9975], 16);

var _default = travelMap();

exports["default"] = _default;