window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;
}

function startGame(){
	alert("Ready!!");
	clearScreen();
	addBox();
	timeStart();
}

var timer = null;
function timeStart(){
	var TIMER_TICK = 1000;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('time');
	if(timer != null){
		clearInterval(timer);
	}
	timer = setInterval(timeCount,TIMER_TICK);
	x.innerHTML = second;
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		second -= 1;
		x.innerHTML = second;
		if(second > 0 && allbox.length == 0){
			clearInterval(timer);
			alert("You win!");
		}
		if(second < 0){
			alert("Gameover Timeout");
			clearInterval(timer);
			clearScreen();
		}
	}
}

function addBox(){
	var numbox = document.getElementById('numbox').value;
	var gameLayer = document.getElementById('game-layer');
	var colorDrop = document.getElementById('color').value;
	
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (600 - 25) + "px";
		tempbox.style.top = Math.random() * (600 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#game-div div");

	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}