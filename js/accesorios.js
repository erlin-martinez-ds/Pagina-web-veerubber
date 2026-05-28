const botones = document.querySelectorAll(".agregar-carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");

let carrito = [];
let total = 0;

botones.forEach(boton => {

boton.addEventListener("click", () => {

const nombre = boton.dataset.nombre;
const precio = parseInt(boton.dataset.precio);

carrito.push({
nombre,
precio
});

actualizarCarrito();

});

});

function actualizarCarrito(){

listaCarrito.innerHTML = "";

total = 0;

if(carrito.length === 0){

listaCarrito.innerHTML = `
<p class="carrito-vacio">
No hay productos
</p>
`;

totalElemento.textContent = "$0";

return;

}

carrito.forEach((producto,index) => {

total += producto.precio;

listaCarrito.innerHTML += `

<div class="carrito-item">

<h5>
${producto.nombre}
</h5>

<p>
$${producto.precio}
</p>

<button class="eliminar" onclick="eliminarProducto(${index})">
Eliminar
</button>

</div>

`;

});

totalElemento.textContent = "$" + total;

}

function eliminarProducto(index){

carrito.splice(index,1);

actualizarCarrito();

}