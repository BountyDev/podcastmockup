window.addEventListener('load', function() {
  var loader = document.querySelector('.loading-animation');
  setTimeout(function() {
    loader.classList.add('loaded');
  }, 1000);
});
