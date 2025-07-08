// WhatsApp button dynamic message
const whatsBtn = document.getElementById('whatsapp-btn');
const numero = '47999471966';
const urlApp = 'https://guilhermeglr.github.io/amorapp/';
const mensagemTexto = `Oi vida, criei esse app para não deixar passar em branco.
Não é como um presente grandioso como você, mas fiz com muito carinho! 💖

✨ Veja com carinho aqui: ${urlApp}`;

const mensagem = encodeURIComponent(mensagemTexto);
whatsBtn.href = `https://wa.me/${numero}?text=${mensagem}`;