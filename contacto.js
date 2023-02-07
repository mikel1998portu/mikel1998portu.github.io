// JavaScript for validating the form inputs
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  if (name === '' || email === '' || message === '') {
    alert('PORFAVOR RELLENE EL FORMULARIO');
  } else {
    alert('TU MENSAJE HA SIDO ENVIADO');
  }
});
