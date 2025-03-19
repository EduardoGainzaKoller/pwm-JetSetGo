// Espera a que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtén el formulario de inicio de sesión
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario (recargar la página)

        // Obtén los valores del correo y la contraseña
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Verificación básica
        if (!email || !password) {
            alert("Por favor, ingresa ambos campos: correo electrónico y contraseña.");
            return;
        }

        // Enviar solicitud al servidor para iniciar sesión
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }) // Los datos del inicio de sesión
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Inicio de sesión exitoso.");
                    // Redirigir al usuario a la página principal o dashboard
                    window.location.href = "../pages/home.html";
                } else {
                    alert("Correo o contraseña incorrectos.");
                }
            })
            .catch(error => {
                console.error("Error al iniciar sesión:", error);
                alert("Ocurrió un error. Intenta nuevamente.");
            });
    });
});
