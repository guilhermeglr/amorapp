// Atualizar data e hora
document.getElementById('date').textContent = new Date().toLocaleDateString();

// Mensagem do dia dinâmica
const dailyMessages = [
  "Você é meu lugar favorito no mundo. 💕",
  "Te amo mais que tudo. 🌹",
  "Meu coração é seu para sempre. 💖",
  "Você ilumina meu dia como ninguém. 🥰",
  "Cada dia ao seu lado é especial. 💘"
];
document.getElementById('daily-message').addEventListener('click', () => {
  const message = dailyMessages[Math.floor(Math.random() * dailyMessages.length)];
  alert(message);
});

// WhatsApp botão funcional
const whatsBtn = document.getElementById('whatsapp-btn');
const numero = '47999471966';
const mensagemTexto = `Oi vida, criei este app para não deixar passar em branco. 💖`;
whatsBtn.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemTexto)}`;