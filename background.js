var _=require("lodash");

var array=[1,2,3,4,5];
console.log("answer= ",_.without(array,4));


var h3=document.querySelector("h3");
var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.querySelector("body");
h3.textContent="linear-gradient(to right,"+
						color1.value +","+
						color2.value+")";

function changeBackground() {
	body.style.background="linear-gradient(to right,"+
						color1.value +","+
						color2.value+")";
	h3.textContent=body.style.background;
}

color1.addEventListener("input",changeBackground);

color2.addEventListener("input",changeBackground);