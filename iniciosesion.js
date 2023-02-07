document.getElementById('login-menu').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'admin' && password === '1234') {
      alert('Login successful');
    } else {
      alert('Invalid login');
    }
  });
  