const cursor = document.querySelector('.cursor');

const growCursor = () => {
  cursor.classList.add('is-down');
};

const shrinkCursor = () => {
  cursor.classList.remove('is-down');
};

document.addEventListener('mousedown', () => {
  growCursor();
});

document.addEventListener('mouseup', () => {
  shrinkCursor();
});
