fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data => saveDataIntoTable(data))


/*
const xhr = new XMLHttpRequest();
function onRequestHandler(){
    if (this.readyState==4 && this.status==200) {
        const data = JSON.parse(this.response);
        saveDataIntoTable(data);
    }
}
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET","https://jsonplaceholder.typicode.com/comments");
xhr.send();

*/

function saveDataIntoTable(data){
    let mytabla = document.getElementById('mytabla');
    let flag = false;
    for(let r of data){
        /*let row = mytabla.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = r.name;
        cell2.innerHTML = r.email;*/

        let fila = document.createElement('tr');
        let celda1 = document.createElement('td');
        celda1.textContent = r.id;
        fila.appendChild(celda1);
        let celda2 = document.createElement('td');
        celda2.textContent = r.name;
        fila.appendChild(celda2);
        let celda3 = document.createElement('td');
        celda3.textContent = r.email;
        fila.appendChild(celda3);
        mytabla.appendChild(fila);
        
        /*let color = flag ? 'lightblue' : 'lightgreen';
        flag = !flag;

        let html = `<tr class=${color}>
                        <td>${r.id}</td>
                        <td>${r.name}</td>
                        <td>${r.email}</td>
                        <td>${r.body}</td>
                    </tr>`;
        mytabla.innerHTML += html;*/




        
    }
}