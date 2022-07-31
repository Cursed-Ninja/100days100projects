const wordDisplay = document.querySelector(".word");
const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const input = document.querySelector(".input-text");
const scoreDisplay = document.querySelector("#score");
const judgement = document.querySelector(".judgement");
var score = 0;

var word = "";

let randomWord = {
  fetchWord: function () {
    fetch("https://random-words-api.vercel.app/word")
      .then((Response) => Response.json())
      .then((data) => {
        word = data[0].word;
        this.displayWord();
      });
  },
  displayWord: function () {
    var scrambled = word.shuffle();
    wordDisplay.innerText = scrambled;
  },
};

String.prototype.shuffle = function () {
  var a = this.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
};

submit.addEventListener("click", checkAnswer);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkAnswer();
  }
});
reset.addEventListener("click", resetScreen);

function checkAnswer() {
  var text = input.value;
  if (text.toLowerCase() === word.toLowerCase()) {
    updateScore();
    correctAnswer();
  } else {
    incorrectAnswer();
  }
}

function updateScore() {
  score++;
  scoreDisplay.innerText = score;
}

function correctAnswer() {
  judgement.innerText = "Correct Answer!";
  judgement.style.color = "green";
  judgement.style.setProperty("visibility", "visible");
  getNextWord();
  setTimeout(() => {
    judgement.style.setProperty("visibility", "hidden");
  }, 2000);
}

function incorrectAnswer() {
  judgement.innerText = "Incorrect Answer";
  judgement.style.color = "red";
  judgement.style.setProperty("visibility", "visible");

  setTimeout(() => {
    judgement.style.setProperty("visibility", "hidden");
  }, 2000);
}

function resetScreen() {
  score = 0;
  scoreDisplay.innerText = score;
  input.value = "";
  getNextWord();
}

function getNextWord() {
  input.value = "";
  randomWord.fetchWord();
}

getNextWord();
