<<<<<<< HEAD
=======
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

>>>>>>> FETCH_HEAD
function guessBattle(){
  var answer, guess1, guess2;

  answer = Math.floor(Math.random() * 10) + 1;	

  guess1 = $('#guess1').val();
  guess2 = $('#guess2').val();

  $('#popUpBox').css('display', 'block');

  var p1 = $( '#poph1' );
  if(guess1 == answer && guess2 == answer ){
    p1.text( "WOW! You both won!" );		 
  }else if(guess1 == answer){
    p1.text( "Player 1 is the winner of" );
  }else if(guess2 == answer){
    p1.text( "Player 2 is the winner of");
  }else{
    p1.text( "Neither one of you won" );
  }

  /* DISPLAY GAME RESULTS SCREEN */
  $('#popUpBox').css('display', 'block');
  $( '#continue' ).text( "Reset Game" );
  $( '#continue' ).attr("onclick","refreshPage()");
}

/* CLICK FUNCTIONS */

  $('#continue').click(function () {
    $('#popUpBox').slideUp(600);
  });
  $('input').focus(function() {
    $(this).attr('placeholder', ' ')
          }).blur(function() {
    $(this).attr('placeholder', 'Enter 1-10 Here')
  });

  $('#hide1').click(function () {
    var g1 = $('#guess1');
    if (g1.hasClass("blackout")){
        g1.addClass("whiteout");
        g1.removeClass("blackout");
        $(this).text('show entry');
    }else{
        g1.addClass('blackout');
        $(this).text('hide entry');
    }
  });
  $('#hide2').click(function () {
    var g2 = $('#guess2');
    if (g2.hasClass("blackout")){
        g2.addClass("whiteout");
        g2.removeClass("blackout");
        $(this).text('show entry');
    }else{
        g2.addClass('blackout');
        $(this).text('hide entry');
    }
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
<<<<<<< HEAD

/* PREVENT NUMBERS LESS THAN 1, GREATER THAN 10, AND NON-DIGITS IN INPUT FILEDS */
/* CODE COPIED FROM http://jsfiddle.net/94ayn8b6/4/ ON FEB 13TH 2015 */

  var tips = $(".txt.input-sm");

  tips.keydown(function (event) {

    //prevent using shift with numbers
    if (event.shiftKey == true) {
      event.preventDefault(); 
    }   //END IF

    //allow numbers 0-9 (kcs 48-57), allow numeric keypad entry (kcs 96 - 105), allow backspaces (kc 8), 
    //allow tabs (kc 9), allow left arrow (kc 37), allow right arrow (kc 39), allow delete (kc 46)
    //prevents periods, greater than/less than, A - Z, etc... 
    var ekc = event.keyCode;
    if (!((ekc >= 48 && ekc <= 57) 
      || (ekc >= 96 && ekc <= 105) || ekc == 8 || ekc == 9 
      || ekc == 37 || ekc == 39 || ekc == 46)) {
      event.preventDefault(); 
    }   //END IF
  });   //END keydown function

  //prevents numbers greater than 10 and less than 1
  tips.keyup(function (event) {
    var number = parseFloat($(this).val());
    if(number > 10 || number < 1){
      $(this).val("");
    }
  });
=======
>>>>>>> FETCH_HEAD
