"use strict";

var canvas = document.getElementById("myCanvas");
// ou var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");

ctx.rect(30, 40, 50, 50);
ctx.fillStyle = "#5A6521";
ctx.fill();


ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fill();


ctx.beginPath();
ctx.moveTo(20,220);
ctx.lineTo(20,100);
// ctx.lineTo(70,100);
ctx.strokeStyle="#000000";
ctx.stroke(); 


// ********************
// récupérer les marges entre le document et le canvas
var margeCanvas = canvas.getBoundingClientRect();
console.log(margeCanvas);
console.log("x:",margeCanvas.x,"-y:",margeCanvas.y);


var cursorInit = {};
cursorInit.x = null;
cursorInit.y = null;

var cursorDest = {};
cursorDest.x = null;
cursorDest.y = null;


function onMouseMove(event){
	console.log("mousemove") ;

	cursorDest.x = event.pageX-margeCanvas.x; //clientX - margeDocumentX
 	cursorDest.y= event.pageY-margeCanvas.y; //clientY - margeDocumentY

 	ctx.beginPath();
 	ctx.moveTo(cursorInit.x, cursorInit.y);
	ctx.lineTo(cursorDest.x, cursorDest.y);
	ctx.strokeStyle = "#000000";
	ctx.stroke();

	cursorInit.x = cursorDest.x;
	cursorInit.y = cursorDest.y;

}

canvas.addEventListener("mousedown", function (event) {
	
	cursorInit.x = event.pageX-margeCanvas.x; //clientX - margeDocumentX
    cursorInit.y= event.pageY-margeCanvas.y; //clientY - margeDocumentY
    console.log(cursorInit.x ,cursorInit.y);

    canvas.addEventListener('mousemove', onMouseMove);

    canvas.addEventListener('mouseup', function(){
    	
    	canvas.removeEventListener('mousemove',onMouseMove )
    
    });

});

// getImageData() clic sur couleur dans un deuxieme canvas pour récupérer la couleur







