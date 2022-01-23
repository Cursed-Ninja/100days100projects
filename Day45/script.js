var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector(".display");
var messageDisplay = document.querySelector(".message");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  colors = generateRandomColors(numSquares);
  pickedColor = randomColorG();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
      console.log("here");
    }
  });
}

function changeColors(colorz) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colorz;
  }
}

function randomColorG() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(genColor) {
  var arr = [];
  for (var i = 0; i < genColor; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
