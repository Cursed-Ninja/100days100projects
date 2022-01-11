const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");
const container = document.querySelector(".container");
const game = document.querySelector(".game");
const player = document.querySelector("#player");
const opponent = document.querySelector("#opponent");
const result = document.querySelector("#result");
const playAgain = document.querySelector("#play-again");
const resultDiv = document.querySelector(".result-div");
const scoreDisplay = document.querySelector("#score");
var score = 0;
var playerTurn;

rock.addEventListener("click", startGameRock);
paper.addEventListener("click", startGamePaper);
scissors.addEventListener("click", startGameScissors);
playAgain.addEventListener("click", restartGame);

function startGameRock() {
  player.classList.add("options");
  player.classList.add("rock");
  playerTurn = "r";
  startGame();
}

function startGamePaper() {
  player.classList.add("options");
  player.classList.add("paper");
  playerTurn = "p";
  startGame();
}

function startGameScissors() {
  player.classList.add("options");
  player.classList.add("scissors");
  playerTurn = "s";
  startGame();
}

function startGame() {
  container.classList.add("invisible");
  game.classList.remove("invisible");
  setTimeout(showOpponent, 1000);
}

function showOpponent() {
  var turn = Math.floor(Math.random() * 3);
  opponent.classList.remove("opponent");
  opponent.classList.add("options");
  if (turn == 0) {
    opponent.classList.add("rock");
  } else if (turn == 1) {
    opponent.classList.add("paper");
  } else {
    opponent.classList.add("scissors");
  }
  updateScore(turn);
}

function updateScore(turn) {
  var opponentTurn;
  if (turn == 0) opponentTurn = "r";
  else if (turn == 1) opponentTurn = "p";
  else opponentTurn = "s";
  if (
    (playerTurn == "r" && opponentTurn == "s") ||
    (playerTurn == "p" && opponentTurn == "r") ||
    (playerTurn == "s" && opponentTurn == "p")
  ) {
    score++;
    result.innerText = "you win";
    playAgain.style.color = "hsl(230, 89%, 65%)";
  } else if (
    (playerTurn == "r" && opponentTurn == "r") ||
    (playerTurn == "p" && opponentTurn == "p") ||
    (playerTurn == "s" && opponentTurn == "s")
  ) {
    result.innerText = "draw";
    playAgain.style.color = "hsl(40, 84%, 53%)";
  } else {
    if (score > 0) score--;
    result.innerText = "you lose";
    playAgain.style.color = "hsl(349, 70%, 56%)";
  }
  showText();
}

function showText() {
  resultDiv.classList.remove("invisible");
  scoreDisplay.innerText = score;
}

function restartGame() {
  resultDiv.classList.add("invisible");
  game.classList.add("invisible");
  container.classList.remove("invisible");
  player.className = "";
  opponent.className = "";
  opponent.classList.add("opponent");
}
