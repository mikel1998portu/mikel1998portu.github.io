$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    // Aquí puede agregar su lógica de autenticación
    console.log("Email: " + email + ", Password: " + password);
  });
});
