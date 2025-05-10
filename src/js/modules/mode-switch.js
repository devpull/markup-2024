(() => {

  const modeSwitch = document.getElementById('mode-switch');
  const modeSwitchMobile = document.getElementById('mode-switch-mobile');
  const html = document.querySelector('html');

  if(!modeSwitch || !modeSwitchMobile) {
    return;
  }

  modeSwitch.addEventListener('click', toggleMode);
  modeSwitchMobile.addEventListener('click', toggleMode);


  function toggleMode(e) {
    if(e.target.checked) {
      html.setAttribute('data-mode', 'dark');
    } else {
      html.removeAttribute('data-mode');
    }
  }
})();
