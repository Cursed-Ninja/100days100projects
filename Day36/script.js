const inputText = document.querySelector(".input-text");
const shortenBtn = document.querySelector(".shorten-btn");
const errorMsg = document.querySelector(".error-message");
const displayDiv = document.querySelector(".links");
const copyBtns = document.querySelectorAll(".copy");
const loader = document.querySelector("#loader");

shortenBtn.addEventListener("click", shorten);
inputText.addEventListener("keydown", (e) => {
  errorMsg.classList.add("invisible");
  inputText.classList.remove("input-error");
  if (e.key === "Enter") {
    shorten();
  }
});

function shorten() {
  loader.style.visibility = "visible";
  inputText.disabled = true;
  shortenBtn.removeEventListener("click", shorten);
  fetch("https://api.shrtco.de/v2/shorten?url=" + inputText.value)
    .then((Response) => Response.json())
    .then((data) => {
      if (!data.ok) {
        displayError();
      } else {
        createData(data.result);
      }
    });
}

function displayError() {
  errorMsg.classList.remove("invisible");
  inputText.classList.add("input-error");
  loader.style.visibility = "hidden";
  inputText.disabled = false;
  shortenBtn.addEventListener("click", shorten);
}

function createData(data) {
  var span1 = document.createElement("span");
  span1.innerText = data.original_link;
  span1.classList.add("original-link");
  var span2 = document.createElement("span");
  span2.innerText = data.short_link;
  span2.classList.add("shortened-link");
  var btn = document.createElement("button");
  btn.classList.add("copy");
  btn.innerText = "copy";
  btn.addEventListener("click", () => {
    btn.innerText = "Copied!";
    copy(btn);
    setTimeout(() => {
      btn.innerText = "Copy";
    }, 500);
  });
  var span3 = document.createElement("span");
  span3.classList.add("shorten");
  span3.appendChild(span2);
  span3.appendChild(btn);
  var div = document.createElement("div");
  div.classList.add("link");
  div.appendChild(span1);
  div.appendChild(span3);
  displayDiv.appendChild(div);
  loader.style.visibility = "hidden";
  inputText.disabled = false;
  shortenBtn.addEventListener("click", shorten);
}

function copy(Element) {
  var dataTxt = Element.previousElementSibling.innerText;
  navigator.clipboard.writeText(dataTxt).then(() => alert("Copied"));
}

function saveData() {}
