const inputBill = document.querySelector("#bill");
const inputPerson = document.querySelector("#person");
const btnArray = document.querySelectorAll(".btn-grp button");
const outputTip = document.querySelector("#tip-amount");
const outputTotal = document.querySelector("#total-amount");
const resetBtn = document.querySelector("#reset");

btnArray.forEach((ele) => {
  ele.addEventListener("click", () => {
    calculate(ele.value);
  });
});

resetBtn.addEventListener("click", resetAll);

function calculate(tip) {
  let bill = parseFloat(inputBill.value);
  let people = parseInt(inputPerson.value);
  if (people == 0) {
    alert("Please enter number of people");
    return;
  }
  let tipamt = (bill * tip) / 100;
  console.log(bill);
  console.log(tipamt);
  let totalamt = (bill + tipamt) / people;
  console.log(totalamt);
  tipamt /= people;

  outputTip.innerText = tipamt.toFixed(2);
  outputTotal.innerText = totalamt.toFixed(2);
}

function resetAll() {
  inputBill.value = "";
  inputPerson.value = "";
  outputTip.innerText = "00.00";
  outputTotal.innerText = "00.00";
}
