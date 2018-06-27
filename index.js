"use strict";
// console.log(new Date());
// function Hero (name, hp){
// 	this.hp=hp;
// 	this.name =name;

// 	this.x = 0;
// 	this.y = 0;

// }
// Hero.prototype.strike = function(){
// 	console.log(this.name + "attaque");

// }

// Hero.prototype.move = function(){
// 	this.x += 10 ;
// 	this.y += 10 ;

// }

// Hero.prototype.getPosition = function(){
// 	return{x: this.x, y: this.y};
// }

// var jack = new Hero("Jack",20);
// var joe = new Hero("Joe",25);
// jack.strike();
// jack.move();
// jack.getPosition();

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



// ************
// Créer un rectangle avec le click

// document.addEventListener('click', getRect, true);
// function getRect(e){

//     var cursorX = e.pageX-margeCanvas.x; //clientX - margeDocumentX
//     var cursorY= e.pageY-margeCanvas.y; //clientY - margeDocumentY
//     ctx.rect(cursorX, cursorY, 50, 50);
// 	ctx.fillStyle = "#5A6521";
// 	ctx.stroke(); //ctx.fill();
//     console.log(cursorX,cursorY);
// }

// getRect(e);




var cursorInitX = null;
var cursorInitY = null;
var cursorDestX = null;
var cursorDestY = null;


function onMouseMove(event){
	console.log("mousemove") ;

	cursorDestX = event.pageX-margeCanvas.x; //clientX - margeDocumentX
 	cursorDestY= event.pageY-margeCanvas.y; //clientY - margeDocumentY

 	ctx.beginPath();
 	ctx.moveTo(cursorInitX, cursorInitY);
	ctx.lineTo(cursorDestX, cursorDestY);
	ctx.strokeStyle = "#000000";
	ctx.stroke();

	cursorInitX = cursorDestX;
	cursorInitY = cursorDestY;

}

canvas.addEventListener("mousedown", function (event) {
	
	cursorInitX = event.pageX-margeCanvas.x; //clientX - margeDocumentX
    cursorInitY= event.pageY-margeCanvas.y; //clientY - margeDocumentY
    console.log(cursorInitX ,cursorInitY);

    canvas.addEventListener('mousemove', onMouseMove);

    canvas.addEventListener('mouseup', function(){
    	
    	canvas.removeEventListener('mousemove',onMouseMove )
    
    });

});









