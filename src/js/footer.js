(() => {
  const refs = {
    openModalBtn: document.querySelector('.about-team-open-js'),
    closeModalBtn: document.querySelector('.about-team-close-js'),
    modal: document.querySelector('[data-modal]'),
    // ----------------Scroll block---------------
    bodyScroll: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
   if (refs && refs.closeModalBtn) {
  refs.closeModalBtn.addEventListener('click', toggleModal);
   }
  function toggleModal() {
    const isModalOpen =
    refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    refs.modal.classList.toggle('is-hidden');
    // ----------------Scroll block---------------
    refs.bodyScroll.classList.toggle('no-scroll');
    // refs.modal.addEventListener('keydown', onEscPress);
    const scrollLockMethod = !isModalOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);

    function onModalClose (evt) {
      // refs.modal.removeEventListener('keydown', onEscPress);
      refs.modal.classList.add('is-hidden');
    }

    refs.modal.addEventListener('click', onBackdropClick);
    function onBackdropClick (evt) {
      if(evt.currentTarget === evt.target) {
        onModalClose()
      }
    }

    // function onEscPress (evt) {
    //   console.log (evt.code)
    //   if (evt.code === 'Escape') {
    //     onModalClose()
    //   }
    // }
    
  }
})();
