const signupTab = document.getElementById("signup-tab");
const loginTab = document.getElementById("login-tab");
const signupForm = document.getElementById("signup");
const loginForm = document.getElementById("login");

signupTab.addEventListener("click", () => {
  signupForm.style.display = "block";
  loginForm.style.display = "none";
});

loginTab.addEventListener("click", () => {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});
