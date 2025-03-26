document.addEventListener("DOMContentLoaded", () => {
    const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    const templateHome = document.getElementById("header");

    if (templateHome) {
        templateHome.innerHTML = "";
    }

    if (usuarioLogueado) {
        loadGeneralStructure([
            { id: 'header', templatePath: '../templates/headerUser.html' }
        ]);
    } else {
        loadGeneralStructure([
            { id: 'header', templatePath: '../templates/header.html' }
        ]);
    }
});
