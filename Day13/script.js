var sec = 0;
var min = 0;
var interval;
var currLap = 0;
var time = "";
var is_running = false;
function startWatch() {
  if (is_running) return;
  interval = setInterval(() => {
    sec++;
    if (sec > 59) {
      min++;
      sec = 0;
    }
    time = "";
    if (min < 10) {
      time += "0";
    }
    time += min;
    time += ":";
    if (sec < 10) {
      time += "0";
    }
    time += sec;
    is_running = true;
    document.querySelector(".stopwatch").textContent = time;
  }, 1000);
}

function stop() {
  clearInterval(interval);
  is_running = false;
}

function reset() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  currLap = 0;
  document.querySelector(".stopwatch").textContent = "00:00";
  document.querySelector(".laps").textContent = "";
  is_running = false;
}

function lap() {
  console.log(is_running);
  if (!is_running) return;
  var laps = document.createElement("div");
  currLap++;
  laps.textContent = "Lap " + currLap + ": " + time;
  laps.classList.add("laps-content");
  document.querySelector(".laps").appendChild(laps);
}
