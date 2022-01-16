var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(startGame);

window.addEventListener("click", startGame);

$(".btn").click(function () {
  if (gamePattern.length == 0) return;
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function startGame() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    window.removeEventListener("click", startGame);
  }
}

function nextSequence() {
  level++;
  userClickedPattern = [];
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Anywhere to Restart");
    staOver();
  }
}

function staOver() {
  level = 0;
  gamePattern = [];
  started = false;
  setTimeout(() => {
    window.addEventListener("click", startGame);
  }, 100);
}
