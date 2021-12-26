var WORK_MIN = 1;
var SHORT_BREAK_MIN = 1;
var LONG_BREAK_MIN = 1;
var reps = 0;

function countDown(count) {
  var countmin = Math.floor(count / 60);
  var countsec = count % 60;
  var showcount = "";

  if (countmin < 10) {
    showcount = "0" + countmin;
  } else {
    showcount = countmin;
  }

  showcount += ":";
  if (countsec < 10) {
    showcount = showcount + "0" + countsec;
  } else {
    showcount = showcount + countsec;
  }

  document.getElementsByClassName("timer")[0].innerText = showcount;
  if (count > 0) {
    timeout = setTimeout(countDown, 1000, count - 1);
  } else {
    pomodoro();
  }
}

function pomodoro() {
  reps++;

  if (reps % 2 == 1) {
    countDown(WORK_MIN * 60);
    document.querySelector("#heading").innerText = "WORK";
    document.querySelector("body").style.backgroundColor = "var(--work)";
  } else if (reps % 8 == 0) {
    countDown(LONG_BREAK_MIN * 60);
    document.querySelector("#heading").innerText = "LONG BREAK";
    document.querySelector("body").style.backgroundColor = "var(--long-break)";
  } else {
    countDown(SHORT_BREAK_MIN * 60);
    document.querySelector("#heading").innerText = "SHORT BREAK";
    document.querySelector("body").style.backgroundColor = "var(--shortbreak)";
  }
}

// pomodoro();

function changeButton() {
  if (document.getElementById("timer-button").innerText == "START") {
    document.getElementById("timer-button").classList.add("button-active");
    document.getElementById("timer-button").innerText = "STOP";
    pomodoro();
  } else {
    document.getElementById("timer-button").classList.remove("button-active");
    document.getElementById("timer-button").innerText = "START";
    reps = 0;
    clearTimeout(timeout);
    document.querySelector("#heading").innerText = "WORK";
    document.querySelector("body").style.backgroundColor = "var(--work)";
    document.getElementsByClassName("timer")[0].innerText = "25:00";
  }
}
