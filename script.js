/* ==============================
   ELEMENTOS DEL DOM
   ============================== */
const themeToggle = document.getElementById('themeToggle'); // opcional
const swapPhoto = document.getElementById('swapPhoto');     // opcional
const contactBtn = document.getElementById('contactBtn');   // opcional
const profileImg = document.getElementById('profileImg');

const form = document.getElementById('userForm');
const input = document.getElementById('userInput');
const response = document.getElementById('response');

/* ==============================
   TEMA OSCURO AUTOMÁTICO
   ============================== */
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
  if (themeToggle) themeToggle.textContent = 'Modo claro';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark')
      ? 'Modo claro'
      : 'Modo oscuro';
  });
}

/* ==============================
   CAMBIAR FOTO ALEATORIA
   ============================== */
if (swapPhoto && profileImg) {
  swapPhoto.addEventListener('click', () => {
    const id = Math.floor(Math.random() * 1000);
    profileImg.src = `https://picsum.photos/200?random=${id}`;
  });
}

/* ==============================
   CONTACTO
   ============================== */
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    window.location.href =
      'mailto:jgarrevilla@gmail.com?subject=Hola Jorge';
  });
}

/* ==============================
   SALUDOS ALEATORIOS
   ============================== */
const saludos = [
  '¡Hola',
  '¿Qué onda',
  'Encantado de conocer a',
  '¡Bienvenido',
  'Un placer saludar a',
  '¡Hey',
  'Saludos cordiales a',
  '¿Cómo estás',
  '¡Qué gusto verte,',
  'Mi nombre es Jorge y tú eres'
];

function obtenerSaludoAleatorio() {
  return saludos[Math.floor(Math.random() * saludos.length)];
}

/* ==============================
   ENVÍO DE DATOS AL SERVIDOR (API REST)
   ============================== */
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = input.value.trim();

  // Validación frontend
  if (nombre.length < 3) {
    response.textContent = 'Escribe al menos 3 caracteres 😊';
    return;
  }

  response.textContent = 'Enviando... ⏳';

  try {
    const saludoAleatorio = obtenerSaludoAleatorio();
    const apiUrl = `http://localhost:8080/api/saludos?nombre=${encodeURIComponent(nombre)}&saludo=${encodeURIComponent(saludoAleatorio)}`;
    const res = await fetch(apiUrl);

    // Si el servidor falla
    if (!res.ok) {
      throw new Error('Error HTTP ' + res.status);
    }

    const result = await res.json();

    if (result.estado === 'success') {
      response.textContent = result.mensaje;
      input.value = '';
    } else {
      response.textContent = result.mensaje || 'Error al procesar ❌';
    }

  } catch (error) {
    response.textContent = 'Error de conexión ❌';
    console.error('Fetch error:', error);
  }
});
