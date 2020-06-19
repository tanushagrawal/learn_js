var h = document.querySelector("#heading");
var family = document.querySelector("#family");
var size = document.querySelector("#font-size")
var weight = document.querySelector("#weight");
var h1 = document.getElementById("heading");



family.addEventListener("input", function () {
   
    h1.style.fontFamily = family.value;
    
});

size.addEventListener("input", function () {
   
     h1.style.fontSize =`${size.value}px`;
    

});
weight.addEventListener("input", function () {


   h1.style.fontWeight = weight.value 
});