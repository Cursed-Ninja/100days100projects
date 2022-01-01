const inputBox = document.querySelector(".input-field input");
const addBtn = document.querySelector(".input-field button");
const todolist = document.querySelector(".todolist");
const deleteAll = document.querySelector(".foot button");

console.log(inputBox);
console.log(addBtn);

inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};
showTask();
addBtn.onclick = () => {
  let userData = inputBox.value;
  let getLocalStorage = localStorage.getItem("New todo");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  listArr.push(userData);
  localStorage.setItem("New todo", JSON.stringify(listArr));
  showTask();
};

function showTask() {
  let getLocalStorage = localStorage.getItem("New todo");

  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  const pendingNumb = document.querySelector(".pendingNumber");
  if (listArr.length == 1)
    pendingNumb.textContent = `You have ${listArr.length} pending task`;
  else pendingNumb.textContent = `You have ${listArr.length} pending tasks`;
  if(listArr.length > 0){
      deleteAll.classList.add("active");
  }
  else{
    deleteAll.classList.remove("active");
  }
  let newlitag = "";
  listArr.forEach((element, index) => {
    newlitag += `<li> ${element} <span onclick = "deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  console.log(newlitag);
  todolist.innerHTML = newlitag;
  inputBox.value = "";
}

function deleteTask(index) {
  let getLocalStorage = localStorage.getItem("New todo");
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1);
  localStorage.setItem("New todo", JSON.stringify(listArr));
  showTask();
}

deleteAll.onclick = () => {
  listArr = [];
  localStorage.setItem("New todo", JSON.stringify(listArr));
  showTask();
};
