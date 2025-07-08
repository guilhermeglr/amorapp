const imagens = [
  'assets/imagens/foto1.jpg',
  'assets/imagens/foto2.jpg',
  // Adicione outras imagens aqui
];

const slider = document.getElementById('slider');
let current = 0;

imagens.forEach((src, i) => {
  const img = document.createElement('img');
  img.src = src;
  img.classList.add('slide');
  img.style.opacity = 0;
  if (i === 0) {
    img.classList.add('active');
    setTimeout(() => { img.style.opacity = 1; }, 100);
  }
  slider.appendChild(img);
});

setInterval(() => {
  const slides = document.querySelectorAll('.slide');
  slides[current].style.opacity = 0;
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
  slides[current].style.opacity = 1;
}, 4000);

// Envio WhatsApp
const whatsBtn = document.getElementById('whatsapp-btn');
const numero = '47999471966';
const urlApp = 'https://guilhermeglr.github.io/amorapp/'; // <- link da versão online
const mensagemTexto = `Oi vida, criei esse app para não deixar passar em branco.
Não é como um presente grandioso como você, mas fiz com muito carinho! 💖

✨ Veja com carinho aqui: ${urlApp}`;

const mensagem = encodeURIComponent(mensagemTexto);
whatsBtn.href = `https://wa.me/${numero}?text=${mensagem}`;
