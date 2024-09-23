const hamburger = document.querySelector(".hamburguer");
const botãoNavegacao = document.querySelector("..navegação-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    botãoNavegacao.classList.toggle("active");
})