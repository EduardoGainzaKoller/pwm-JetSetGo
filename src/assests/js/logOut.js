document.addEventListener('DOMContentLoaded', function() {
    fetch('../data/user.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('user-email').textContent = data.email;
        })
        .catch(error => {
            console.error('Error al cargar los datos del usuario:', error);
        });


    document.getElementById('user-icon').addEventListener('click', function() {
        var dropdown = document.getElementById('user-dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('logout-btn').addEventListener('click', function() {

        alert('Cerrando sesión...');
        localStorage.removeItem('usuarioLogueado');
        window.location.href = '../pages/logIn.html';
    });
});