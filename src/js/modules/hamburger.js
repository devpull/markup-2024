(function () {
  const menuMobile = document.getElementById("main-nav-mobile");
  const hamburger = document.getElementById("hamburger");
  const menuMobileClose = document.getElementById("main-nav-mobile-close");
  const classNavOpen = 'h-nav-mobile-open';

  if (!hamburger || !menuMobile || !menuMobileClose) {
    return;
  }

  hamburger.addEventListener("click", (e) => {
    menuMobile.style.display = "block";
    document.body.classList.add(classNavOpen);
  });

  menuMobileClose.addEventListener("click", (e) => {
    menuMobile.style.display = "none";
    document.body.classList.remove(classNavOpen);
  });
})();
