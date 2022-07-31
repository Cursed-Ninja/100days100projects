setInterval(() => {
  var d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  var clock = document.getElementById("clock");
  var time = "";
  var flag = false;
  if (htime < 10) {
    time += "0";
  }
  time += htime + ":";
  if (mtime < 10) {
    time += "0";
  }
  time += mtime + ":";
  if (stime < 10) {
    time += "0";
  }
  time += stime;
  clock.innerText = time;
}, 1000);

function changeTheme() {
  if (
    document.querySelector("button").style.backgroundImage == 'url("sun.png")'
  ) {
    document.querySelector("button").style.backgroundImage = 'url("moon.png")';
    document.querySelector("body").style.backgroundColor = "#252525";
    document.querySelector("#clock").style.setProperty("color", "#fff600");
  } else {
    document.querySelector("button").style.backgroundImage = 'url("sun.png")';
    document.querySelector("body").style.backgroundColor = "#F5FDB0";
    document.querySelector("#clock").style.setProperty("color", "#28FFBF");
  }
}
