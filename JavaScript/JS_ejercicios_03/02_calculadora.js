// Ejercicio 2: Calculadora.

// Cuando presiono un botón numérico, se tiene que escribir en el 
// HTML a través del DOM y tenemos que escribir el dígito presionado

// Hay que tener en cuenta que los dígitos del
//  1 al 9 funcionan diferente al 0.

// addEventListener botón c
// Limpiar el input 

// AddEventListener botón operación 
// Vamos a almacenar una variable el número escrito hasta ese momento y la operación a realizar

// AddEventListener  botón resultado =
// LLamamos a la función que realiza la operación y 
// mostramos el resultado en el input

// AddEventListener escribir número 
// Vamos a crear una función que escriba el número en el input.

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("resultado");
    const botonesNumeros = document.querySelectorAll(".numero");
    const botonLimpiar = document.getElementById("limpiar");
    const botonesOperaciones = document.querySelectorAll("operaciones");
    const botonResultado = document.getElementById("resultado-boton");

    let numeroActual = ""; // Variable para almacenar el número actual
    let operacion = null; // para saber que operación se va a hacer  
    let resultado = 0;

    // función para el número
    function escribirNumero(numero) {
        // si numeroActual está vacio o cero, se reemplaza por el número presionado
        if (numeroActual === "" || numeroActual === "0") {
            numeroActual = numero.toString();
        }
        // si no, se concatena
        else {
            numeroActual += numero.toString();
        }
        // Actualizar el input con el número actual
        input.value = numeroActual;
    }
    // función seleccionar operación
    function seleccionarOperacion(operacionSeleccionada) {
        // si ya hay una operación, se calcula el resultado
        if (operacion) {
            calcularResultado();
        }
        // Guardar la operación seleccionada
        operacion = operacionSeleccionada;
        // Guardar el número actual en el resultado
        numeroAnterior = parseFloat(numeroActual);
        // Limpiar el número actual
        numeroActual = "";
        // Actualizar el input con el resultado
        input.value = resultado;
    }
    // función para calcular el resultado
    function calcularResultado() {
        if (numeroActual === "") return; // si no hay número, no hace nada
        const numero = parseFloat(numeroActual);
        switch (operacion) {
            case "+":
                resultado += numero;
                break;
            case "-":
                resultado -= numero;
                break;
            case "*":
                resultado *= numero;
                break;
            case "÷":
                if (numero !== 0) {
                    resultado /= numero;
                } else {
                    alert("No se puede dividir por cero");
                }
                break;
            default:
                resultado = numero; // si no hay operación, se guarda el número    
        }
        // Actualizar el input con el resultado
        input.value = resultado;
        // Limpiar el número actual y la operación
        numeroActual = "";
        operacion = null;
    }
    // función limpiar
    function limpiar() { // debería dejar todo en el estado inicial
        numeroActual = "";
        operacion = null;
        resultado = 0;
        input.value = "";
    }
    // eventos para botones
    botonesNumeros.forEach(boton => {
        boton.addEventListener("click", () => {
            escribirNumero(boton.textContent);
        });
    })
    botonLimpiar.addEventListener("click", limpiar);
    botonesOperaciones.forEach(boton => {
        boton.addEventListener("click", () => {
            seleccionarOperacion(boton.textContent);
        });
    });
    botonResultado.addEventListener("click", calcularResultado);
});
