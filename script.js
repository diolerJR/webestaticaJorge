const themeToggle = document.getElementById('themeToggle');
const swapPhoto = document.getElementById('swapPhoto');
const contactBtn = document.getElementById('contactBtn');
const profileImg = document.getElementById('profileImg');

const form = document.getElementById('userForm');
const input = document.getElementById('userInput');
const response = document.getElementById('response');

/* Tema oscuro automático */
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
  themeToggle.textContent = 'Modo claro';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark')
    ? 'Modo claro'
    : 'Modo oscuro';
});

/* Cambiar foto */
swapPhoto.addEventListener('click', () => {
  const id = Math.floor(Math.random() * 1000);
  profileImg.src = `https://picsum.photos/200?random=${id}`;
});

/* Contacto */
contactBtn.addEventListener('click', () => {
  window.location.href =
    'mailto:jgarrevilla@gmail.com?subject=Hola Jorge';
});

/* 🆕 FORMULARIO */
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = input.value.trim();

  if (text.length < 3) {
    response.textContent = 'Escribe al menos 3 caracteres 😊';
    return;
  }

  response.textContent = `Has escrito: "${text.toUpperCase()}"`;
  input.value = '';
});
