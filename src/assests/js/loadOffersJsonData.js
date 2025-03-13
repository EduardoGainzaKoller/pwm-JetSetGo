async function loadOffersJsonData(path) {
    try {
        let response = await fetch(path);
        let data = await response.json();

        let ofertaContainer = document.querySelector(".oferta-container");
        ofertaContainer.innerHTML = "";

        // Tomar solo los primeros 4 vuelos
        data.flights.slice(0, 4).forEach(flight => {
            let ofertaCard = document.createElement("div");
            ofertaCard.classList.add("oferta-card");

            ofertaCard.innerHTML = `
                <div class="oferta-img-container">
                    <img src="../assests/images/Destino_generico.jpeg" alt="Imagen del destino">
                </div>
                <div class="oferta-info">
                    <h3 class="oferta-destino">${flight.destino}</h3>
                    <p class="oferta-detalles">Duración: ${flight.duracion}</p>
                    <p class="oferta-fechas">Salida: ${flight["Hora de salida"]} → Llegada: ${flight["hora de llegada"]}</p>
                    <p class="oferta-precio">Desde <strong>${flight.precio.toFixed(2)} €</strong></p>
                </div>
            `;

            ofertaContainer.appendChild(ofertaCard);
        });

    } catch (error) {
        console.error("Error cargando los datos:", error);
    }
}

loadOffersJsonData("../assests/Json/flights.json");
