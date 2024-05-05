import { setToken } from "../../utils/token";

document.querySelector('#login').addEventListener('submit', function(event) {
    event.preventDefault();
    // Obtén los campos del formulario
    var username = document.querySelector('#username');
    var password = document.querySelector('#password');

    // Verifica que los campos no estén vacíos
    if ( !username.value || !password.value) {
        alert('Por favor, llena todos los campos.');
    } else {
        // Convierte los datos del formulario a un objeto JavaScript
        const formData = new FormData(event.target);
       const data = Object.fromEntries(formData.entries());

        // Realiza una solicitud POST a la ruta 'login/' de tu API de Django
        fetch('http://localhost:8000/auth/jwt/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(async (response) => { 
            if (!response.ok) {
                alert('Hubo un problema con el inicio de sesión');
            } else {
                return await response.json()
                // Aquí puedes manejar la respuesta exitosa, por ejemplo, redirigir al usuario
                alert('Inicio de sesión exitoso');
            }
        }).then((data) => {
            console.log(data);
            const { access } = data
            setToken('bearer ' + access, true)
            window.location.href = 'http://localhost:4321/index.html';
        })
        .catch((e) => {
            console.error(e);
        })
    }
});