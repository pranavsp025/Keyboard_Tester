const keys = document.querySelectorAll('.key');

  document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    const keyElement = document.querySelector(`[data-key="${key}"]`);
    
    if (keyElement) {
      keyElement.classList.add('pressed');
    }
    
    if (keyElement) {
      event.preventDefault();
    }
  });

  document.addEventListener('keyup', event => {
    const key = event.key.toLowerCase();
    const keyElement = document.querySelector(`[data-key="${key}"]`);
    if (keyElement) {
      keyElement.classList.remove('pressed');
    }
  });

  keys.forEach(key => {
    key.addEventListener('click', () => {
      key.classList.add('pressed');
      setTimeout(() => {
        key.classList.remove('pressed');
      }, 100);
    });
  });