/*
Crea una función que reciba una frase y devuelva la palabra más larga que contenga.
*/
function palabraMasLarga(frase) {
    // Dividimos la frase en palabras
    const palabras = frase.split(' ');
    // Inicializamos la variable para almacenar la palabra más larga
    let palabraLarga = '';
    // Recorremos
    for (let i = 0; i < palabras.lengh; i++) {
        // Comparamos la longitud de cada palabra con la longitud de la palabra más larga
        if (palabras[i].length > palabraLarga.length) {
            // Si es más larga, la actualizamos
            palabraLarga = palabras[i];
        }
    }
    // Devolvemos la palabra más larga
    return palabraLarga;
}

// Pruebas
console.log (palabraMasLarga("La programación es divertida y desafiante"));
