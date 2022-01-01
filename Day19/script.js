const date = new Date();

function renderCalender() {
  console.log("here");
  date.setDate(1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthDays = document.querySelector(".days");
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const firstDayIndex = date.getDay();
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
  const lastDayIndex = lastDay.getDay();
  const nextDays = 7 - lastDayIndex - 1;

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay.getDate() - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  monthDays.innerHTML = days;
}

document.querySelector("#prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
});

document.querySelector("#next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
});

renderCalender();
