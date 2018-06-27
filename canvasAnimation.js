"use strict";

var canvas = document.getElementById("myCanvas");
// ou var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");


// ********************
// récupérer les marges entre le document et le canvas
var margeCanvas = canvas.getBoundingClientRect();
console.log(margeCanvas);
console.log("x:",margeCanvas.x,"-y:",margeCanvas.y);



// ****************
// ANIMATION



var x = 0;
var direction == "right";
setInterval(function(){
	x++;
	if (x>canvas.width){
		x=0;
	}
	ctx.clearRect(0,0,canvas.width,320); // clearRect(0,0 pour effacer puis taille du canvas width et height)
	ctx.beginPath();
	ctx.fillStyle = "#5A6521";
	ctx.fillRect(x,100,20,20);ctx.fillRect(x,200,30,30);
	ctx.beginPath();
	ctx.strokeStyle = "orange";
	ctx.strokeRect(x,150,40,40);

}
, 15);

