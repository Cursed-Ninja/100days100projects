var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "@"];

function generatepassword() {
  var select = document.getElementById("password_length");
  var value = select.options[select.selectedIndex].value;
  var lowercase_state = document.getElementById("lowercase").checked;
  var uppercase_state = document.getElementById("uppercase").checked;
  var symbols_state = document.getElementById("symbols").checked;
  var numbers_state = document.getElementById("numbers").checked;
  var count = 0;
  if (lowercase_state == true) {
    count += 1;
  }
  if (uppercase_state == true) {
    count += 1;
  }
  if (symbols_state == true) {
    count += 1;
  }
  if (numbers_state == true) {
    count += 1;
  }

  var password = "";
  if (count == 0) {
    document.getElementById("password").innerText = password;
    return;
  }
  var password_list = [];
  if (lowercase_state) {
    for (let i = 0; i < value / count; i++) {
      var randomidx = Math.floor(Math.random() * 26);
      password_list.push(lowercase[randomidx]);
    }
    value -= value / count;
    count--;
  }
  if (uppercase_state) {
    for (let i = 0; i < value / count; i++) {
      var randomidx = Math.floor(Math.random() * 26);
      password_list.push(uppercase[randomidx]);
    }
    value -= value / count;
    count--;
  }
  if (symbols_state) {
    for (let i = 0; i < value / count; i++) {
      var randomidx = Math.floor(Math.random() * 10);
      password_list.push(symbols[randomidx]);
    }
    value -= value / count;
    count--;
  }
  if (numbers_state) {
    for (let i = 0; i < value / count; i++) {
      var randomidx = Math.floor(Math.random() * 10);
      password_list.push(numbers[randomidx]);
    }
    value -= value / count;
    count--;
  }

  password_list = randomiseString(password_list);
  for (let i = 0; i < password_list.length; i++) {
    password += password_list[i];
  }
  document.getElementById("password").innerText = password;
}

function randomiseString(array) {
  let currentIndex = array.length,
    randomIndex;

  for (var i; i < currentIndex; i++) {
    console.log(password[i]);
  }

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function copy() {
  console.log("here");
  var copyText = document.getElementById("password");
  navigator.clipboard.writeText(copyText.innerText);
  alert("Copied the text: " + copyText.innerText);
}
