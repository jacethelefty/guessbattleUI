/* DISPLAY ENTER GAME SCREEN  */

  $('body').load(function(){
  showPopUpBox();
  });

/* PREVENT NUMBERS LESS THAN 1, GREATER THAN 10, AND NON-DIGITS IN INPUT FILEDS */
/* CODE COPIED FROM http://jsfiddle.net/94ayn8b6/4/ ON FEB 13TH 2015 */

  $(".txt.input-sm").keydown(function (event) {
  //prevent using shift with numbers
  if (event.shiftKey == true) {
  event.preventDefault();
  }

  if (!((event.keyCode == 190) || (event.keyCode >= 48 && event.keyCode <= 57) 
  || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8 || event.keyCode == 9 
  || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46)) {
  event.preventDefault();
  }
  });

  $(".txt.input-sm").keyup(function (event) {
  var number = parseFloat($(this).val());
  if(number > 10 || number < 1){
  $(this).val("");
  }
  });

 /* HIDE ELEMENT FUNCTIONS */

function hideEntry1(){
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

/* CALCULATE GAME RESULTS FUNCTION */

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

  /* DISPLAY GAME RESULTS SCREEN */

  document.getElementById("popUpBox").style.display="block";
  document.getElementById('continue').innerHTML = "Reset Game";
  document.getElementById("continue").onclick = refreshPage;
}

/* CLICK FUNCTIONS */

  $('#continue').click(function () {
    hidePopUpBox();
  });
  $('input').focus(function() {
    $(this).attr('placeholder', ' ')
          }).blur(function() {
    $(this).attr('placeholder', 'Enter 1-10 Here')
    })
  $('#hide1').click(function(){
    hideEntry1();
  });
  $('#hide2').click(function(){
    hideEntry2();
  });
  $('#submit').click(function(){
    guessBattle();
  });
  $('#reload').click(function(){
    refreshPage();
  });

/* RELOAD PAGE */
function refreshPage() {		
  window.location.reload(true);
}