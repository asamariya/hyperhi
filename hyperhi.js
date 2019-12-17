const cursor = document.querySelector('.cursor');
const canvasIn = document.querySelector('.in');
const canvasOut = document.querySelector('.out');

let isMouseDown = false;

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

  if (canvas.classList.contains('in')) {
    context.fillStyle = '#000000';
    context.strokeStyle = '#ffffff';
  } else {
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#000000';
  }

  context.lineWidth = 80;
  context.lineCap = 'round';
  context.lineJoin = 'round';

  context.rect(0, 0, w, h);
  context.fill();
};

// Start to draw
const startDraw = (canvas, x, y) => {
  const context = canvas.getContext('2d');

  // const colors = ['red', 'yellow', 'blue', 'green'];
  // const randomNum = Math.floor(Math.random() * colors.length);
  // context.strokeStyle = colors[randomNum];

  context.moveTo(x, y);
  context.beginPath();
};

// Draw based on three things -> Canvas, X, Y
const moveDraw = (canvas, x, y) => {
  const context = canvas.getContext('2d');
  if (isMouseDown) {
    context.lineTo(x, y);
    context.stroke();
  }
};

setupCanvas(canvasIn);
setupCanvas(canvasOut);

document.addEventListener('mousedown', e => {
  isMouseDown = true;
  growCursor();
  startDraw(canvasIn, e.pageX, e.pageY);
  startDraw(canvasOut, e.pageX, e.pageY);
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
  shrinkCursor();
});

document.addEventListener('mousemove', e => {
  moveCursor(e.pageX, e.pageY);
  moveDraw(canvasIn, e.pageX, e.pageY);
  moveDraw(canvasOut, e.pageX, e.pageY);
});
