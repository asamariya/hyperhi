const cursor = document.querySelector('.cursor');
const canvasTag = document.querySelector('.in');

const growCursor = () => {
  cursor.classList.add('is-down');
};

const shrinkCursor = () => {
  cursor.classList.remove('is-down');
};

const moveCursor = (x, y) => {
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
};

const setupCanvas = canvas => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const dpi = window.devicePixelRatio;

  canvas.width = w * dpi;
  canvas.height = h * dpi;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
};

setupCanvas(canvasTag);

document.addEventListener('mousedown', () => {
  growCursor();
});

document.addEventListener('mouseup', () => {
  shrinkCursor();
});

document.addEventListener('mousemove', e => {
  moveCursor(e.pageX, e.pageY);
});
