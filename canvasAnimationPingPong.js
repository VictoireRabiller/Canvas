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
var direction = "right";
setInterval(function(){
	
	if (x>=canvas.width) {

		direction = "left";
	}

	if (x<= 0){
		
		direction = "right";

	}

	if (direction == "right"){
		
		x+=10;

	}else if (direction == "left"){
		x-=10;
	}

	ctx.clearRect(0,0,canvas.width,canvas.height); // clearRect(0,0 pour effacer puis taille du canvas width et height)
	ctx.fillStyle = "#5A6521";
	ctx.fillRect(x,100,20,20);
	
} , 1000/25);

