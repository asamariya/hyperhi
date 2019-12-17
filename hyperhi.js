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

  // Which context is our canvas in? 2d or 3d?
  const context = canvas.getContext('2d');
  context.scale(dpi, dpi);

  context.fillStyle = 'red';
  context.strokeStyle = 'red';
  context.lineWidth = 80;
  context.lineCap = 'round';
  context.lineJoin = 'round';
};

// Start to draw
const startDraw = canvas => {
  const context = canvas.getContext('2d');
  context.fillStyle = 'yellow';
};

// Draw based on three things -> Canvas, X, Y
const moveDraw = (canvas, x, y) => {
  const context = canvas.getContext('2d');
  context.lineTo(x, y);
  context.stroke();
};

setupCanvas(canvasTag);

document.addEventListener('mousedown', () => {
  growCursor();
  startDraw(canvasTag);
});

document.addEventListener('mouseup', () => {
  shrinkCursor();
});

document.addEventListener('mousemove', e => {
  moveCursor(e.pageX, e.pageY);
  moveDraw(canvasTag, e.pageX, e.pageY);
});
