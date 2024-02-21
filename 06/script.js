/*let tasks = window.localStorage.getItem("pendientes");
let taskList = document.getElementById("task-list");
taskList.innerHTML = tasks;*/

function guardarPendiente(form){
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

    $url_api = "https://hook.us1.make.com/064x6mn0lxyfjeidnx7pbe7skaxfqdwa";
    const formData = new FormData(form);

    fetch($url_api, {
        method: "POST",
        body: formData
    })

    task.value = ""
    alert("Pendiente guardado")



    //window.localStorage.setItem("pendientes", taskList.innerHTML);
    //window.localStorage.removeItem
}

document.getElementById("formtodo").addEventListener("submit", function(e){
    e.preventDefault();
    guardarPendiente(this)
});


let li = document.querySelectorAll("#task-list li");
for(let i = 0; i < li.length; i++){
    li[i].addEventListener("click", function(){
        //this.classList.toggle("done");
        this.style.display = "none";
    });
}



function obtenerListadoDeCompras(){

    fetch("https://hook.us1.make.com/bb2hwga0b9iasajvqzt2kzwawrjwj037")
    .then(response => response.json())
    .then(data => { 
        /*let listado = document.getElementById("listado");
        listado.innerHTML = "";
        for(let i = 0; i < data.length; i++){
            let li = document.createElement("li");
            li.textContent = data[i].item;
            listado.appendChild(li);
        }*/
        console.log(data);
    });
}