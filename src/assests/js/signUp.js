document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z]).{6,}$/;

        if (!email || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un email válido.");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("La contraseña debe tener al menos 6 caracteres y contener al menos una mayúscula.");
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioExistente = usuarios.find(user => user.email === email);
        if (usuarioExistente) {
            alert("Este email ya está registrado. Usa otro o inicia sesión.");
            return;
        }

        const nuevoUsuario = { email, password };
        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Registro exitoso. Redirigiendo a la página de inicio...");

        form.reset();

        window.location.href = "../pages/home.html";
    });
});
