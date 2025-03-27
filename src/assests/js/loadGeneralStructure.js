async function loadGeneralStructure(elements) {
    for (const { id, templatePath, repeat } of elements) {
        let element = document.getElementById(id);
        if (element) {
            if (repeat) {
                for (let i = 0; i < repeat; i++) {
                    let item = await loadTemplate(templatePath);
                    element.appendChild(item);
                }
            } else {
                element.appendChild(await loadTemplate(templatePath));
            }
        }
    }
    attachDropdownEvents();
}

function attachDropdownEvents() {
    const userIcon = document.getElementById('user-icon');
    const dropdown = document.getElementById('user-dropdown');
    const logoutBtn = document.getElementById('logout-btn');

    if (userIcon && dropdown) {
        userIcon.addEventListener('click', () => {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            alert('Cerrando sesión...');
            localStorage.removeItem('usuarioLogueado');
            window.location.href = '../pages/logIn.html';
        });
    }
}
