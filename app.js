
	function hideEntry(){
		var hide1 = document.getElementById('guess1').style.color;
		if (hide1 == "white"){
			document.getElementById("guess1").style.color="black";
		}else{
			document.getElementById("guess1").style.color="white";
		}			
	}

	function hideEntry2(){
		var hide2 = document.getElementById('guess2').style.color;
		if (hide2 == "white"){
			document.getElementById("guess2").style.color="black";
		}else{
			document.getElementById("guess2").style.color="white";
		}			
	}

	function hidePopUpBox(){
		var pop = document.getElementById('popUpBox').style.display;
		if (pop == "none"){
			document.getElementById("popUpBox").style.display="block";
		}else{
			document.getElementById("popUpBox").style.display="none";
		}		
	}

<!-- ===========================GUESS BATTLE GAME============================== -->

function guessBattle(){
var answer, guess, guess2, message;

answer = Math.floor(Math.random() * 10);	

guess = document.getElementById('guess1').value;
guess2 = document.getElementById('guess2').value;

if(guess>10){
guess = alert("Hey Player 1, you need to pick a lower number!");
guess = prompt("Please pick a new number between 1 and 10. \nDon't forget to pick a lower number than you did last time!");
}else if (guess<=0.999) {
guess = alert("Hey Player 1, you need to pick a higher number!");
guess = prompt("Please pick a new number between 1 and 10. \nDon't forget to pick a higher number than you did last time!");
}else if(isNaN(guess) == true){
guess = prompt("Hey Player 1, we're playing with numbers here.\n" + "Your guess of " + guess + " is not a number.\n" + "Please Try Again!")
}	

if(guess>10){
guess = alert("Hey Player 1, you need to pick a lower number!");
guess = prompt("Please pick a new number between 1 and 10. \nDon't forget to pick a lower number than you did last time!");
}else if (guess<=0.999) {
guess = alert("Hey Player 1, you need to pick a higher number!");
guess = prompt("Please pick a new number between 1 and 10. \nDon't forget to pick a higher number than you did last time!");
}else if(isNaN(guess) == true){
guess = prompt("Hey Player 1, we're playing with numbers here.\n" + "Your guess of " + guess + " is not a number.\n" + "Please Try Again!")
}					

if(guess2>10){
guess2 = alert("Hey Player 2, you need to pick a lower number!");
guess2 = prompt("Please pick a new number between 1 and 10. \nDon't forget to pick a lower number than you did last time!");
}else if (guess2<=0.999) {
guess2 = alert("Hey Player 2, you need to pick a higher number!");
guess2 = prompt("Please pick a new number between 1 and 10. \nDon't forget to pick a higher number than you did last time!");
}else if(isNaN(guess2) == true){
guess2 = prompt("Hey Player 2, we're playing with numbers here.\n" + "Your guess of " + guess2 + " is not a number.\n" + "Please Try Again!")
}		

if(guess2>10){
guess2 = alert("Hey Player 2, you need to pick a lower number!");
guess2 = prompt("Please pick a new number between 1 and 10. \nDon't forget to pick a lower number than you did last time!");
}else if (guess2<=0.999) {
guess2 = alert("Hey Player 2, you need to pick a higher number!");
guess2 = prompt("Please pick a new number between 1 and 10. \nDon't forget to pick a higher number than you did last time!");
}else if(isNaN(guess2) == true){
guess2 = prompt("Hey Player 2, we're playing with numbers here.\n" + "Your guess of " + guess2 + " is not a number.\n" + "Please Try Again!")
}			

if(guess == answer && guess2 == answer ){			 
message = "WOW! You both won!";
}else if(guess == answer){
message = "Player 1 is the Winner";
}else if(guess2 == answer){
message = "Player 2 is the Winner";
}else{
message = "Neither one of you are winners! Please try Guess Battle again!";
}
alert(message);
}

<!-- ==========================RELOAD PAGE ON BUTTON CLICK===================== -->


function refreshPage() {		
window.location.reload(true);
}
