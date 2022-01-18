const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

// mudar o header da página ao dar scroll

const header = document.querySelector("#header");

const changeHeaderWhenScroll = () => {
  const navHeight = header.offsetHeight;

  if (this.window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
};

// Testimonials carousel slider swiper

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: false,
  keyboard: true,
});

// Scroll Reveal: mostrar elementos quando der scroll na pagina
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
);

// Botão voltar para o topo

const backToTopButton = document.querySelector(".back-to-top");

const handleBackToTop = () => {
  const windowHeight = window.innerHeight;

  if (window.scrollY >= windowHeight) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

const arrayOfScrollEvents = [handleBackToTop, changeHeaderWhenScroll];

for (const callback of arrayOfScrollEvents) {
  window.addEventListener("scroll", callback);
}
