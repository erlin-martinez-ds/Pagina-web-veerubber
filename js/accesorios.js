// =====================
// CARRITO
// =====================

const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");
const panelCarrito = document.getElementById("panelCarrito");

let carrito = [];

// Abrir / cerrar panel
document.getElementById("abrirCarrito").addEventListener("click", () => {
  panelCarrito.classList.add("abierto");
});

document.getElementById("cerrarCarrito").addEventListener("click", () => {
  panelCarrito.classList.remove("abierto");
});

// Agregar al carrito
document.querySelectorAll(".agregar-carrito").forEach((boton) => {
  boton.addEventListener("click", () => {
    const cantidad =
      parseInt(
        boton.closest(".producto-info").querySelector(".cantidad-input").value,
      ) || 1;

    carrito.push({
      nombre: boton.dataset.nombre,
      precio: parseInt(boton.dataset.precio),
      cantidad,
    });
    renderCarrito();
  });
});

function renderCarrito() {
  if (carrito.length === 0) {
    listaCarrito.innerHTML = '<p class="carrito-vacio">No hay productos</p>';
    totalElemento.textContent = "$0";
    return;
  }

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  listaCarrito.innerHTML = carrito
    .map(
      (producto, index) => `
    <div class="carrito-item">
      <h5>${producto.nombre}</h5>
      <p>Cantidad: ${producto.cantidad}</p>
      <p>$${(producto.precio * producto.cantidad).toLocaleString("es-CO")}</p>
      <button class="eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
    </div>
  `,
    )
    .join("");

  totalElemento.textContent = "$" + total.toLocaleString("es-CO");
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  renderCarrito();
}

// =====================
// FILTROS Y BÚSQUEDA
// =====================

const filtroBtns = document.querySelectorAll(".filtro-btn");
const productos = document.querySelectorAll(".producto");
const buscador = document.getElementById("buscador");

let categoriaActual = "TODOS";

filtroBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filtroBtns.forEach((b) => {
      b.classList.remove("active");
      b.classList.remove("btn-warning");
      b.classList.add("btn-light");
    });

    btn.classList.add("active");
    btn.classList.remove("btn-light");
    btn.classList.add("btn-warning");

    categoriaActual = btn.dataset.categoria;
    filtrarProductos();
  });
});

buscador.addEventListener("input", filtrarProductos);

function filtrarProductos() {
  const texto = buscador.value.toLowerCase();

  productos.forEach((producto) => {
    const coincideCategoria =
      categoriaActual === "TODOS" ||
      producto.dataset.categoria === categoriaActual;
    const coincideBusqueda = producto
      .querySelector("h3")
      .textContent.toLowerCase()
      .includes(texto);

    producto.classList.toggle(
      "oculto",
      !(coincideCategoria && coincideBusqueda),
    );
  });
}
