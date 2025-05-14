let index = 0;
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides; 

 
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
  showSlide(index + 1); 
});

document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
  showSlide(index - 1); 
});


setInterval(() => {
  showSlide(index + 1); 
}, 4000);


window.addEventListener('load', () => {
  showSlide(0); 
});


window.addEventListener('scroll', () => {
  const btn = document.getElementById('boton-arriba');
  if (window.scrollY > 200) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});


document.getElementById('boton-arriba').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
