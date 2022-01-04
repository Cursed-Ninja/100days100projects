const url = "https://opentdb.com/api.php?amount=50&type=boolean";
const startBtn = document.getElementById("start");
const trueBtn = document.getElementById("correct");
const falseBtn = document.getElementById("wrong");
const screen = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
var outOf = document.getElementById("outof");
var questions;
var score = 0;

fetch(url)
  .then((Response) => Response.json())
  .then((data) => {
    questions = data.results;
    console.log(questions);
  });

var current = 0;
console.log(startBtn);
startBtn.addEventListener("click", start);
trueBtn.addEventListener("click", correct);
falseBtn.addEventListener("click", wrong);

function start() {
  if (questions == undefined) return;
  startBtn.classList.add("invisible");
  renderQuestion();
  trueBtn.classList.remove("invisible");
  falseBtn.classList.remove("invisible");
  console.log("here");
}

function correct() {
  if (questions[current].correct_answer == "True") {
    score++;
  }
  current++;
  renderQuestion();
}

function wrong() {
  if (questions[current].correct_answer == "False") {
    score++;
  }
  current++;
  renderQuestion();
}

function renderQuestion() {
  scoreDisplay.innerText = score;
  outOf.innerText = current;
  if (current == 50) {
    startBtn.classList.remove("invisible");
    falseBtn.classList.add("invisible");
    trueBtn.classList.add("invisible");
    startBtn.innerText = "Restart";
    startBtn.removeEventListener("click", start);
    startBtn.addEventListener("click", restart);
  }
  var str = questions[current].question;
  str = decodeEntities(str);
  screen.innerText = str;
}

function restart() {
  current = 0;
  score = 0;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      questions = data.results;
      console.log(questions);
    });
  start();
}

var decodeEntities = (function () {
  // this prevents any overhead from creating the object each time
  var element = document.createElement("div");

  function decodeHTMLEntities(str) {
    if (str && typeof str === "string") {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = "";
    }

    return str;
  }

  return decodeHTMLEntities;
})();
