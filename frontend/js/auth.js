const modal = document.getElementById("authModal");
const btnAuth = document.getElementById("btnAuth");
const closeModal = document.getElementById("closeModal");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const modalTitle = document.getElementById("modalTitle");
const switchBtn = document.getElementById("switchBtn");
const switchText = document.getElementById("switchText");
const authMsg = document.getElementById("authMsg");
const btnMenu = document.getElementById("btnMenu");
const navLinks = document.getElementById("navLinks");


let modoLogin = true;

// Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

btnAuth.addEventListener("click", () => modal.classList.remove("hidden"));
closeModal.addEventListener("click", () => modal.classList.add("hidden"));

switchBtn.addEventListener("click", () => {
  modoLogin = !modoLogin;
  loginForm.classList.toggle("hidden");
  registerForm.classList.toggle("hidden");

  modalTitle.textContent = modoLogin ? "Iniciar sesión" : "Registro";
  switchText.textContent = modoLogin
    ? "¿No tienes cuenta?"
    : "¿Ya tienes cuenta?";
  switchBtn.textContent = modoLogin ? "Regístrate" : "Inicia sesión";

  authMsg.textContent = "";
});

// LOGIN
loginForm.addEventListener("submit", async e => {
  e.preventDefault();

  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();

  const res = await loginUsuario({ email, password });
  localStorage.setItem("usuario", JSON.stringify(res.usuario));
  actualizarNavbar();
  modal.classList.add("hidden");
});

// REGISTRO
registerForm.addEventListener("submit", async e => {
  e.preventDefault();

  const datos = {
    nombre: regNombre.value.trim(),
    apellido: regApellido.value.trim(),
    telefono: regTelefono.value.trim(),
    email: regEmail.value.trim(),
    password: regPassword.value.trim(),
    confirmPassword: regConfirmPassword.value.trim()
  };

  try {
    await registrarUsuario(datos);
    authMsg.style.color = "#1db954";
    authMsg.textContent = "Registro exitoso, ahora puedes iniciar sesión";
    registerForm.reset();
  } catch (error) {
    authMsg.style.color = "#ff5555";
    authMsg.textContent = error.message;
  }
});

/* NAVBAR */
function actualizarNavbar() {
  const user = localStorage.getItem("usuario");
  btnAuth.textContent = user ? "Cerrar sesión" : "Iniciar sesión";

  if (user) {
    btnAuth.onclick = () => {
      localStorage.removeItem("usuario");
      location.reload();
    };
  }
}

actualizarNavbar();
