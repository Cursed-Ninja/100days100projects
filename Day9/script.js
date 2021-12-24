var container = document.querySelector("div");

function createElements() {
  for (var i = 0; i < 8; i++) {
    var value = Math.ceil(Math.random() * 100);
    var element = document.createElement("div");
    element.classList.add("element");
    element.style.height = `${value * 3}px`;
    element.style.transform = `translate(${i * 40}px)`;

    var element_value = document.createElement("p");
    element_value.classList.add("value");
    element_value.innerText = value;

    element.appendChild(element_value);
    container.appendChild(element);
  }
}

function swap(ele1, ele2) {
  return new Promise((swapped) => {
    var temp = ele1.style.transform;
    ele1.style.transform = ele2.style.transform;
    ele2.style.transform = temp;

    setTimeout(() => {
      container.insertBefore(ele2, ele1);
      swapped();
    }, 500);
  });
}
async function BubbleSort(delay = 250) {
  var elements = document.querySelectorAll(".element");

  for (var i = 0; i < elements.length; i++) {
    for (var j = 0; j < elements.length - i - 1; j++) {
      elements[j].style.backgroundColor = "#F3950D";
      elements[j + 1].style.backgroundColor = "#F3950D";

      var value1 = Number(elements[j].childNodes[0].innerHTML);
      var value2 = Number(elements[j + 1].childNodes[0].innerHTML);

      await new Promise(something =>
        setTimeout(() => {
          something();
        }, delay)
      );

      if (value1 > value2) {
        await swap(elements[j], elements[j + 1]);
        elements = document.querySelectorAll(".element");
      }
      elements[j].style.backgroundColor = "#CD1818";
      elements[j + 1].style.backgroundColor = "#CD1818";
    }
    elements[elements.length - i - 1].style.backgroundColor = "#116530";
  }
}

createElements();
BubbleSort();
