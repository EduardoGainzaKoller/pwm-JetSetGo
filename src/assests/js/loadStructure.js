async function loadStructure() {
    let header = document.getElementById('header');
    let footer = document.getElementById('footer');
    let searchBar = document.getElementById('searchBar');

    header.appendChild(await loadTemplate('../templates/header.html'));
    footer.appendChild(await loadTemplate('../templates/footer.html'));
    searchBar.appendChild(await loadTemplate('../templates/search-hotel-bar.html'));
}