var canvas = document.getElementById("paint");
var ctx = canvas.getContext("2d");

var sketch = document.getElementById("sketch");
var sketch_style = getComputedStyle(sketch);

canvas.width = parseInt(document.querySelector("#paint").offsetWidth);
canvas.height = parseInt(document.querySelector("#paint").offsetHeight);

var mouse = { x: 0, y: 0 };
var touch = { x: undefined, y: undefined };

canvas.addEventListener(
  "mousemove",
  function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  },
  false
);

canvas.addEventListener(
  "touchmove",
  function (e) {
    touch.x = e.touches[0].pageX - this.offsetLeft;
    touch.y = e.touches[0].pageY - this.offsetTop;
  },
  false
);

ctx.lineJoin = "round";
ctx.lineCap = "round";

ctx.strokeStyle = "red";
function getColor(colour) {
  ctx.strokeStyle = colour;
}

function getSize(size) {
  ctx.lineWidth = size;
}

function erase() {
  getColor(
    getComputedStyle(document.querySelector(":root")).getPropertyValue(
      "--bgcolor"
    )
  );
}

function clearScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener(
  "mousedown",
  function (e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    canvas.addEventListener("mousemove", onPaint, false);
  },
  false
);

canvas.addEventListener(
  "mouseup",
  function () {
    canvas.removeEventListener("mousemove", onPaint, false);
  },
  false
);

canvas.addEventListener(
  "touchstart",
  function (e) {
    ctx.beginPath();
    ctx.moveTo(touch.x, touch.y);
    canvas.addEventListener("touchmove", onPaintTouch, false);
  },
  false
);

canvas.addEventListener(
  "touchend",
  function (e) {
    canvas.removeEventListener("touchmove", onPaintTouch, false);
    touch.x = undefined;
    touch.y = undefined;
  },
  false
);

var onPaint = function () {
  ctx.lineTo(mouse.x, mouse.y);
  ctx.stroke();
};

var onPaintTouch = function (e) {
  if (touch.x == 0 && touch.y == 0) return;
  ctx.lineTo(touch.x, touch.y);
  ctx.stroke();
};
