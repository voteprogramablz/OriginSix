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
const navHeight = header.offsetHeight;

const changeHeaderWhenScroll = () => {
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
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
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
const windowHeight = window.innerHeight;

const handleBackToTop = () => {
  if (window.scrollY >= windowHeight) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

// Menu ativo conforme a seção visível na página

const sections = document.querySelectorAll("main section[id]");

const activateMenuAtCurrentSection = () => {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
};

const arrayOfScrollEvents = [
  handleBackToTop,
  changeHeaderWhenScroll,
  activateMenuAtCurrentSection,
];
// When scroll
for (const callback of arrayOfScrollEvents) {
  window.addEventListener("scroll", callback);
}
