document.addEventListener("DOMContentLoaded", async function () {

    const offersList = document.getElementById("OffersList");
    const numOfertas = 4;

    for (let i = 0; i < numOfertas; i++) {
        let offerTemplate = await loadTemplate("../templates/offers.html");
        let li = document.createElement("li");
        li.appendChild(offerTemplate);
        offersList.appendChild(li);
    }
});
