// ejercicio donde, utilizando el DOM, se crea una tabla con los productos de un carrito

// Ejemplo de productos en el carrito
const carrito = [
  { nombre: "Manzana", precio: 1.5, cantidad: 3 },
  { nombre: "Pan", precio: 2, cantidad: 2 },
  { nombre: "Leche", precio: 1.2, cantidad: 1 }
];

function mostrarCarrito() {
  const cuerpoTabla = document.getElementById("cuerpo-tabla");
  cuerpoTabla.innerHTML = ""; // Limpiar tabla
  let totalGeneral = 0;

  carrito.forEach(producto => {
    const fila = document.createElement("tr");

    // Nombre
    const tdNombre = document.createElement("td");
    tdNombre.textContent = producto.nombre;
    fila.appendChild(tdNombre);

    // Precio
    const tdPrecio = document.createElement("td");
    tdPrecio.textContent = `$${producto.precio}`;
    fila.appendChild(tdPrecio);

    // Cantidad
    const tdCantidad = document.createElement("td");
    tdCantidad.textContent = producto.cantidad;
    fila.appendChild(tdCantidad);

    // Total por producto
    const totalProducto = producto.precio * producto.cantidad;
    totalGeneral += totalProducto;
    const tdTotal = document.createElement("td");
    tdTotal.textContent = `$${totalProducto.toFixed(2)}`;
    fila.appendChild(tdTotal);

    cuerpoTabla.appendChild(fila);
  });

  // Mostrar total general
  document.getElementById("total-general").textContent = `$${totalGeneral.toFixed(2)}`;
  document.getElementById("total").textContent = totalGeneral.toFixed(2);
}

// Ejecutar al cargar la página
mostrarCarrito();
// Evento para mostrar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", mostrarCarrito);
// Evento para actualizar el carrito al hacer clic en un botón
document.getElementById("actualizar-carrito").addEventListener("click", mostrarCarrito);
// Evento para limpiar el carrito al hacer clic en un botón
document.getElementById("limpiar-carrito").addEventListener("click", () => {
  carrito.length = 0; // Vaciar el carrito
  mostrarCarrito(); // Actualizar la vista
});
// Evento para agregar un producto al carrito (ejemplo)
document.getElementById("agregar-producto").addEventListener("click", () => {
  const nombre = prompt("Ingrese el nombre del producto:");
  const precio = parseFloat(prompt("Ingrese el precio del producto:"));
  const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

  if (nombre && !isNaN(precio) && !isNaN(cantidad)) {
    carrito.push({ nombre, precio, cantidad });
    mostrarCarrito();
  } else {
    alert("Datos inválidos. Por favor, intente de nuevo.");
  }
});
// Evento para eliminar un producto del carrito (ejemplo)
document.getElementById("eliminar-producto").addEventListener("click", () => {
  const nombre = prompt("Ingrese el nombre del producto a eliminar:");
  const index = carrito.findIndex(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());

  if (index !== -1) {
    carrito.splice(index, 1);
    mostrarCarrito();
  } else {
    alert("Producto no encontrado.");
  }
});
// Evento para calcular el total al hacer clic en un botón
document.getElementById("calcular-total").addEventListener("click", () => {
  const total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  document.getElementById("total").textContent = total.toFixed(2);
});
// Evento para mostrar el total general al hacer clic en un botón
document.getElementById("mostrar-total-general").addEventListener("click", () => {
  const totalGeneral = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  document.getElementById("total-general").textContent = `$${totalGeneral.toFixed(2)}`;
});
