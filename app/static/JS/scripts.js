let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel-image");
  const totalSlides = slides.length;

  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  const offset = -currentIndex * 100;

  document.querySelector(
    ".carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}

// Initialize carousel
moveSlide(0);
