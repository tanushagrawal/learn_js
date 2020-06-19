var body = document.getElementsByTagName('body')[0];
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var angle = document.querySelector("#angle");
var code = document.querySelector("#code");
var html = `
  <div>
    <span>Some HTML here</span>
  </div>
`;

function changeColor() {
  var bg = `linear-gradient(${angle.value}deg, ${color1.value} ,${color2.value})`
  body.style.backgroundImage = bg;
  code.innerHTML = `body{
    \n background-image: ${bg};
  }`
}
color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);

angle.addEventListener("input", changeColor);