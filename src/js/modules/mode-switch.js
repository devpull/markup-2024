(() => {

  const modeSwitch = document.getElementById('mode-switch');
  const modeSwitchMobile = document.getElementById('mode-switch-mobile');

  if(!modeSwitch || !modeSwitchMobile) {
    return;
  }

  modeSwitch.addEventListener('click', toggleMode);
  modeSwitchMobile.addEventListener('click', toggleMode);


  function toggleMode(e) {
    if(e.target.checked) {
      document.body.setAttribute('data-mode', 'dark');
    } else {
      document.body.removeAttribute('data-mode');
    }
  }
})();
