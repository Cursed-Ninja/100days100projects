const dropList = document.querySelectorAll(".drop-list select");
const fromUnit = document.querySelector(".from select");
const toUnit = document.querySelector(".to select");
const getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
  // console.log(length_list);
  for (idx in length_list) {
    let selected;
    let unit_code = length_list[idx];
    if (i == 0) {
      selected = unit_code == "meters" ? "selected" : "";
    } else if (i == 1) {
      selected = unit_code == "feet" ? "selected" : "";
    }
    let optionTag = `<option value="${unit_code}" ${selected}>${unit_code}</option>`;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
}

window.addEventListener("load", (e) => {
  getExchangeRate();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

const exchangeIcon = document.querySelector(".drop-list .icon");
exchangeIcon.addEventListener("click", () => {
  let tempCode = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = tempCode;
  getExchangeRate();
});

function getExchangeRate() {
  const val = document.querySelector(".amount input");
  let Val = val.value;
  if (Val == "" || Val == "0") {
    val.value = "1";
    Val = 1;
  }
  const exchangeRateTxt = document.querySelector(".exchange-rate");

  let from = length_values[fromUnit.value];
  let to = length_values[toUnit.value];
  let exchangeRate = to / from;
  console.log(exchangeRate);
  let totalExchangeRate = (val.value * exchangeRate).toFixed(4);
  console.log(val);
  exchangeRateTxt.innerText = `${val.value} ${fromUnit.value} = ${totalExchangeRate} ${toUnit.value}`;
}
