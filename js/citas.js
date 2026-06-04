const formulario = document.getElementById("formCita");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const fecha = document.getElementById("fecha").value;
    const hoy = new Date().toISOString().split("T")[0];

    if (fecha < hoy) {
      alert("No puedes seleccionar una fecha anterior a hoy.");
      return;
    }

    document.getElementById("mensaje").classList.remove("d-none");

    formulario.reset();
  });
}