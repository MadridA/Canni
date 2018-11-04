var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.4326009, lng: -99.1333416},
    zoom: 11
    });
}