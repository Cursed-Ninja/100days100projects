const RANDOM_QUOTE_API = "http://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const timerElement = document.getElementById("timer");

function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API)
    .then((response) => response.json())
    .then((data) => data.content);
}

quoteInputElement.addEventListener("input", () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
  const arrayValue = quoteInputElement.value.split("");
  const correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("incorrect");
      characterSpan.classList.remove("correct");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      correct = false;
    }
  });
  if (correct) renderNextQuote();
});

async function renderNextQuote() {
  startTimer();
  const quote = await getRandomQuote();
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((element) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = element;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
}

let startTime;
function startTimer() {
  timerElement.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

renderNextQuote();
