let tasks = window.localStorage.getItem("pendientes");
let taskList = document.getElementById("task-list");
taskList.innerHTML = tasks;

function guardarPendiente(){
    //

    let task = document.getElementById("new-task");
    let taskList = document.getElementById("task-list");
    if(task.value == ""){
        alert("No puedes guardar una tarea vacía");
        return;
    }

    let newTask = document.createElement("li");
    newTask.textContent = task.value;
    taskList.appendChild(newTask);

    task.value = ""
    alert("Pendiente guardado")

    window.localStorage.setItem("pendientes", taskList.innerHTML);
}

document.getElementById("formtodo").addEventListener("submit", function(e){
    e.preventDefault();
    guardarPendiente()
});

document.getElementById("formtodo").addEventListener("submit", function(e){
    e.preventDefault();
    guardarPendiente()
});
