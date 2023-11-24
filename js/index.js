window.addEventListener("load", init)

function init() {
    alert("Iniciando cambio"); 
    addP();
    var padre = document.getElementById("contenedor");
    borrarElemento(padre);
    reemplazarP(padre);
    addFecha();
}

function borrarElemento(elementoPadre) {
    var enlace = document.getElementById("enlace")
    elementoPadre.removeChild(enlace);
}

function addP() {
    var nuevoP = document.createElement("p");
    var contenido = document.createTextNode("Contenido Parrafo");
    nuevoP.appendChild(contenido);
    document.body.appendChild(nuevoP);
}

function reemplazarP(padre) {
    var modifP = document.createElement("p");
    var contenidoNuevo = document.createTextNode("Esto ha sido modificado");
    modifP.appendChild(contenidoNuevo);
    var pViejo = document.getElementById("parr1");
    padre.replaceChild(modifP, pViejo);
}


function addFecha() {

    var fecha = new Date();
    var div = document.getElementById("contenedor");
    var padre = div.parentNode;
    var nuevoP = document.createElement("p");
    var contenido = document.createTextNode(fecha.getDate());
    nuevoP.appendChild(contenido);
    padre.insertBefore(nuevoP, div);
}

