const inputTxt = document.querySelector("#guess");
const result = document.querySelector("#result");
const submit = document.querySelector(".guess-btn");

let number = Math.floor(Math.random() * 1000) + 1;

submit.addEventListener("click", check);

function check() {
  let userInput = inputTxt.value;
  if (userInput == number) {
    result.innerText = "you guessed it right! Refresh to play again";
  } else if (userInput > number) {
    result.innerText = "too high!";
  } else {
    result.innerText = "too low!";
  }
}
