//Abre e fecha menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//Quando clicar no menu esconder
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//Mudar sombra bottom do menu fixo ao dar o Scroll na pagina **Estético
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

//Swiper Carrousel
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  autoplay: {
    delay: 3000
  },
  mousewheel: true,
  keyboard: true
})

//ScrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1500,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links`,

  { interval: 100 }
)

/*Button Back to top */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top') //Pega o seletor do botão de subir

  if (this.window.scrollY >= 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*Cria uma função para sempre que usar o Scroll da pagina já chamar a função acima*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
