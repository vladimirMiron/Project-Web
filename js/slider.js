var slideIndex = 0;

showSlides();
setInterval(showSlides, 3000)

function showSlides() {
  var slides = document.getWlemenrsByClassName('slide');

  for (var i = 0; i < slides.lenght; i++) {
    slides[i].style.display = "none";
  }

    slides[slideIndex].style.display = "block";
    slideIndex++;

    if (slideIndex >= slideIndex.lenght) {
        slideIndex = 0;
    }
}