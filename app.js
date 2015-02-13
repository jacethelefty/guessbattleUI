
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
var answer, guess, guess2;

answer = Math.floor(Math.random() * 10);	

guess = document.getElementById('guess1').value;
guess2 = document.getElementById('guess2').value;

hidePopUpBox();

if(guess == answer && guess2 == answer ){
document.getElementById('poph1').innerHTML = "WOW! You both won!";			 
}else if(guess == answer){
document.getElementById('poph1').innerHTML = "Player 1 is the winner of";
}else if(guess2 == answer){
document.getElementById('poph1').innerHTML = "Player 2 is the winner of";
}else{
document.getElementById('poph1').innerHTML = "Neither one of you won";
}

document.getElementById("popUpBox").style.display="block";
document.getElementById('continue').innerHTML = "Reset Game";
}
<!-- ==========================RELOAD PAGE ON BUTTON CLICK===================== -->


function refreshPage() {		
window.location.reload(true);
}


