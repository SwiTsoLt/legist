// Initialize and add the map
function initMap() {
    const uluru = { lat: 53.91297199689792, lng: 27.561241603390222 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: "vulica Maksima Bahdanoviča 10, Minsk",
    });
}

window.initMap = initMap;