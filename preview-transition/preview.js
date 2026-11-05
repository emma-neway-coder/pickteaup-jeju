(() => {
  const scene = document.querySelector('.scene');
  const button = document.querySelector('.open-button');
  const label = document.querySelector('.scene-label');
  const cover = document.querySelector('.case');
  const inside = document.querySelector('.inside');
  const visual = document.querySelector('.scene-visual');
  let opened = false;
  const setOpen = (value) => {
    opened = value;
    scene.dataset.state = value ? 'open' : 'closed';
    button.setAttribute('aria-expanded', String(value));
    button.innerHTML = value ? '지함 표지 다시 보기 <span aria-hidden="true">↺</span>' : '지함 안을 살펴보기 <span aria-hidden="true">↗</span>';
    if (label) label.textContent = value ? '02 / 안에 담긴 것들' : '01 / 지함을 만나다';
    cover.setAttribute('aria-hidden', String(value));
    inside.setAttribute('aria-hidden', String(!value));
    visual.setAttribute('aria-pressed', String(value));
    visual.setAttribute('aria-label', value ? '지함 표지 다시 보기' : '지함 안을 살펴보기');
  };
  setOpen(false);
  button.addEventListener('click', () => setOpen(!opened));
  visual.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover)').matches) setOpen(true);
  });
  visual.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover)').matches) setOpen(false);
  });
  visual.addEventListener('click', (event) => {
    if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover)').matches) setOpen(!opened);
  });
  visual.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(!opened);
    }
  });
})();
