function changeColor() {
  document.body.style.backgroundColor = "lightblue";
}

function showName() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("result").innerHTML = "Hello " + name;
}

/* -------------------- TO DO APP -------------------- */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {

  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {

    let li = document.createElement("li");
    li.textContent = task;

    let del = document.createElement("button");
    del.textContent = "X";
    del.className = "deleteBtn";

    del.onclick = function () {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    li.appendChild(del);
    list.appendChild(li);

  });

}

function addTask() {

  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if(task === "") return;

  tasks.push(task);

  input.value = "";

  saveTasks();
  renderTasks();
}

renderTasks();
function toggleTheme(){

  document.body.classList.toggle("dark-mode");

  let theme = document.body.classList.contains("dark-mode")
  ? "dark"
  : "light";

  localStorage.setItem("theme", theme);
}

function loadTheme(){

  let savedTheme = localStorage.getItem("theme");

  if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
  }
}

loadTheme();
function sendMessage(){

let name = document.getElementById("contactName").value
let email = document.getElementById("contactEmail").value
let message = document.getElementById("contactMessage").value

if(name === "" || email === "" || message === ""){

document.getElementById("contactResult").innerText = "Please fill all fields"

}else{

document.getElementById("contactResult").innerText = "Message sent successfully!"

}

}
