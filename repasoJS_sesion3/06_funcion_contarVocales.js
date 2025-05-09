/*
Crea una función que cuente cuántas vocales hay en una palabra.
*/
function contarVocales (palabra) {
    // Iniciamos el contador de vocales
    let contador = 0;
    // Se definen las vocales
    const vocales = "aeiouAEIOU";
    // Aquí recorremos cada letra de la palabra
    for (let i = 0; i < palabra.length; i++) {
        // Esto comprueba si la letra actual es una vocal
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }
    // Devolvemos el contador de vocales
    return contador;
}

// Pruebas
console.log(contarVocales("Hola"));
console.log(contarVocales("Programación"));
console.log(contarVocales("Desafiante"));
console.log(contarVocales("Funciones para contar vocales"));