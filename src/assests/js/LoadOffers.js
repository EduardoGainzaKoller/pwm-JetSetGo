document.addEventListener("DOMContentLoaded", function () {
    const offersList = document.getElementById("OffersList");
    const numOfertas = 6;

    for (let i = 0; i < numOfertas; i++) {
        let li = document.createElement("li");
        li.setAttribute("xlu-include-file", "../templates/offers.html");
        offersList.appendChild(li);
    }

    xLuIncludeFile();
});