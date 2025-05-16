/*Objeto usuario con propiedades, nombre, apellidos, fecha de nacimiento
y un método saludar que imprima "Hola usuario <nombre> <apellidos>"

Crear una clase Usuario a basándonos en el objeto
Crear más objetos sobre la clase Usuario
*/

/*const usuario = {
    nombre: "Juan",
    apellidos: "Pérez",         // OBJETO USUARIO
    fechaNacimiento: "1990-01-01",
    saludar() {
        return `Hola usuario ${this.nombre} ${this.apellidos}`;
    }
}
console.log(usuario.saludar()); */

// Creamos la clase Usuario
class Usuario {
    nombre = "anonimo";                  // CLASE USUARIO
    constructor(nombreParametro, apellidosParametro, fechaNacimientoParametro) {
        this.nombre = nombreParametro;
        this.apellidos = apellidosParametro;
        this.fechaNacimiento = fechaNacimientoParametro;
    }
    saludar(){
        return `Hola usuario ${this.nombre} ${this.apellidos}`;
    }
}
const usuario2 = new Usuario("Firulais", "Junior", "2020-01-01");
console.log(usuario2);
console.log(usuario2.saludar());

// Lo normal sería hacer primero la clase y después hacer el objeto
// Pero podemos crear el objeto y después la clase para ver como funciona
// Y ya una vez visto como funciona, incluimos el objeto en la clase

