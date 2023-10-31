let nombre = "Ruben";
let mensaje = "Bienvenid@ a Tau, la casa del Terror"


function mensajeBienvenida(nombre, txt){
    let titulo = document.createElement("h1");
    titulo.innerText= mensaje+", "+nombre;
    document.body.appendChild(titulo);
}

mensajeBienvenida(nombre,mensaje);