function upperCase() {
  var text = document.querySelector("textarea").value;
  text = text.toUpperCase();
  document.querySelector("textarea").value = text;
}

function lowerCase() {
  var text = document.querySelector("textarea").value;
  text = text.toLowerCase();
  document.querySelector("textarea").value = text;
}

function sentenceCase() {
  var text = document.querySelector("textarea").value;
  text = text.toLowerCase();
  text = text[0].toUpperCase() + text.substring(1);
  console.log(text);
  var prev_end = false;
  for (var i = 1; i < text.length; i++) {
    if (text[i] == "." || text[i] == "?" || text[i] == "!") {
      prev_end = true;
    } else {
      if (
        prev_end &&
        ((text[i] >= "a" && text[i] <= "z") ||
          (text[i] >= "A" && text[i] <= "Z"))
      ) {
        text =
          text.substring(0, i) + text[i].toUpperCase() + text.substring(i + 1);
        prev_end = false;
      }
    }
  }
  document.querySelector("textarea").value = text;
}

function removeSpaces() {
  var text = document.querySelector("textarea").value;
  text = text.replace(/\s+/g, " ").trim();
  document.querySelector("textarea").value = text;
}
