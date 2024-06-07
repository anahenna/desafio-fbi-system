document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('email');
    if (email) {
        document.getElementById('agente-email').textContent = email;
    } else {
        alert('No se encontró el correo electrónico');
    }
});