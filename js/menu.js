(() => {
  const bodyStopScroll = document.querySelector('[data-body]');
  const menuBtnRef = document.querySelector('[data-menu-button]');
  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    bodyStopScroll.classList.toggle('stop-scroll');
  });
})();
