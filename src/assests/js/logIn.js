document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z]).{6,}$/;  // Contraseña con al menos 6 caracteres y al menos una mayúscula

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

        const usuario = usuarios.find(user => user.email === email);

        if (!usuario) {
            alert("El email no está registrado. Por favor, regístrate primero.");
            return;
        }

        if (usuario.password !== password) {
            alert("Contraseña incorrecta.");
            return;
        }

        alert("Inicio de sesión exitoso. Redirigiendo a la página de inicio...");

        form.reset();

        window.location.href = "../pages/home.html";
    });
});
