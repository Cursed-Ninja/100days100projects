const score = document.querySelector("#score");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");
const cursor = document.querySelector(".cursor img");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

window.addEventListener("click", () => {
  cursor.style.animation = "hit 0.1s ease";
  setTimeout(() => {
    cursor.style.removeProperty("animation");
  }, 100);
});

let startGame;

playBtn.addEventListener("click", () => {
  playBtn.classList.add("invisible");
  stopBtn.classList.remove("invisible");
  let points = 0;
  let hole;

  startGame = setInterval(() => {
    let random_number = Math.floor(Math.random() * 9);
    hole = holes[random_number];

    let img = document.createElement("img");
    img.setAttribute("src", "mole.png");
    img.classList.add("mole");
    hole.appendChild(img);

    setTimeout(() => {
      hole.removeChild(img);
    }, 600);
  }, 700);

  window.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target === hole) score.innerText = ++points;
  });
});

stopBtn.addEventListener("click", () => {
  stopBtn.classList.add("invisible");
  playBtn.classList.remove("invisible");
  clearInterval(startGame);
  score.innerText = 0;
});

function updateScore() {
  points++;
  score.innerText = points;
}
