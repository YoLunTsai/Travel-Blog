var note = document.getElementById("note");
var data;
let map;


var xhr = new XMLHttpRequest();
xhr.open('get', 'https://yoluntsai.github.io/Travel_Blog_JSON/Sights.json', true);
xhr.onload = function () {
    data = JSON.parse(this.responseText);
};
xhr.send();

function change(a) {
    if (note.style.display == "none") {
        note.style.display = "block";
    } else {
        note.style.display = "none";
    }
    //google map api
    var uluru = {
        lat: data[a].lat,
        lng: data[a].lng
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: uluru,
        streetViewControl: false,
        mapTypeControl: false
    });

    var contentString = '<p id="title">' + data[a].title + '</p>' + '<p id="text">' + data[a].text + '</p>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    infowindow.open(map, marker);
}