const scrollBtn = document.querySelector('.js-scroll-up');
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.opacity = '1';
    scrollBtn.addEventListener('click', backToTop);
  } else {
    scrollBtn.style.opacity = '0';
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
