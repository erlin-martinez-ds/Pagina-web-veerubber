function solicitarServicio(servicio) {

  const nombre =
    document.getElementById("nombreCliente").value;

  const placa =
    document.getElementById("placaMoto").value;

  if (nombre === "" || placa === "") {

    alert(
      "Debe ingresar el nombre y la placa de la motocicleta."
    );

    return;
  }

  document.getElementById("opcionesServicio").innerHTML += `

    <div class="alert alert-success mt-3">

      <h4>Solicitud registrada correctamente</h4>

      <p>
        <strong>Cliente:</strong>
        ${nombre}
      </p>

      <p>
        <strong>Placa:</strong>
        ${placa}
      </p>

      <p>
        <strong>Servicio:</strong>
        ${servicio}
      </p>

      <p>
        Un asesor de Veerubber Motos se comunicará contigo.
      </p>

    </div>

  `;
}

function calcularRepuestos() {

  const repuestos =
    document.querySelectorAll(".repuesto:checked");

  let subtotal = 0;
  let lista = "";

  repuestos.forEach(repuesto => {

    const precio =
      parseInt(repuesto.dataset.precio);

    subtotal += precio;

    lista += `
      <li class="list-group-item d-flex justify-content-between">
        <span>${repuesto.value}</span>
        <strong>$${precio.toLocaleString()}</strong>
      </li>
    `;
  });

  if (repuestos.length === 0) {

    document.getElementById("resultadoRepuestos").innerHTML = `
      <div class="alert alert-warning">
        Seleccione al menos un repuesto.
      </div>
    `;

    return;
  }

  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  document.getElementById("resultadoRepuestos").innerHTML = `

    <div class="card mt-3 shadow">

      <div class="card-header bg-primary text-white">
        Resumen de Compra
      </div>

      <div class="card-body">

        <ul class="list-group mb-3">
          ${lista}
        </ul>

        <p>
          <strong>Subtotal:</strong>
          $${subtotal.toLocaleString()}
        </p>

        <p>
          <strong>IVA:</strong>
          $${iva.toLocaleString()}
        </p>

        <h4 class="text-success">
          Total: $${total.toLocaleString()}
        </h4>

        <button
          class="btn btn-success mt-3"
          onclick="comprarRepuestos()">

          Solicitar Repuestos

        </button>

      </div>

    </div>
  `;
}

function comprarRepuestos() {

  const repuestos =
    document.querySelectorAll(".repuesto:checked");

  if (repuestos.length === 0) {

    alert("Seleccione al menos un repuesto.");

    return;
  }

  document.getElementById("resultadoRepuestos").innerHTML += `

    <div class="alert alert-success mt-3">

      <h5>Solicitud enviada correctamente</h5>

      <p>
        Un asesor de Veerubber Motos se comunicará contigo para confirmar la disponibilidad de los repuestos.
      </p>

    </div>

  `;
}

