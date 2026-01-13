// Initialize map
var map = L.map('map').setView([20, 0], 2);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example markers
L.marker([28.6139, 77.2090]).addTo(map)
    .bindPopup("<b>New Delhi, India</b>");

L.marker([40.7128, -74.0060]).addTo(map)
    .bindPopup("<b>New York, USA</b>");

L.marker([51.5074, -0.1278]).addTo(map)
    .bindPopup("<b>London, UK</b>");

// Click event to show coordinates
map.on('click', function (e) {
    alert("Latitude: " + e.latlng.lat + "\nLongitude: " + e.latlng.lng);
});
