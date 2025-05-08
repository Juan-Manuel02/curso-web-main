/*
Crea un objeto mascota con propiedades nombre, energia, y métodos jugar(minutos) y dormir(horas). 
Jugar baja la energía el doble de los minutos jugados y dormir la sube por 10 de las horas dormidas.
El límite máximo de energía es 100 y el mínimo 0.
Si la energía es 0 no se puede jugar y si es 100 no se puede dormir.
Por último, crea un método estado() que muestre el estado de la mascota (nombre y energía).
Realiza una serie de llamadas a los métodos para probar su funcionamiento.
*/
const MAX_ENERGIA = 100;

const mascota = {
    nombre: 'Perro',
    energia: 100,
    jugar: function(minutos){
        if (this.energia <= 0){
            console.log(`${this.nombre} no puede jugar porque está cansado.`);
        }else{
            this.energia -= minutos * 2;
            if (this.energia < 0){
                this.energia = 0;
            }
            console.log(`${this.nombre} ha jugado ${minutos} minutos.`);
        }
    },
    dormir: function(horas){
        if (this.energia >= MAX_ENERGIA){
            console.log(`${this.nombre} no puede dormir porque está descansado.`);
        }else{
            this.energia += horas * 10;
            if (this.energia > MAX_ENERGIA){
                this.energia = MAX_ENERGIA;
            }
            console.log(`${this.nombre} ha dormido ${horas} horas.`);
        }
    },
    estado: function(){
        console.log(`El estado de ${this.nombre} es: ${this.energia}`);
    }
}
// pruebas para ver si es correcto el ejercicio
mascota.estado();
mascota.jugar(20);
mascota.estado();
mascota.dormir(5);
mascota.estado();