// Atualização em tempo real da contagem
const startDate = new Date('2019-07-08T00:00:00Z');
const countdownElement = document.getElementById('time');

function updateCountdown() {
  const now = new Date();
  const duration = now - startDate;

  const years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((duration % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((duration % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);

  countdownElement.textContent = `${years} anos, ${months} meses, ${days} dias, ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// Carrossel de imagens
const imagens = [
  'assets/Imagens/foto1.jpg',
  'assets/Imagens/foto2.jpg',
  'assets/Imagens/foto3.jpg',
];

const slider = document.getElementById('slider');
let currentIndex = 0;

imagens.forEach((src, i) => {
  const img = document.createElement('img');
  img.src = src;
  img.classList.add('slide');
  if (i === 0) img.classList.add('active');
  slider.appendChild(img);
});

setInterval(() => {
  const slides = document.querySelectorAll('.slide');
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}, 3000);

// Botão de WhatsApp
const whatsBtn = document.getElementById('whatsapp-btn');
const numero = '47999471966';
const urlApp = 'https://guilhermeglr.github.io/amorapp/';
const mensagemTexto = `Oi vida, criei este app para não deixar passar em branco. 💖✨ Veja com carinho aqui: ${urlApp}`;
const mensagem = encodeURIComponent(mensagemTexto);

whatsBtn.href = `https://wa.me/${numero}?text=${mensagem}`;