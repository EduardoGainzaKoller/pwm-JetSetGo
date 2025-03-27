document.addEventListener("DOMContentLoaded", () => {
    const usuariosLogueados = JSON.parse(localStorage.getItem("usuarioLogueado"));
    const templateHome = document.getElementById("header");

    alert(usuariosLogueados.length);

    if (templateHome) {
        templateHome.innerHTML = "";
    }

    if (usuariosLogueados.length > 0) {
        loadGeneralStructure([
            { id: 'header', templatePath: '../templates/headerUser.html' }
        ]);
    } else {
        loadGeneralStructure([
            { id: 'header', templatePath: '../templates/header.html' }
        ]);
    }
});
