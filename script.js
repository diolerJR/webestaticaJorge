/* ==============================
   ELEMENTOS DEL DOM
   ============================== */
const themeToggle = document.getElementById('themeToggle'); // ⚠️ Aún no está en HTML, puedes añadir un botón si quieres
const swapPhoto = document.getElementById('swapPhoto');     // ⚠️ Aún no está en HTML
const contactBtn = document.getElementById('contactBtn');   // ⚠️ Aún no está en HTML
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
if (swapPhoto) {
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
   FUNCIÓN SIMULADA TIPO BACKEND
   ============================== */
function sendDataToServer(data) {
  return new Promise((resolve) => {
    // ⏳ Simula tiempo de servidor / DB
    setTimeout(() => {
      resolve({
        success: true,
        message: `Has escrito: "${data.text.toUpperCase()}"`
      });
    }, 500); // medio segundo
  });
}

/* ==============================
   MANEJO DEL FORMULARIO
   ============================== */
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const text = input.value.trim();

  if (text.length < 3) {
    response.textContent = 'Escribe al menos 3 caracteres 😊';
    return;
  }

  response.textContent = 'Enviando... ⏳';

  try {
    const result = await sendDataToServer({ text });

    if (result.success) {
      response.textContent = result.message;
      input.value = '';
    } else {
      response.textContent = 'Error al procesar los datos ❌';
    }
  } catch (error) {
    response.textContent = 'Error de conexión ❌';
    console.error(error);
  }
});
