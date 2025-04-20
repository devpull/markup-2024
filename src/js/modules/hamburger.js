(function() {

  const menuMobile = document.getElementById("main-nav-mobile");
  const hamburger = document.getElementById("hamburger");
  const menuMobileClose = document.getElementById("main-nav-mobile-close");

  if(!hamburger || !menuMobile || !menuMobileClose) {
    return;
  }

  hamburger.addEventListener('click', (e) => {
    menuMobile.style.display = 'block';
  });

  menuMobileClose.addEventListener('click', (e) => {
    menuMobile.style.display = 'none';
  });


})();