/*
En este ejercicio vamos a reutilizar funciones.
Hay que crear tres objetos semaforo que tenga un estado (rojo, amarillo, verde), una ubicación que será un string con la calle y
 dos métodos, cambiar(), que alterne el estado en orden, y mostrar(), que muestre el estado actual del semáforo y la ubicación.

Los semáforos comienzan en rojo.
Los métodos deben declararse fuera del objeto y se le pasará el objeto como parámetro. Para reutilizar el código.
El método cambiar debe pasar de rojo a verde, de verde a amarillo y de amarillo a rojo.
El método mostrar() debe mostrar el estado actual del semáforo.
Realiza una serie de llamadas a los métodos para probar su funcionamiento.
*/
const semaforo = {
    estado: 'amarillo',
    ubicacion: 'Avnda Antonio Huertas',
    cambiar: function (){
        if (this.estado === 'rojo'){
            this.estado = 'verde';
        }
        else if (this.estado === 'verde'){
            this.estado = 'amarillo';
        }
        else if (this.estado === 'amarillo'){
            this.estado = 'rojo';
        }
    },
    mostrar: function (){
        console.log(`El semáforo de ${this.ubicacion} está en ${this.estado}`);
    }
}
// Pruebas
semaforo.mostrar();
semaforo.cambiar();
semaforo.mostrar();
semaforo.cambiar();
semaforo.mostrar();