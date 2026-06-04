async function obtenerClima() {
  try {
    const respuesta = await fetch(
      "https://wttr.in/Mocoa?format=j1"
    );

    const datos = await respuesta.json();

    const temperatura = datos.current_condition[0].temp_C;
    const descripcion = datos.current_condition[0].weatherDesc[0].value;

    document.getElementById(
      "temperatura"
    ).innerHTML = `🌡️ ${temperatura}°C`;

    let mensaje = "";

    const clima = descripcion.toLowerCase();

    if (
      clima.includes("sunny") ||
      clima.includes("clear")
    ) {
      mensaje = "☀️ Día soleado y agradable.";
    } 
    else if (
      clima.includes("cloud") ||
      clima.includes("overcast")
    ) {
      mensaje = "☁️ Ambiente nublado.";
    } 
    else if (
      clima.includes("rain") ||
      clima.includes("drizzle")
    ) {
      mensaje = "🌧️ Se presentan lluvias en la zona.";
    } 
    else if (
      clima.includes("storm")
    ) {
      mensaje = "⛈️ Posibles tormentas.";
    } 
    else {
      mensaje = descripcion;
    }

    document.getElementById("estadoClima").innerHTML = `
      <strong>${mensaje}</strong><br>
      Temperatura actual en Mocoa.
    `;

  } catch (error) {

    document.getElementById(
      "temperatura"
    ).innerHTML = "🌤️ Mocoa";

    document.getElementById(
      "estadoClima"
    ).innerHTML = `
      Clima cálido y húmedo característico
      de la región amazónica.
    `;
  }
}

obtenerClima();