(function() {
  const ToggleTabAll = document.getElementById('#tab-all');
  const ToggleTabAtoms = document.getElementById('#tab-atoms');
  const ToggleTabMolecules = document.getElementById('#tab-molecules');
  const ToggleTabOrganisms = document.getElementById('#tab-organisms');

  const cardsAll = document.querySelectorAll('.l-preview .l-preview__item');
  const cardsAtoms = document.querySelectorAll('.l-preview [data-type="atom"]');
  const cardsMolecules = document.querySelectorAll('.l-preview [data-type="molecule"]');
  const cardsOrganisms = document.querySelectorAll('.l-preview [data-type="organism"]');

  ToggleTabAll.addEventListener('click', () => {
    _showAll();
  })

  ToggleTabAtoms.addEventListener('click', () => {
    _hideAll();
    _showAtoms();
  });

  ToggleTabMolecules.addEventListener('click', () => {
    _hideAll();
    _showMolecules();
  });

  ToggleTabOrganisms.addEventListener('click', () => {
    _hideAll();
    _showOrganisms();
  });

  function _showAll() {
    cardsAll.forEach((el) => {
      el.style.display = 'initial';
    });
  }

  function _hideAll() {
    cardsAll.forEach((el) => {
      el.style.display = 'none';
    });
  }

  function _showAtoms() {
    cardsAtoms.forEach((el) => {
      el.style.display = 'initial';
    });
  }

  function _showMolecules() {
    cardsMolecules.forEach((el) => {
      el.style.display = 'initial';
    });
  }

  function _showOrganisms() {
    cardsOrganisms.forEach((el) => {
      el.style.display = 'initial';
    });
  }
})();