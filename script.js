const addBtn = document.getElementById("addTaskBtn")

// Load saved tasks when page loads
document.addEventListener("DOMContentLoaded", loadTasks)

addBtn.addEventListener("click", function(){

const input = document.getElementById("taskInput")
const taskText = input.value

if(taskText === "") return

addTaskToPage(taskText)
saveTask(taskText)
updateTaskStats()

input.value = ""

})

function addTaskToPage(taskText){

const li = document.createElement("li")

const checkbox = document.createElement("input")
checkbox.type = "checkbox"

const span = document.createElement("span")
span.textContent = taskText

checkbox.onchange = function(){

if(checkbox.checked){
span.classList.add("completed")
}else{
span.classList.remove("completed")
}

updateTaskStats()

}

const deleteBtn = document.createElement("button")
deleteBtn.textContent = "Delete"

deleteBtn.onclick = function(){
li.remove()
removeTask(taskText)
updateTaskStats()
}

li.appendChild(checkbox)
li.appendChild(span)
li.appendChild(deleteBtn)

document.getElementById("taskList").appendChild(li)

}

function saveTask(task){

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

tasks.push(task)

localStorage.setItem("tasks", JSON.stringify(tasks))

}

function loadTasks(){

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

tasks.forEach(function(task){
addTaskToPage(task)
})

updateTaskStats()

}

function removeTask(task){

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

tasks = tasks.filter(function(t){
return t !== task
})

localStorage.setItem("tasks", JSON.stringify(tasks))

}

function updateTaskStats(){

const tasks = document.querySelectorAll("#taskList li")
const completed = document.querySelectorAll(".completed")

document.getElementById("totalTasks").textContent = tasks.length
document.getElementById("completedTasks").textContent = completed.length

}
