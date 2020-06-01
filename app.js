const container = document.getElementById('container');
const colors = ['#B6EDDF', '#AA3A3A', '#3283B5', '#BA875E', '#D38DCC'];
const SQUARES_NR = 500;

for(let i=0; i<SQUARES_NR; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColorToEvent(square);
  });

  square.addEventListener('mouseout', () => {
    removeColorFromEvent(square);
  });

  container.appendChild(square);
}

function setColorToEvent(element) {
  const color = getRandomColors();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorFromEvent(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000000';
}

function getRandomColors() {
  return colors[Math.floor(Math.random() * colors.length)];
}



