const image = document.getElementById("arrow");
console.log(image);
const urls = ["up.png", "down.png", "left.png", "right.png"];
var img = null;
var score = 0;
var highScore = localStorage.getItem("highscore");
var highscoreDisplay = document.getElementById("highScore");

if (highScore == null) {
  highScore = 0;
  localStorage.setItem("highscore", highScore);
}

highscoreDisplay.innerText = `Your highscore: ${highScore}`;

document.addEventListener("keydown", (Event) => {
  if (img == null) return;
  if (Event.key === "ArrowLeft") {
    if (img.split(".")[0] === "left") {
      updateScore();
    } else {
      shakeScreen();
    }
  } else if (Event.key === "ArrowUp") {
    if (img.split(".")[0] === "up") {
      updateScore();
    } else {
      shakeScreen();
    }
  } else if (Event.key === "ArrowRight") {
    if (img.split(".")[0] === "right") {
      updateScore();
    } else {
      shakeScreen();
    }
  } else if (Event.key === "ArrowDown") {
    if (img.split(".")[0] === "down") {
      updateScore();
    } else {
      shakeScreen();
    }
  }
});

setInterval(() => {
  img = urls[Math.floor(Math.random() * 4)];
  image.style.backgroundImage = `url(${img})`;
}, 500);

function updateScore() {
  score++;
  if (highScore == null || parseInt(highScore) < score) {
    highScore = score;
    localStorage.setItem("highscore", highScore);
    highscoreDisplay.innerText = `Your highscore: ${highScore}`;
  }
  document.getElementById("score").innerText = score;
}

function shakeScreen() {
  var div = document.getElementById("arrow");
  div.classList.add("apply-shake");
  if (score > 0) {
    score--;
    score--;
    updateScore();
  }
  div.addEventListener("animationend", (e) => {
    div.classList.remove("apply-shake");
  });
}
