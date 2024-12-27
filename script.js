let currentSlide = 0;

function startPresentation() {
  const slides = document.querySelectorAll('.slide');
  const presentation = document.querySelector('.presentation');
  const button = document.querySelector('button');

  button.style.display = 'none';
  presentation.style.display = 'block';

  function showSlide() {
    if (currentSlide > 0) slides[currentSlide - 1].style.display = 'none';
    if (currentSlide < slides.length) {
      slides[currentSlide].style.display = 'block';
      currentSlide++;
      setTimeout(showSlide, 4000);
    }
  }
  showSlide();
}
