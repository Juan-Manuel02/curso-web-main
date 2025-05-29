/*
Crea una función que reciba un número y 
devuelva un array con la longitud del número de la secuencia de Fibonacci .
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
*/
const fibonacci = (num) => {
    if (num < 0) return [];
    if (num === 1) return [0];
    let fib = [0,1,];
    for (let i = 2; i <= num; i++) {
       fib.push(fib[i - 1] + fib[i - 2]);
       // 1º iteración del bucle porque i empieza en 2 => fib.push [2 - 2] + fib [2 - 1]
       // 1º iteración del bucle hace un push de 0 + 1; dejando a fib como [0, 1, 1]
       
       // 2º iteracion del bucle, i es igual a 3 => fib[3 - 2] + fib[3 - 1]
       // 2º iteracion del bucle hace un push de 1 + 1; dejando a fib como [0, 1, 1, 2]

       // 3º iteracion del bucle, i es igual a 4 => fib[4 - 2] + fib[4 - 1]
       // 3º iteracion del bucle hace un push de 1 + 2; dejando a fib como [0, 1, 1, 2, 3]

    /* fib[num] === fib[num - 2] + fib[num - 1];
       for (let i = 0; i < numero; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib; */
    }
    
console.log(fibonacci(3)); // [0, 1, 1,2]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
}


