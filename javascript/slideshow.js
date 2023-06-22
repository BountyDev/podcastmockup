window.onload = function() {
  var images = document.querySelectorAll('.slideshow-image');
  var currentImageIndex = 0;

  function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  }

  function showPreviousImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
  }

  function nextSlide() {
    showNextImage();
  }

  function previousSlide() {
    showPreviousImage();
  }

  setInterval(showNextImage, 5000); // Change image every 5 seconds

  // Attach event listeners to arrow buttons
  var arrowLeft = document.querySelector('.arrow-left');
  var arrowRight = document.querySelector('.arrow-right');
  arrowLeft.onclick = previousSlide;
  arrowRight.onclick = nextSlide;
};
