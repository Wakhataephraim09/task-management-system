const addBtn = document.getElementById("addTaskBtn")

// Load saved tasks when page loads
document.addEventListener("DOMContentLoaded", loadTasks)

addBtn.addEventListener("click", function(){

const input = document.getElementById("taskInput")
const taskText = input.value

if(taskText === "") return

addTaskToPage(taskText)
saveTask(taskText)

input.value = ""

})

function addTaskToPage(taskText){

const li = document.createElement("li")
li.textContent = taskText

const deleteBtn = document.createElement("button")
deleteBtn.textContent = "Delete"

deleteBtn.onclick = function(){
li.remove()
removeTask(taskText)
}

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

}

function removeTask(task){

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

tasks = tasks.filter(function(t){
return t !== task
})

localStorage.setItem("tasks", JSON.stringify(tasks))

}
