//DOM

// selectors

console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByClassName("items"));
console.log(document.getElementById("list"));

console.log(document.querySelector("h1").innerHTML);

console.log(document.querySelectorAll("li"));

// events
var bu = document.getElementById("js");
var style = bu.style;
bu.addEventListener("mouseenter", function() {
    style.backgroundColor = "dodgerblue";
    style.color = "white";
    style.border = "none";
    style.padding = "10px 25px";
    style.borderRadius = "30px";
});

bu.addEventListener("mouseleave", function() {
    style.backgroundColor = "teal";

    // style = "none";
});

var items = ["cake", "pastery", "papad"];
var ul = document.getElementsByTagName("ul")[0];
bu.addEventListener("click", function() {
    var task = prompt("Enter task");
    if (task !== null && task !== "") {
        ul.innerHTML = ul.innerHTML + "<li>" + task + "</li>";
    }
});

var bu2 = document.getElementById("add");
var input = document.getElementById("item");

bu2.addEventListener("click", function() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
});

input.addEventListener("keypress", function(event) {


    if (event.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
});