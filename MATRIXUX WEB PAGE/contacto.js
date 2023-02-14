const form = document.querySelector('.form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  if (name === '' || email === '' || message === '') {
    form.classList.add('animate');
    setTimeout(() => {
      form.classList.remove('animate');
    }, 500);
  } else {
    // Enviar formulario aquí
  }
});


