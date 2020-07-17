var note = document.getElementById("note");
var title = document.getElementById("title");
var text = document.getElementById("text");
var date;

var xhr = new XMLHttpRequest();
xhr.open('get', 'https://yoluntsai.github.io/Travel_Blog_JSON/Sights.json', true);
xhr.send();
xhr.onload = function () {
    date = JSON.parse(this.responseText);
};

function change(a) {
    note.style.display = "block";
    title.innerText = date[a].title;
    text.innerHTML = date[a].text;
}

function hide() {
    note.style.display = "none";
}