
var buttonColours = ["red", "blue", "green", "yellow"];  //Array of colors id here
var gamePattern = []; //use to get blinked pattern
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);  //increment the level Pattern here
    next(); // call next function which creates sequence
    started = true;  // make start flag to true
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);  // whenever the user click on colors it will push that one in array named user clicked patterns
  playSound(userChosenColour); // every color has some sound which is mentioned in playSound function
  animatePress(userChosenColour);// the function animate Pass create animation for every color
  checkAnswer(userClickedPattern.length-1); // this check Answer function check user will go to next level or it is game over condition
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){ // these conditions checking that user pattern is same or its length is equal or not
        setTimeout(function () {
          next(); // call next sequence pattern which is creating by next function
        }, 1000); // give 1000ms break every time
      }
    } else {
      playSound("wrong");    // if pattern is wrongly clicked then it play wrong sound and show wrong click
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function next() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level); // in this function random sequance is creating using random function of length 4
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour); // that random pattern pushed into the game pattern array which keep track all the pattern so when the user click it contain the facility to check

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // after click we need to fade the pattern because it is a rule of that game
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed"); // we added a class is current color record
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;      // it keep track of game level and pattern when game is over
  gamePattern = [];
  started = false;
}