document.addEventListener("DOMContentLoaded", () => {

  const tipoServicio =
    document.getElementById("tipoServicio");

  const opcionesServicio =
    document.getElementById("opcionesServicio");

  tipoServicio.addEventListener("change", () => {

    if (tipoServicio.value === "aceite") {

      opcionesServicio.innerHTML = `

      <div class="card shadow">

        <div class="card-header bg-success text-white">
          Cambio de Aceite - $35.000
        </div>

        <div class="card-body">

          <ul>
            <li>Cambio de aceite premium</li>
            <li>Revisión de filtros</li>
            <li>Chequeo general del motor</li>
            <li>Inspección preventiva</li>
          </ul>

          <button
            class="btn btn-success"
            onclick="solicitarServicio('Cambio de Aceite')">

            Solicitar Servicio

          </button>

        </div>

      </div>
      `;
    }

    else if (tipoServicio.value === "motor") {

      opcionesServicio.innerHTML = `

      <div class="card shadow">

        <div class="card-header bg-warning">
          Reparación de Motor - $120.000
        </div>

        <div class="card-body">

          <ul>
            <li>Diagnóstico técnico especializado</li>
            <li>Reparación de fallas mecánicas</li>
            <li>Mantenimiento preventivo</li>
            <li>Ajuste y calibración del motor</li>
          </ul>

          <button
            class="btn btn-success"
            onclick="solicitarServicio('Reparación de Motor')">

            Solicitar Servicio

          </button>

        </div>

      </div>
      `;
    }

    else if (tipoServicio.value === "repuestos") {

      opcionesServicio.innerHTML = `

      <div class="card shadow">

        <div class="card-header bg-primary text-white">
          Venta de Repuestos
        </div>

        <div class="card-body">

          <div class="form-check">
            <input class="form-check-input repuesto"
            type="checkbox"
            value="Batería Yuasa"
            data-precio="120000">

            <label class="form-check-label">
              Batería Yuasa - $120.000
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input repuesto"
            type="checkbox"
            value="Llanta Michelin"
            data-precio="260000">

            <label class="form-check-label">
              Llanta Michelin - $260.000
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input repuesto"
            type="checkbox"
            value="Cadena DID"
            data-precio="185000">

            <label class="form-check-label">
              Cadena DID - $185.000
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input repuesto"
            type="checkbox"
            value="Pastillas Brembo"
            data-precio="85000">

            <label class="form-check-label">
              Pastillas Brembo - $85.000
            </label>
          </div>
          <div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Batería Yuasa YTX7L-BS"
    data-precio="145000">

  <label class="form-check-label">
    Batería Yuasa YTX7L-BS - $145.000
  </label>
</div>

<div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Llanta Michelin Pilot Street"
    data-precio="260000">

  <label class="form-check-label">
    Llanta Michelin Pilot Street - $260.000
  </label>
</div>

<div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Llanta Pirelli Sport Demon"
    data-precio="295000">

  <label class="form-check-label">
    Llanta Pirelli Sport Demon - $295.000
  </label>
</div>

<div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Cadena DID 520VX3"
    data-precio="185000">

  <label class="form-check-label">
    Cadena DID 520VX3 - $185.000
  </label>
</div>

<div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Kit de Arrastre Honda CB125F"
    data-precio="310000">

  <label class="form-check-label">
    Kit de Arrastre Honda CB125F - $310.000
  </label>
</div>

<div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Disco de Freno Yamaha FZ"
    data-precio="165000">

  <label class="form-check-label">
    Disco de Freno Yamaha FZ - $165.000
  </label>
</div>

<div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Bujía NGK Iridium"
    data-precio="45000">

  <label class="form-check-label">
    Bujía NGK Iridium - $45.000
  </label>
</div>

<div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Filtro de Aire Honda XR150"
    data-precio="35000">

  <label class="form-check-label">
    Filtro de Aire Honda XR150 - $35.000
  </label>
</div>

<div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Amortiguador YSS Gas"
    data-precio="320000">

  <label class="form-check-label">
    Amortiguador YSS Gas - $320.000
  </label>
</div>

<div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Farola LED Universal"
    data-precio="120000">

  <label class="form-check-label">
    Farola LED Universal - $120.000
  </label>
</div>

<div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Maletero Givi 32L"
    data-precio="390000">

  <label class="form-check-label">
    Maletero Givi 32L - $390.000
  </label>
</div>

<div class="form-check">
  <input class="form-check-input repuesto"
    type="checkbox"
    value="Casco Shaft Pro 610"
    data-precio="280000">

  <label class="form-check-label">
    Casco Shaft Pro 610 - $280.000
  </label>
</div>

          <button
            class="btn btn-primary mt-3"
            onclick="calcularRepuestos()">

            Calcular Total

          </button>

          <div id="resultadoRepuestos"></div>

        </div>

      </div>
      `;
    }

    else {

      opcionesServicio.innerHTML = "";

    }

  });

});