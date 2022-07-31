const time = document.querySelector(".hours");
const minHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");
const inputHr = document.querySelector("#hour");
const inputmin = document.querySelector("#minute");
const submit = document.querySelector(".submit");
const excellent = document.querySelector(".wrapper");
const container = document.querySelector(".container");
const continueBtn = document.querySelector(".modal-btn");
const confettiWrapper = document.getElementById("confetti-wrapper");

submit.addEventListener("click", check);
continueBtn.addEventListener("click", reset);

for (let i = 1; i <= 60; i++) {
  if (i % 5 == 0) {
    time.innerHTML += "<div class='hour-number'><div>" + i / 5 + "</div></div>";
    let hours = document.getElementsByClassName("hour-number");
    hours[hours.length - 1].style.transform = `translateX(-50%) rotate(${
      i * 6
    }deg)`;
    hours[hours.length - 1].firstChild.style.transform = `rotate(${i * -6}deg)`;
  } else {
    time.innerHTML += "<div class='minute-bar'></div>";
    let bars = document.getElementsByClassName("minute-bar");
    bars[bars.length - 1].style.transform = `translateX(-50%) rotate(${
      i * 6
    }deg)`;
  }
}

var min;
var hour;

function startClock() {
  min = Math.floor(Math.random() * 61);
  hour = Math.floor(Math.random() * 13);

  let minDeg = min * (360 / 60);
  let hourDeg = hour * (360 / 12) + (min / 12) * (360 / 60);
  minHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

startClock();

function reset() {
  excellent.classList.add("invisible");
  container.classList.remove("invisible");
  inputHr.value = "";
  inputmin.value = "";
  confettiWrapper.innerHTML = "";
  startClock();
}

function check() {
  let hrtime = inputHr.value;
  let mintime = inputmin.value;
  if (hrtime == hour && mintime == min) {
    correct();
  } else incorrect();
}

function correct() {
  container.classList.add("invisible");
  excellent.classList.remove("invisible");
  for (i = 0; i < 100; i++) {
    var randomRotation = Math.floor(Math.random() * 360);
    var randomScale = Math.random() * 1;
    var randomWidth = Math.floor(
      Math.random() *
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    );
    var randomHeight = Math.floor(
      Math.random() *
        Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 500
        )
    );

    var randomAnimationDelay = Math.floor(Math.random() * 15);
    console.log(randomAnimationDelay);

    var colors = [
      "#0CD977",
      "#FF1C1C",
      "#FF93DE",
      "#5767ED",
      "#FFC61C",
      "#8497B0",
    ];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    var confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.top = randomHeight + "px";
    confetti.style.right = randomWidth + "px";
    confetti.style.backgroundColor = randomColor;

    confetti.style.obacity = randomScale;
    confetti.style.transform = "skew(15deg) rotate(" + randomRotation + "deg)";
    confetti.style.animationDelay = randomAnimationDelay + "s";
    confettiWrapper.appendChild(confetti);
  }
}

function incorrect() {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "#ff6363";
  }, 500);
}
