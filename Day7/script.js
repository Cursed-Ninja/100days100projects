setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;
  document.querySelector(".hour").style.transform = `rotate(${hrotation}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${mrotation}deg)`;
  document.querySelector(".second").style.transform = `rotate(${srotation}deg)`;
}, 1000);

function changeTheme() {
  if (
    document.querySelector("button").style.backgroundImage == 'url("sun.png")'
  ) {
    document.querySelector("button").style.backgroundImage = 'url("moon.png")';
    document.querySelector("body").style.backgroundColor =
      "var(--dark-body-color)";
    document
      .querySelector(":root")
      .style.setProperty("--current-clock-color", "var(--dark-clock-color)");
  } else {
    document.querySelector("button").style.backgroundImage = 'url("sun.png")';
    document.querySelector("body").style.backgroundColor =
      "var(--light-body-color)";
    document
      .querySelector(":root")
      .style.setProperty("--current-clock-color", "var(--light-clock-color)");
  }
}
