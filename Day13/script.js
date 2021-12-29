var sec = 0;
var min = 0;
var millisec = 0;
var interval;
var currLap = 0;
var min_sec_time = "";
var millisec_time = "";
var is_running = false;

function startWatch() {
  if (is_running) return;
  interval = setInterval(() => {
    millisec++;
    if (millisec > 99) {
      sec++;
      millisec = 0;
    }
    if (sec > 59) {
      min++;
      sec = 0;
    }
    min_sec_time = "";
    millisec_time = "";

    if (min < 10) {
      min_sec_time += "0";
    }
    min_sec_time += min;
    min_sec_time += ":";
    if (sec < 10) {
      min_sec_time += "0";
    }
    min_sec_time += sec;
    if (millisec < 10) {
      millisec_time += "0";
    }
    millisec_time += millisec;

    is_running = true;
    document.querySelector("#minutes-seconds").textContent = min_sec_time;
    document.querySelector("#milliseconds").textContent = millisec_time;
    // console.log()
  }, 10);
}

function stop() {
  clearInterval(interval);
  is_running = false;
}

function reset() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  millisec = 0;
  currLap = 0;
  document.querySelector("#minutes-seconds").textContent = "00:00";
  document.querySelector("#milliseconds").textContent = "00";
  document.querySelector(".laps").textContent = "";
  is_running = false;
}

function lap() {
  console.log(is_running);
  if (!is_running) return;
  var laps = document.createElement("div");
  currLap++;
  laps.textContent =
    "Lap " + currLap + ": " + min_sec_time + "." + millisec_time;
  laps.classList.add("laps-content");
  document.querySelector(".laps").appendChild(laps);
}
