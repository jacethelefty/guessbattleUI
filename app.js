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
    if (number > 10 || number < 1){
      $(this).val("");
    }
  });

 /* HIDE ELEMENT FUNCTIONS */

function toggleColor(button){
  inputElement = $(button).prev();
  entryColor = inputElement.prop('style').color;
  if (entryColor == "white"){
    inputElement.prop('style').color = "black";
  }else{
    inputElement.prop('style').color = "white";
  }

  // Alternatively, use the .css() method
  // entryColor = inputElement.css('color');
  // if (entryColor == "rgb(0, 0, 0)") {
  //   inputElement.css('color', '#fff');
  // } else {
  //   inputElement.css('color', '#000');
  // }
}

function hidePopUpBox(){
  var popUpBox = document.getElementById('popUpBox');
  if (popUpBox.style.display == "none"){
    popUpBox.style.display="block";
  }else{
    popUpBox.style.display="none";
  }
}

/* CALCULATE GAME RESULTS FUNCTION */

function guessBattle(){
  var answer, guess1, guess2;

  answer = Math.floor((Math.random() * 10) + 1);

  guess1 = document.getElementById('guess1').value;
  guess2 = document.getElementById('guess2').value;

  hidePopUpBox();

  if(guess1 == answer && guess2 == answer ){
    headerMessage = "WOW! You both won!";
  }else if(guess1 == answer){
    headerMessage = "Player 1 is the winner of";
  }else if(guess2 == answer){
    headerMessage = "Player 2 is the winner of";
  }else{
    headerMessage = "Neither one of you won";
  }
  document.getElementById('poph1').innerHTML = headerMessage;

  /* DISPLAY GAME RESULTS SCREEN */

  document.getElementById("popUpBox").style.display="block";
  document.getElementById('continue').innerHTML = "Reset Game";
  $('#continue').click(refreshPage);
}

/* CLICK FUNCTIONS */

  $('#continue').click(function () {
    hidePopUpBox();
  });
  $('input').focus(function() {
    $(this).attr('placeholder', ' ');
  }).blur(function() {
    $(this).attr('placeholder', 'Enter 1-10 Here');
  });
  $('.guess-buttons').click(function(){
    toggleColor(this);
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
