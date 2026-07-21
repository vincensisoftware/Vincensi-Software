const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, Gleyson!

Meu nome é ${nome}.

📩 E-mail: ${email}
📱 Telefone: ${telefone}

📌 Assunto:
${assunto}

📝 Mensagem:
${mensagem}`;

    const numero = "5555999942064"; // Troque pelo seu número

    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`,
        "_blank"
    );
});

ScrollReveal({
    distance: "60px",
    duration: 1500,
    delay: 200,
    reset: false
});

ScrollReveal().reveal(".home-content", {
    origin: "left"
});

ScrollReveal().reveal(".home-img", {
    origin: "right"
});

ScrollReveal().reveal(".about-content, .service-box, .contact", {
    origin: "bottom",
    interval: 150
});