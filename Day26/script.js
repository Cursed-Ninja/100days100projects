const decrypt = document.getElementById("Decrypt");
const encrypt = document.getElementById("Encrypt");
const textBox = document.getElementById("input");
const value = 12;
const lower_chars = [
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

const upper_chars = [
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
// console.log(textBox);

decrypt.addEventListener("click", decryption);
encrypt.addEventListener("click", encryption);

function decryption() {
  let string = textBox.value;
  let ans = "";
  string = reverse(string);
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (lower_chars.indexOf(character) != -1) {
      let temp = lower_chars.indexOf(character) - 12;
      if (temp < 0) temp += 26;
      ans += lower_chars[temp];
    } else if (upper_chars.indexOf(character) != -1) {
      let temp = upper_chars.indexOf(character) - 12;
      if (temp < 0) temp += 26;
      ans += upper_chars[temp];
    } else {
      ans += character;
    }
  }
  textBox.value = ans;
}

function encryption() {
  let string = textBox.value;
  let ans = "";
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (lower_chars.indexOf(character) != -1) {
      let temp = lower_chars.indexOf(character) + 12;
      temp %= 26;
      ans += lower_chars[temp];
    } else if (upper_chars.indexOf(character) != -1) {
      let temp = upper_chars.indexOf(character) + 12;
      temp %= 26;
      ans += upper_chars[temp];
    } else {
      ans += character;
    }
  }
  ans = reverse(ans);
  textBox.value = ans;
}

function reverse(s) {
  return s.split("").reverse().join("");
}
