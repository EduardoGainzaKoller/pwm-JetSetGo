async function loadFlightOffers(limit = null) {
    let offersList = document.getElementById("OffersList");
    let response = await fetch("../assest/json/flights.json");
    let data = await response.json();

    let flightsToShow = limit ? data.flights.slice(0, limit) : data.flights;

    for (let flight of flightsToShow) {
        let offerTemplate = await loadTemplate("../templates/offers.html");

        offerTemplate.querySelector(".oferta-img-container img").src = flight.imagen_destino;
        offerTemplate.querySelector(".oferta-destino").textContent = flight.destino;
        offerTemplate.querySelector(".oferta-detalles").textContent = `${flight.duracion}, vuelo directo`;
        offerTemplate.querySelector(".oferta-fechas").textContent = `${flight["Hora de salida"]} → ${flight.hora_de_llegada}`;
        offerTemplate.querySelector(".oferta-precio strong").textContent = `${flight.precio} €`;

        let li = document.createElement("li");
        li.appendChild(offerTemplate);
        offersList.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", () => loadFlightOffers(6));
