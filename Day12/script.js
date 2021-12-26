function rollDie() {
  var audio = new Audio("ONEDICE.wav");
  audio.play();
  console.log("sound");
  var number = Math.floor(Math.random() * 6) + 1;
  // console.log(number)
  document.getElementById("die").innerText = number;

  if (number == 1) {
    document.querySelector("body").style.backgroundColor = "var(--white)";
    document.querySelector("#die").style.color = "var(--blue)";
  } else if (number == 2) {
    document.querySelector("body").style.backgroundColor = "var(--yellow)";
    document.querySelector("#die").style.color = "var(--black)";
  } else if (number == 3) {
    document.querySelector("body").style.backgroundColor = "var(--blue)";
    document.querySelector("#die").style.color = "var(--white)";
  } else if (number == 4) {
    document.querySelector("body").style.backgroundColor = "var(--purple)";
    document.querySelector("#die").style.color = "var(--green)";
  } else if (number == 5) {
    document.querySelector("body").style.backgroundColor = "var(--black)";
    document.querySelector("#die").style.color = "var(--yellow)";
  } else {
    document.querySelector("body").style.backgroundColor = "var(--green)";
    document.querySelector("#die").style.color = "var(--purple)";
  }
  document.querySelector("#die").style.borderColor =
    document.querySelector("#die").style.color;
}
