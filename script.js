
const signupSection = document.getElementById("signup");
const loginSection = document.getElementById("login");
const welcomeSection = document.getElementById("welcome");


loginSection.style.display = "block";


document.getElementById("goToSignup").addEventListener("click", function (e) {
  e.preventDefault();
  loginSection.style.display = "none";
  signupSection.style.display = "block";
});

document.getElementById("goToLogin").addEventListener("click", function (e) {
  e.preventDefault();
  signupSection.style.display = "none";
  loginSection.style.display = "block";
});


document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const errorMsg = document.getElementById("signupError");

  const savedEmail = localStorage.getItem("userEmail");

  if (savedEmail && savedEmail === email) {
    
    errorMsg.textContent = " Account already exists with this email!";
    return;
  } else {
    errorMsg.textContent = ""; 
  }

 
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Signup successful! Please login.");
  signupSection.style.display = "none";
  loginSection.style.display = "block";
});


document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");

  if (email === savedEmail && password === savedPassword) {
    loginSection.style.display = "none";
    welcomeSection.style.display = "block";
  } else {
    alert("Invalid email or password. Please try again.");
  }
});

document.getElementById("logoutBtn").addEventListener("click", function (e) {
  e.preventDefault();
  welcomeSection.style.display = "none";
  loginSection.style.display = "block";
});
