/*
Crea un objeto gestorTareas que permita añadir tareas, 
marcar tareas como completadas, y mostrar el estado.
*/

const gestorTareas = {
    tareas: [], // array de tareas
    añadirTarea(tarea) { // esto es un método que añade una tarea
        let nuevaTarea = { // objeto tarea
            tarea: tarea, // nombre de la tarea
            completada: false // estado de la tarea
        }
        this.tareas.push(nuevaTarea); // añadir tarea al array
        return `Tarea "${tarea}" añadida.`; // mensaje de confirmación
    }
}
// función completar tarea
gestorTareas.completarTarea = function (tarea) {
    for (let i = 0; i < this.tareas.length; i++){
        if (this.tareas[i].tarea === tarea) {
            this.tareas[i].completada = true; // marcar tarea como completada
            return `La tarea "${tarea}" está hecha`; // mensaje de confirmación
        }else{
            return `La tarea "${tarea}" no está hecha`; // mensaje de error
        }
    }
}
// función mostrar tareas completadas e incompletas
gestorTareas.mostrarTareas = function () {
   console.log(`La tarea ${this.tareas.tarea} está ${this.tareas.completada ? "completada" : "incompleta"}`);

   for (let i = 0; i < this.tareas.length; i++) {
       if (this.tareas[i].completada) {
           console.log(`La tarea "${this.tareas[i].tarea}" está completada.`);
       } else {
           console.log(`La tarea "${this.tareas[i].tarea}" está incompleta.`);
       }
   }
}
// funcionamiento del código
gestorTareas.añadirTarea("Hacer la compra");
gestorTareas.añadirTarea("Limpiar la casa");
gestorTareas.añadirTarea("Hacer la comida");
gestorTareas.añadirTarea("Hacer la colada");
gestorTareas.añadirTarea("Hacer la cena");
gestorTareas.completarTarea("Hacer la comida");
gestorTareas.mostrarTareas();

// tareas completas
gestorTareas.completarTarea("Hacer la compra");
gestorTareas.completarTarea("Limpiar la casa");
gestorTareas.completarTarea("Hacer la colada");
gestorTareas.mostrarTareas();

// tareas incompletas
gestorTareas.completarTarea("Hacer la cena");
gestorTareas.completarTarea("Hacer la comida");
gestorTareas.mostrarTareas();






// diferencias entre método y función
// método: función que pertenece a un objeto
// función: bloque de código que se puede ejecutar de forma independiente

// ejemplo práctico de una función
/*function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 3)); // 5 */

// ejemplo práctico de un método
/*const objeto = {
    sumar: function(a, b) {
        return a + b;
    }
}
console.log(objeto.sumar(2, 3)); // 5 */