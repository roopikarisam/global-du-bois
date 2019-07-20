import L from "leaflet";
import "leaflet/dist/leaflet.css";

const travelMap = L.map("travels-map");
const tileLayer = L.tileLayer(
  "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
  {
    attribution:
      "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
    subdomains: "abcd",
    maxZoom: 18
  }
);
tileLayer.addTo(travelMap);
travelMap.setView([40.730833, -73.9975], 16);

export default travelMap();
