const submit = document.querySelector("#submit");
const inputTxt = document.querySelector("#guessletter");
const wordDiv = document.querySelector(".word");
const wrongdiv = document.querySelector(".wrong");
const wrongDivParent = document.querySelector(".wrong-div");
const result = document.querySelector(".title");
const message = document.querySelector(".message");

let wordList = [
  "chrome",
  "firefox",
  "codepen",
  "javascript",
  "jquery",
  "twitter",
  "github",
  "wordpress",
  "opera",
  "sass",
  "layout",
  "standards",
  "semantic",
  "designer",
  "developer",
  "module",
  "component",
  "website",
  "creative",
  "banner",
  "browser",
  "screen",
  "mobile",
  "footer",
  "header",
  "typography",
  "responsive",
  "programmer",
  "css",
  "border",
  "compass",
  "grunt",
  "pixel",
  "document",
  "object",
  "ruby",
  "modernizr",
  "bootstrap",
  "python",
  "php",
  "pattern",
  "ajax",
  "node",
  "element",
  "android",
  "application",
  "adobe",
  "apple",
  "google",
  "microsoft",
  "bookmark",
  "internet",
  "icon",
  "svg",
  "background",
  "property",
  "syntax",
  "flash",
  "html",
  "font",
  "blog",
  "network",
  "server",
  "content",
  "database",
  "socket",
  "function",
  "variable",
  "link",
  "apache",
  "query",
  "proxy",
  "backbone",
  "angular",
  "email",
  "underscore",
  "cloud",
];

let randomword = wordList[Math.floor(Math.random() * wordList.length)];
let blanks = undefined;
let incorrectTries = 0;
submit.addEventListener("click", check);
inputTxt.addEventListener("keydown", (e) => {
  if (e.key === "Enter") check();
});

function showblanks() {
  for (let i = 0; i < randomword.length; i++) {
    const list = document.createElement("li");
    list.classList.add("letter");
    list.innerText = "";
    wordDiv.append(list);
  }
  blanks = document.querySelectorAll(".letter");
}

let correctLetters = [];
let incorrectLetters = [];

console.log(randomword);
function check() {
  let inputLetter = inputTxt.value;
  inputLetter.toLowerCase();
  inputTxt.value = "";
  if (inputLetter < "a" && inputLetter > "z") {
    return;
  }

  if (randomword.includes(inputLetter)) {
    if (correctLetters.includes(inputLetter)) {
      return;
    }
    correctLetters.push(inputLetter);
    for (let i = 0; i < randomword.length; i++) {
      if (randomword[i] === inputLetter) {
        blanks[i].innerText = inputLetter;
      }
    }
  } else {
    if (incorrectLetters.includes(inputLetter)) return;
    incorrectLetters.push(inputLetter);
    wrongDivParent.style.visibility = "visible";
    const wrong = document.createElement("li");
    wrong.classList.add("wrong-letter");
    wrong.innerText = inputLetter.toUpperCase();
    wrongdiv.append(wrong);
    incorrectTries++;
  }
  let currentguess = wordDiv.textContent;
  if (currentguess === randomword) {
    win();
  } else {
    if (incorrectTries == 6) {
      lose();
    }
  }
}

function win() {
  result.innerText = "Hurrah! You won";
  inputTxt.disabled = true;
  message.style.visibility = "visible";
}

function lose() {
  result.innerText = "Oops! You lost";
  inputTxt.disabled = true;
  message.style.visibility = "visible";
}

showblanks();
