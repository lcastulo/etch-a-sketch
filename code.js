//UI Inputs
const colorPicker = document.getElementById('colorPicker');
const colorMode = document.getElementById('colorModeBtn');
const rainbowMode = document.getElementById('rainbowModeBtn');
const eraserMode = document.getElementById('eraserBtn');
const clear = document.getElementById('clearBtn');
const grid = document.getElementById('grid');

colorPicker.onchange = (e) => setCurrentColor(e.target.value);
colorMode.onclick = () => setCurrentMode('color');
rainbowMode.onclick = () => setCurrentMode('rainbow');
eraserMode.onclick = () => setCurrentMode('eraser');
clear.onclick = () => reloadGrid();

// Default values of the grid
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333';
const DEFAULT_MODE = 'color';

// change the default values 
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor){
  currentColor = newColor;
}

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

//Colors multiple grid boxes when holding down mouse
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Sets up the grid and allows elements to change color on mouse press
function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add("grid-element");
    gridElement.addEventListener('mouseover', changeColor);
    gridElement.addEventListener('mousedown', changeColor);
    grid.appendChild(gridElement);
  }
}

function clearGrid() {
  grid.innerHTML = '';
}

function reloadGrid(){
  clearGrid();
  setupGrid(currentSize);
}

// changes the color mode of the grid on mouse press
function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown)
    return
  if(currentMode === 'rainbow'){
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === 'color'){
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = '#fefefe';
  }
}

function activateButton(newMode){
  if(currentMode === 'rainbow'){
    rainbowMode.classList.remove('active');
  } else if (currentMode === 'color'){
    colorMode.classList.remove('active');
  } else if (currentMode === 'eraser'){
    eraserMode.classList.remove('active');
  }
  if (newMode === 'rainbow') {
    rainbowMode.classList.add('active');
  } else if (newMode === 'color') {
    colorMode.classList.add('active');
  } else if (newMode === 'eraser') {
    eraserMode.classList.add('active');
  }
}

window.onload = () => {
  setupGrid(DEFAULT_SIZE);
  activateButton(DEFAULT_MODE);
}