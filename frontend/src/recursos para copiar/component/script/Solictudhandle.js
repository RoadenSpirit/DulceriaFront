
const $form = document.querySelector('#contactForm');
$form.addEventListener('submit', (event) => {
 event.preventDefault(); 
  
 // Convertir los datos del formulario a un objeto JavaScript
 const formData = new FormData($form);
 const data = Object.fromEntries(formData.entries());
 

 // Convertir el objeto a una cadena JSON
 const jsonData = JSON.stringify(data);
 console.log(jsonData)

 fetch('http://localhost:8000/servicio/list/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData,
 }).then((response) => {
    
    if (response.ok) {
      alert('Your message has been sent!');
      $form.reset();
    } else {
      alert('There was a problem sending your message');
    }
 });
});