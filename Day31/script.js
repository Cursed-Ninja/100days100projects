const right = document.querySelector(".right");
const wrong = document.querySelector(".wrong");
const text = document.querySelector(".text");
const display = document.querySelector(".window");
const word = document.querySelector("#word");
const language = document.querySelector("#language");
const start = document.querySelector(".start");
var data = words;
var currword;

right.addEventListener("click", correct);
wrong.addEventListener("click", incorrect);
start.addEventListener("click", () => {
  start.classList.add("invisible");
  document.querySelector("#start").innerText = "";
  document.querySelector("#start").classList.add("invisible");
  word.classList.remove("invisible");
  language.classList.remove("invisible");
  showWordFrench();
});

function showWordFrench() {
  text.classList.add("invisible");
  right.classList.add("invisible");
  wrong.classList.add("invisible");
  display.classList.remove("window-white");
  display.classList.add("window-green");
  let randomNumber = Math.floor(Math.random() * data.length);
  currword = data[randomNumber];
  word.innerText = currword["French"];
  language.innerText = "French";
  setTimeout(showWordEnglish, 3000);
}

function showWordEnglish() {
  text.classList.remove("invisible");
  right.classList.remove("invisible");
  wrong.classList.remove("invisible");
  display.classList.add("window-white");
  display.classList.remove("window-green");
  word.innerText = currword["English"];
  language.innerText = "English";
}

function correct() {
  delete data[currword];
  showWordFrench();
}

function incorrect() {
  showWordFrench();
}
