/*
Ejercicio 4: Calculadora
Crea funciones separadas para sumar, restar, multiplicar y dividir dos números. 
Luego crea una función calculadora(operacion, a, b) que use las funciones anteriores según el tipo de operación.
Operación será un string con el símbolo de la operación: "+", "-", "*", "/".
En la division, si el segundo número es 0, la función debe devolver "Error: División por cero".
Realiza una serie de llamadas a la función calculadora para probar su funcionamiento.
*/

// Funciones para operaciones matemáticas
function sumar (a, b) {
    return a + b;
}
function restar (a, b) {
    return a - b;
}
function multiplicar (a, b) {
    return a * b;
}
function dividiir (a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

// Función calculadora
function calculadora (operacion, a, b) {
    switch (operacion) {
        case "+":
            return sumar(a, b);
        case "-":
            return restar(a, b);
        case "*":
            return multiplicar(a, b);
        case "/":
            return dividiir(a, b);
        default:
            return "Operación no válida";
    }
}

// Pruebas
console.log(calculadora("+", 5, 3)); 
console.log(calculadora("-", 5, 3)); 
console.log(calculadora("*", 5, 3));
console.log(calculadora("/", 5, 3));
console.log(calculadora("/", 5, 0));

