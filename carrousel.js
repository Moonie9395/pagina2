let index = 0;
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides; // Ciclar el índice

  // Mover la pista para mostrar el slide correspondiente
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
  showSlide(index + 1); // Siguiente slide
});

document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
  showSlide(index - 1); // Anterior slide
});

// Cambiar automáticamente de slide cada 4 segundos
setInterval(() => {
  showSlide(index + 1); // Avanzar automáticamente
}, 4000);

// Iniciar en el primer video cuando la página cargue
window.addEventListener('load', () => {
  showSlide(0); // Iniciar en el primer video
});

// Mostrar el botón al hacer scroll
window.addEventListener('scroll', () => {
  const btn = document.getElementById('boton-arriba');
  if (window.scrollY > 200) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});

// Volver arriba con scroll suave
document.getElementById('boton-arriba').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
