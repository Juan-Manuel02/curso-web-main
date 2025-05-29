/*
Crea un objeto carrito que tenga un array de productos (obj: nombre y precio), 
array de precios y métodos para agregarProducto(nombre, precio),
 calcularTotal() y mostrarProductos().
*/

/*const carrito = {
    productos: [],
    agregarProducto(nombre, precio) {
        let producto = {
            nombre: nombre,
            precio: precio
        }
        this.productos.push(producto);
        return `Producto ${nombre} agregado al carrito.`;
    }
}
calcularTotal(){
    let total = 0;
    let productos = this.productos;
    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio;
    }
    return total;
}


carrito.agregarProducto("Cerveza", 3); 
carrito.agregarProducto("Coca-Cola", 2.50);
console.log(carrito.productos);

const precios = {
    precios: [],
    añadirPrecio(precio){
        let precioProducto = {
            precio: precio
        }
        this.precios.push(precioProducto);
    }
}
precios.añadirPrecio(3);
precios.añadirPrecio(2.50);
console.log(precios.precios);*/

const carrito = {
    productos: [],
    precios: [],
    agregarProducto(nombre,precio){
        let producto = {
            nombre: nombre,
            precio: precio
        }
        this.productos.push(producto);
        this.precios.push(precio);
        return `Producto ${nombre} agregado al carrito.`;
    }
}
const calcularTotal = () => {
    let total = 0;
    let precios = carrito.precios;
    for (let i = 0; i < precios.length; i++) {
        total += precios[i];
    }
    return total;
}
carrito.agregarProducto("Cerveza", 3);
carrito.agregarProducto("Coca-Cola", 2.50);
carrito.agregarProducto("Agua", 1);
carrito.agregarProducto("Pepsi", 2.50);
carrito.agregarProducto("Lays", 2.60);
console.log(carrito.productos);
console.log(carrito.precios);
console.log(calcularTotal());

