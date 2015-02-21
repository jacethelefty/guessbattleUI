$('.main').css('display','none')

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
    p1.text( "Player 2 is the winner of" );
  }else{
    p1.text( "Neither one of you won" );
  }

  /* DISPLAY GAME RESULTS SCREEN */
  $('.main').css('display','none')
  $('#popUpBox').css('display', 'block');
  $('#continue').text( "Reset Game" );
  $('#continue').click(refreshPage);

}   //END GUESS BATTLE

  /* PREVENT EMPTY CONTENT IN INPUT FIELDS */

  $('input').focus(function() {
    $(this).attr('placeholder', ' ')
          }).blur(function() {
    $(this).attr('placeholder', 'Enter 1-10 Here')
  });

      /* CLICK FUNCTIONS */

  $('#continue').click(function () {
    $('#popUpBox').slideUp(600);
    $('.main').css('display','block').show(600);
  });

  $('.hide').click(function(){
    var guessInput = $(this).prev();
    guessInput.toggleClass('whiteout');
    $(this).text( guessInput.hasClass('whiteout') ? 'show entry' : 'hide entry' ); 
  });    
  
  //Click event to scroll to top
  $('#submit').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    guessBattle();
    return false;
  });

  $('#reload').click(function(){
    $('main').css('display','none')
    refreshPage();
  });

  /* RELOAD PAGE */
  function refreshPage() {		
    window.location.reload(true);
  }

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