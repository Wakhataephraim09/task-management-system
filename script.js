const addBtn = document.getElementById("addTaskBtn")

addBtn.addEventListener("click", function(){

const input = document.getElementById("taskInput")

const taskText = input.value

if(taskText === "") return

const li = document.createElement("li")

li.textContent = taskText

const deleteBtn = document.createElement("button")

deleteBtn.textContent = "Delete"

deleteBtn.onclick = function(){
li.remove()
}

li.appendChild(deleteBtn)

document.getElementById("taskList").appendChild(li)

input.value = ""

})
