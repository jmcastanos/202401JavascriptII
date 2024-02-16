var vinos = [];

function getBlancos(){

     //TODO: Desactivar o remover class activo al resto de botones

    let boton = document.querySelector("#vinosblancos");
    boton.classList.add("activo");

    
    fetch("/07/api/blancos.json")
    .then(r => r.json())
    .then(d => {
        vinos = d;
        cambiarVinoActual(d[0]) 
        }
    )
}
function getRosados(){
    let boton = document.querySelector("#vinosrosados");
    boton.classList.add("activo");
}
function getRojos(){
    let boton = document.querySelector("#vinosrojo");
    boton.classList.add("activo");
}


function cambiarVinoActual(vino){
    let titulo = document.querySelector("#vinoactual h1");
    titulo.textContent = vino.nombre;

    let descr = document.querySelector("#vinoactual p");
    descr.textContent = vino.descripcion;

    //TODO: Agregar el EL UL

}

//TODO implementar los botones de mover vino actual (siguente, anterior )
function moverVinoActual(direccion){
    
}

getBlancos();

document.querySelector("#vinosblancos").addEventListener("click", getBlancos);
document.querySelector("#vinosrojo").addEventListener("click", getRojos);
document.querySelector("#vinosrosados").addEventListener("click", getRosados);
