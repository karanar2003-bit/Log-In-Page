// Email & Password Validation
function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("❌ Please fill out all fields!");
    return false;
  }

  if (!email.includes("@")) {
    alert("⚠️ Please enter a valid email address!");
    return false;
  }

  if (password.length < 6) {
    alert("🔒 Password must be at least 6 characters!");
    return false;
  }

  alert("✅ Login Successful!");
  return false; // prevent actual form submission (demo)
}

// Password Show/Hide
function togglePassword() {
  const passField = document.getElementById("password");
  passField.type = passField.type === "password" ? "text" : "password";
}

// Forget Password Popup
function forgotPassword() {
  alert("🔑 Password reset link has been sent to your email!");
}

// Register Popup
function registerUser() {
  alert("📝 Redirecting to registration page...");
}
