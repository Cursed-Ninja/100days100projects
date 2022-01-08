const inputText = document.querySelector(".input");
const ouputText = document.querySelector(".output");
const submit = document.querySelector("#calculate");

submit.addEventListener("click", () => {
  var num = inputText.value;
  if (num == "") {
    ouputText.innerText = "";
    return;
  }
  num = parseInt(num);
  if (num < 0) {
    ouputText.innerText = "Please enter a positive integer";
    return;
  }
  factorial(num);
});

inputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    var num = inputText.value;
    if (num == "") {
      ouputText.innerText = "";
      return;
    }
    num = parseInt(num);
    if (num < 0) {
      ouputText.innerText = "Please enter a positive integer";
      return;
    }
    factorial(num);
  }
});

function factorial(n) {
  let res = new Array(500);

  res[0] = 1;
  let res_size = 1;

  for (let x = 2; x <= n; x++) res_size = multiply(x, res, res_size);

  var ans = "";
  for (let i = res_size - 1; i >= 0; i--) {
    ans += res[i];
  }
  ouputText.innerText = ans;
}

function multiply(x, res, res_size) {
  let carry = 0;

  for (let i = 0; i < res_size; i++) {
    let prod = res[i] * x + carry;

    res[i] = prod % 10;

    carry = Math.floor(prod / 10);
  }

  while (carry) {
    res[res_size] = carry % 10;
    carry = Math.floor(carry / 10);
    res_size++;
  }
  return res_size;
}
