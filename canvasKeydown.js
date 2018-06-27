"use strict";

var canvas = document.getElementById("myCanvas");
// ou var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");



var x = 10; 
var y = 10; 
var h1 = 20; 
var h2 = 20; 
ctx.fillRect(x,y,h1,h2);


    // Left: 37
    // Up: 38
    // Right: 39
    // Down: 40


$(document).keydown(function(press){

	console.log(press.keyCode);

	switch(press.keyCode){
	
		case 37:
			x-=15;
			break;
			
		case 39:
			x+=15;
		  	break;

		case 38:
			y-=15;
			break;

		case 40:
			y+=15;
			break;


		default:
		  	break; // Quitter lorsque cela ne gère pas l'événement touche.
	}


	ctx.clearRect(0,0,700,320); 
	ctx.fillRect(x,y,h1,h2);


});

	




	
