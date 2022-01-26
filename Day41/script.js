const latinput = document.querySelector("#lat");
const longinput = document.querySelector("#long");
const find = document.querySelector("#find");

var map = L.map("map").setView([0, 0], 1);

var tiles = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

var marker = new L.marker([0, 0]).addTo(map);

function onMapClick(e) {
  map.removeLayer(marker);
  marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  latinput.value = e.latlng.lat.toFixed(5);
  longinput.value = e.latlng.lng.toFixed(5);
}

map.on("click", onMapClick);

function moveto(lat, long) {
  let zoom = 6;
  map.removeLayer(marker);
  marker = L.marker([lat, long]).addTo(map);
  map.setView([lat, long], zoom);
}
