var options = [
  "top-left-image",
  "top-middle-image",
  "top-right-image",
  "middle-left-image",
  "middle-middle-image",
  "middle-right-image",
  "bottom-left-image",
  "bottom-middle-image",
  "bottom-right-image",
];

var player = [];
var computer = [];

var gameContinuing = true;

function userTurn(class_name) {
  if (!gameContinuing) {
    return;
  }
  var visibility = window
    .getComputedStyle(document.getElementsByClassName(class_name)[0])
    .getPropertyValue("visibility");
  if (visibility == "hidden") {
    document
      .getElementsByClassName(class_name)[0]
      .setAttribute("src", "path1874.png");
    document.getElementsByClassName(class_name)[0].style.visibility = "visible";
    var pos = options.indexOf(class_name);
    options.splice(pos, 1);
    player.push(class_name);
    checkWin(player, "player");
    if (gameContinuing) {
      setTimeout(computerTurn, 250);
    }
  }
}

function computerTurn() {
  var r = options.length;
  if (r == 0 || gameContinuing == false) {
    return;
  }
  var pos = Math.floor(Math.random() * r);
  var class_name = options[pos];
  computer.push(class_name);
  document
    .getElementsByClassName(class_name)[0]
    .setAttribute("src", "path2219.png");
  document.getElementsByClassName(class_name)[0].style.visibility = "visible";
  options.splice(pos, 1);
  checkWin(computer, "computer");
}

function checkWin(user, winner) {
  if (player.length + computer.length == 9) {
    gameContinuing = false;
    showWinner("draw");
    return;
  } else if (
    user.includes("top-left-image") &&
    user.includes("top-right-image") &&
    user.includes("top-middle-image")
  ) {
    gameContinuing = false;
    showWinner(winner);
    return;
  } else if (
    user.includes("top-left-image") &&
    user.includes("middle-middle-image") &&
    user.includes("bottom-right-image")
  ) {
    gameContinuing = false;
    showWinner(winner);
    return;
  } else if (
    user.includes("top-left-image") &&
    user.includes("middle-left-image") &&
    user.includes("bottom-left-image")
  ) {
    gameContinuing = false;
    showWinner(winner);
    return;
  } else if (
    user.includes("top-middle-image") &&
    user.includes("middle-middle-image") &&
    user.includes("bottom-middle-image")
  ) {
    gameContinuing = false;
    showWinner(winner);
    return;
  } else if (
    user.includes("middle-left-image") &&
    user.includes("middle-right-image") &&
    user.includes("middle-middle-image")
  ) {
    gameContinuing = false;
    showWinner(winner);
    return;
  } else if (
    user.includes("bottom-left-image") &&
    user.includes("bottom-right-image") &&
    user.includes("bottom-middle-image")
  ) {
    gameContinuing = false;
    showWinner(winner);
    return;
  } else if (
    user.includes("bottom-left-image") &&
    user.includes("middle-middle-image") &&
    user.includes("top-right-image")
  ) {
    gameContinuing = false;
    showWinner(winner);
    return;
  } else if (
    user.includes("top-right-image") &&
    user.includes("middle-right-image") &&
    user.includes("bottom-right-image")
  ) {
    gameContinuing = false;
    showWinner(winner);
    return;
  }
}

function showWinner(user) {
  console.log("yes");
  if (user == "player") {
    document.getElementById("winner").innerText = "You won!";
    document.getElementsByClassName("winner")[0].style.visibility = "visible";
    return;
  } else if (user == "computer") {
    document.getElementById("winner").innerText = "You lose!";
    document.getElementsByClassName("winner")[0].style.visibility = "visible";
    return;
  } else if (user == "draw") {
    document.getElementById("winner").innerText = "It's a draw!";
    document.getElementsByClassName("winner")[0].style.visibility = "visible";
    return;
  }
}
