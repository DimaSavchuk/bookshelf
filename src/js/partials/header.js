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

// відкривання і закривання мобільної менюшки
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const navigation = document.querySelector('.header-nav');
  const authPerson = document.querySelector('.user-wrap.authorized');
  const signUpUser = document.querySelector('.user-sign-up');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

    mobileMenu.classList.toggle('is-open');
    openMenuBtn.classList.toggle('is-open');
    closeMenuBtn.classList.toggle('is-open');
    navigation.classList.toggle('mobile');
    authPerson.classList.toggle('mobile');
    signUpUser.classList.toggle('mobile');

    // const scrollLockMethod = !isMenuOpen
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('is-open');
    closeMenuBtn.classList.remove('is-open');
    navigation.classList.remove('mobile');
    authPerson.classList.remove('mobile');

    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();

// кінець коду для закривання мобільної менюшки
