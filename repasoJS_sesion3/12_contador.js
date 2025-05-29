//
let contadorMultiplicador = 0;

function multiplicarx10(contador, variable1){
    contador ++;
    variable1 = variable1 * 10;
    return [contador, variable1];
}
//[contadorMultiplicador, resultadoMultiplicar] = multiplicarx10(contadorMultiplicador, 30);
let arrayResultado = multiplicarx10(contadorMultiplicador, 30);
contadorMultiplicador = arrayResultado[0];
let resultadoMultiplicar = arrayResultado[1];
console.log(arrayResultado);


//let arrayResultado2 = multiplicarx10(contadorMultiplicador, 20);
//console.log(arrayResultado2);