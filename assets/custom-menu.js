document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 990) return;

  const menuDetails = document.querySelectorAll(
    '.header__inline-menu details, .header__inline-menu details-disclosure details, .header__inline-menu header-menu details'
  );

  menuDetails.forEach((detail) => {
    let closeTimer;

    detail.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      detail.setAttribute('open', '');
    });

    detail.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        detail.removeAttribute('open');
      }, 120);
    });
  });
});