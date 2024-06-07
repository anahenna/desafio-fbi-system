

const token = localStorage.getItem('token')
if (!token) {
    alert('Error 401: Usuario no autorizado... redirigiendo al login')
    window.location.href = "/"
}

const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('email');
    if (email) {
        document.getElementById('agente-email').textContent = email;
    } else {
        alert('No se encontró el correo electrónico');
    }

});