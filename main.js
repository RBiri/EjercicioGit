let nombre = "Ruben";
let mensaje = "Bienvenid@ a Tau, la casa del Terror"

/**
 * Funcion mensaje de Bienvenid@
 * Esta funcion recibe dos parametros y añade un elemento h1
 * con un texto formado por los parametros proporcionados
 * @author Biri
 * @version 3
 * @since 31/10/2023
 * @param {String} nombre 
 * @param {String} txt 
 */
function mensajeBienvenida(nombre, txt){
    let titulo = document.createElement("h1");
    titulo.innerText= mensaje+", "+nombre;
    document.body.appendChild(titulo);
}

mensajeBienvenida(nombre,mensaje);