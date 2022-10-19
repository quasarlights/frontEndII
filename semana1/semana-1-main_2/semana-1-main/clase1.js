/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {

    // suludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    // guardamos en una variable en nombre ingresado
    const nombre = prompt("Ingese su nombre por favor:")
    
    if(isNaN(nombre) && nombre !== "" && nombre !== null && nombre.length > 3) {
        alert("Gracias por jugar " + nombre.toUpperCase() + ". ¡Mucha suerte!");
        return nombre.toUpperCase()
    }
    else {
        alert("La entrada no es valida");

    }


    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre);
    console.log("----------------------------");


}

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
const nombreJugador = iniciarJuego();
console.log(nombreJugador)
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.

































    // if(isNaN(nombre) && nombre !== "" && nombre !== null && nombre.length > 3 ){
    //         alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
    //         return nombre.toUpperCase();
    // }
    // else {
    //     alert("Este nombre no es valido")
    // }
    
    // switch (nombre) {
    //     case '':
    //         alert("No escribio el nombre")
    //         break;
    //     case null:
    //         alert("El nombre no puede quedar vacio")
    //         break;
    //     default:
    //             if(isNaN(nombre) && nombre.length > 3 ){
    //             alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
    //             return nombre.toUpperCase();
    //             }
    //             else {
    //                 alert("Vuelva a intentar");
    //             }
    //         break;
    // }