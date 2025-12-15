
const themeToggle = document.getElementById('themeToggle');
const swapPhoto = document.getElementById('swapPhoto');
const contactBtn = document.getElementById('contactBtn');
const profileImg = document.getElementById('profileImg');
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
document.body.classList.add('dark');
themeToggle.textContent = 'Modo claro';
}
themeToggle.addEventListener('click', ()=>{
document.body.classList.toggle('dark');
themeToggle.textContent = document.body.classList.contains('dark') ? 'Modo claro' : 'Modo oscuro';
});
swapPhoto.addEventListener('click', ()=>{
const id = Math.floor(Math.random()*1000);
profileImg.src = `https://picsum.photos/200?random=${id}`;
});
contactBtn.addEventListener('click', ()=>{
window.location.href = 'mailto:jgarrevilla@gmail.com?subject=Hola%20Jorge&body=Hola%20Jorge%2C%0A%0AMe%20gustar%C3%ADa%20contactarte...';
});
document.querySelectorAll('button').forEach(b=>{b.addEventListener('keyup', e=>{if(e.key==='Enter') b.click()})});