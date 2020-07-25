var note = document.getElementById("note");
var title = document.getElementById("title");
var text = document.getElementById("text");
var data;

var xhr = new XMLHttpRequest();
xhr.open('get', 'https://yoluntsai.github.io/Travel_Blog_JSON/Sights.json', true);
xhr.onload = function () {
    data = JSON.parse(this.responseText);
};
xhr.send();

function change(a) {
    note.style.display = "block";
    title.innerText = data[a].title;
    text.innerHTML = data[a].text;
}

function hide() {
    note.style.display = "none";
}