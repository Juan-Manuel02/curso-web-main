/*
Crea un objeto auto con propiedades modelo, combustible, y métodos conducir(kilometros) y repostar(litros). 
Conducir baja el combustible en 0.2 litros por kilómetro recorrido, y repostar lo sube según los litros ingresados.
El combustible tiene un mínimo de 0 y un máximo de 50 litros.
Si el combustible es 0 no se puede conducir y si es 50 no se puede repostar.
Por último, crea un método estado() que muestre el modelo del auto y su nivel de combustible.
Realiza una serie de llamadas a los métodos para probar su funcionamiento.
*/

 /*const MAX_COMBUSTIBLE = 50;

const auto = {
  modelo: "Toyota Corolla",
  combustible: 50,
  conducir(km) {

    if (typeof km !== 'number') {
      console.log("Error: km debe ser un número.");
    }
    else {
      if (km > 0) {
        const consumo = km * 0.2;
        if (km === 0) {
          console.log(`${this.modelo} no se mueve.`);
          return;
        }
        if (this.combustible === 0) {
          console.log(`${this.modelo} no puede conducir: sin combustible.`);
          return;
        }
        this.combustible -= consumo;

        if (this.combustible < 0) this.combustible = 0;
        
        console.log(`${this.modelo} condujo ${km} km.`);
      }
      else {
        console.log("Error: km no puede ser negativo.");
      }
    }
  },
  repostar(litros) {
    this.combustible += litros;

    if (this.combustible === MAX_COMBUSTIBLE) {
      console.log(`${this.modelo} ya tiene el tanque lleno.`);
      return;
    }
    else {
      if (typeof litros !== 'number') {
        console.log("Error: litros debe ser un número.");
        return;
      }
    }
    
    if (this.combustible > 50) this.combustible = 50;
    console.log(`${this.modelo} repostó ${litros} litros.`);
  },
  estado() {
    console.log(`${this.modelo} tiene ${this.combustible.toFixed(1)} litros de combustible`);
  }
};

// Ejemplo de uso:
auto.conducir(100);   // consume 20 litros
auto.estado();        // debería mostrar 30 litros
auto.conducir(200);   // consume lo que queda
auto.estado();        // 0 litros
auto.repostar(30);
auto.estado();        // 30 litros
auto.repostar(25);    // se llena hasta 50, no más
auto.estado();        // 50 litros */

// Otra forma de hacer este ejercicio
const validarNumero = valor => typeof valor === 'number';
const validarPositivo = valor => valor > 0;
const calcularConsumo = km => km * 0.2;

const MAX_COMBUSTIBLE = 50;

const coche = {
  modelo: "Toyota Carolla",
  combustible: 50,

  conducir (km){
    if (!validarNumero (km)) {
      console.log("Error: los km tienen que ser un número.");
      return;
    }
    if (!validarPositivo (km)) {
      console.log("Error: los km no pueden ser negativos.");
      return;
    }
    if (this.combustible === 0) {
      console.log(`${this.modelo} no puede conducir: sin combustible.`);
      return;
    }
    const consumo = calcularConsumo(km);
    if (this.combustible === 0) {
      console.log(`${this.modelo} no puede conducir ${km}: sin combustible.`);
      return;
    }
    this.combustible -= consumo;
    console.log(`${this.modelo} condujo ${km} km. Combustible restante: ${this.combustible.toFixed(1)} litros.`);
  },

  repostar (litros) {
    if (!validarNumero (litros)) {
      console.log("Error: los litros tienen que ser un número.");
      return;
    }
    if (litros <= 0) {
      console.log("Error: Los litros deben ser mayores que 0.");
      return;
    }
    if (this.combustible === 50) {
      console.log(`${this.modelo} ya tiene el tanque lleno.`);
      return;
    }
    const combustibleAntes = this.combustible
    this.combustible += litros;

    if (this.combustible > 50) {
      this.combustible = 50;
    }
    const repostado = this.combustible - combustibleAntes;
    console.log(`${this.modelo} repostó ${repostado.toFixed(1)} litros. Combustible total: ${this.combustible.toFixed(1)} litros.`);
  },

  estado () {
    console.log(`${this.modelo} tiene ${this.combustible.toFixed(1)} litros de combustible`);
  }
}

// Prueba final
coche.conducir(100);
coche.estado();
coche.conducir(200);
coche.estado();
coche.repostar(30);
coche.estado();
coche.repostar(25);
coche.estado();