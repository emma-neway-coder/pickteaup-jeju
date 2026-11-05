(() => {
  const card = document.getElementById('flavor-1');
  if (!card) return;
  card.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch' || event.pointerType === 'pen') {
      card.classList.add('is-dawn-lit');
    }
  });
  const clear = () => card.classList.remove('is-dawn-lit');
  window.addEventListener('pointerup', clear);
  window.addEventListener('pointercancel', clear);
  window.addEventListener('blur', clear);
})();
