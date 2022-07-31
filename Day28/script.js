const min = document.getElementById("minute");
const sec = document.getElementById("second");
const controls = document.querySelectorAll(".control");

function upmin() {
  let num = parseInt(min.innerText);
  num++;
  num %= 60;
  if (num < 10) min.innerText = "0" + num;
  else min.innerText = num;
}

function downmin() {
  let num = parseInt(min.innerText);
  num--;
  if (num < 0) num += 60;
  if (num < 10) min.innerText = "0" + num;
  else min.innerText = num;
}

function upsec() {
  let num = parseInt(sec.innerText);
  num++;
  num %= 60;
  if (num < 10) sec.innerText = "0" + num;
  else sec.innerText = num;
}

function downsec() {
  let num = parseInt(sec.innerText);
  num--;
  if (num < 0) num += 60;
  if (num < 10) sec.innerText = "0" + num;
  else sec.innerText = num;
}

let interval;

function start() {
  controls.forEach((element) => {
    element.disabled = true;
  });
  interval = setInterval(() => {
    let second = parseInt(sec.innerText);
    let minute = parseInt(min.innerText);
    if (second == 0 && minute == 0) {
      reset();
    } else if (second == 0) {
      minute--;
      second = 59;
    } else {
      second--;
    }
    if (minute < 10) min.innerText = "0" + minute;
    else min.innerText = minute;
    if (second < 10) sec.innerText = "0" + second;
    else sec.innerText = second;
  }, 1000);
}

function reset() {
  clearInterval(interval);
  controls.forEach((element) => {
    element.disabled = false;
  });
  min.innerText = "00";
  sec.innerText = "00";
}
