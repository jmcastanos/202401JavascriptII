function guardarPendiente(){
    //

    let task = document.getElementById("new-task")
    if(task.value == ""){
        alert("No puedes guardar una tarea vacía")
        return
    }

    task.value = ""

    

    alert("Pendiente guardado")


}

document.getElementById("formtodo").addEventListener("submit", function(e){
    e.preventDefault();
    guardarPendiente()
});