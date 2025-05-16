/*
Crea una función transformarFrase que reciba dos parámetros: una frase y una función (como objeto) que transforme cada palabra.
Para ello, primero vamos a hacer un preprocesamiento común dentro de transformarFrase, que limpie la frase de espacios extra, carácteres especiales como salto de línea, tabulaciones, etc.

Después, hay que generar dos funciones que transformen las palabras:
1. La primera función debe transformar las palabras a mayúsculas.
2. La segunda función debe transformar las palabras añadiendo un símbolo < al principio y > al final.

Para esto, revisa la función split asociada a las cadenas.
*/

function transformarFrase(frase, transformador) {
     //frase = frase.replace (/\s+/g, '').trim();
    // separo la frase en palabras
    let palabras = frase.split(" ");
    for (let i = 0; i < palabras.length; i++) {  
      palabras[i] = transformador(palabras[i]) + " "; // llamo a la función transformadora
    }
    return palabras.join(" "); // vuelvo a unir las palabras
}
function añadirSimbolo(palabra){
    return `<${palabra}>`; // Se añaden los simbolos
}
function añadirSimbolo2(palabra){
    return `{${palabra}}`;
}
console.log(transformarFrase("El cielo es azul", añadirSimbolo));
console.log(transformarFrase("El cielo es azul", añadirSimbolo2));

function transformarMayusculas (palabra){
    return palabra.toUpperCase();
}
console.log(transformarFrase("El cielo es azul", transformarMayusculas));


