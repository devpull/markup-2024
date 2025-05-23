(function () {
  const menuMobile = document.getElementById("main-nav-mobile");
  const hamburger = document.getElementById("hamburger");
  const menuMobileClose = document.getElementById("main-nav-mobile-close");
  const classNavOpen = 'h-nav-mobile-open';

  if (!hamburger || !menuMobile || !menuMobileClose) {
    return;
  }

  hamburger.addEventListener("click", (e) => {
    document.body.classList.add(classNavOpen);
    menuMobile.setAttribute('data-open', '');
  });

  menuMobileClose.addEventListener("click", (e) => {
    document.body.classList.remove(classNavOpen);
    menuMobile.removeAttribute('data-open');
  });
})();
