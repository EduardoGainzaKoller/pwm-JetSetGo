async function loadStructure(...path) {
    let header = document.getElementById('header');
    let footer = document.getElementById('footer');
    let searchBar = document.getElementById('searchBar');
    let offers = document.getElementById('OffersList');

    header.appendChild(await loadTemplate('../templates/header.html'));
    footer.appendChild(await loadTemplate('../templates/footer.html'));
    searchBar.appendChild(await loadTemplate('../templates/search-hotel-bar.html'));

    for (let i = 0; i < 4; i++) {
        let offer = await loadTemplate('../templates/offers.html');
        let listItem = document.createElement('li');
        listItem.appendChild(offer);
        offers.appendChild(listItem);
    }
}
