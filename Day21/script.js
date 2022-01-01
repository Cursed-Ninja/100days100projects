const button = document.getElementById("btn");
const fan = document.getElementsByClassName("blade_container")[0];
button.addEventListener("click", moveStopFan);

function moveStopFan() {
  var list = document.getElementById("fan").classList;
  if (list.length == 2) {
    list.remove("rotate");
  } else {
    list.add("rotate");
  }
}
