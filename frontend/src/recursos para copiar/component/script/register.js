document.querySelector('form').addEventListener('submit', function(event) {
     event.preventDefault();
    // Obtén los campos del formulario
    var email = document.querySelector('#email');
    var username = document.querySelector('#username');
    var password = document.querySelector('#password');
    var confirm = document.querySelector('#confirm');
  
    // Verifica que los campos no estén vacíos
    if (!email.value || !username.value || !password.value || !confirm.value) {
      alert('Por favor, llena todos los campos.');
    }else {
      // Previene la acción por defecto del formulario
     

      // Convierte los datos del formulario a un objeto JavaScript
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      delete data.confirm;
      // Convierte el objeto a una cadena JSON
      const jsonData = JSON.stringify(data);
      console.log(jsonData)
      // Realiza una solicitud POST a la ruta 'register/' de tu API de Django
      fetch('http://localhost:8000/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      }).then((response) => {
        if (!response.ok) {
          alert('Hubo un problema con el registro');
     
          
        }
      });
    }
});