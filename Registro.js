// Obtener elementos del formulario
const form = document.querySelector('.register-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');
function redirectToHome() {
    window.location.href = "index.html";
    return true;
  }
