// Initialize map
var map = L.map('map', {
    center: [0, 0],
    zoom: 2
});

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Update map on scroll
window.addEventListener('scroll', function () {
    // Get current scroll position
    var scrollPos = window.pageYOffset;

    // Calculate map center based on scroll position
    var center = map.getCenter();
    center.lat = center.lat + scrollPos / 100;
    center.lng = center.lng + scrollPos / 100;

    // Update map center
    map.setView(center);
});




