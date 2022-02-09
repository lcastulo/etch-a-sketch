//UI Inputs
const colorMode = document.getElementById('colorModeBtn');
const rainbowMode = document.getElementById('rainbowModeBtn');
const eraser = document.getElementById('eraserBtn');
const clear = document.getElementById('clearBtn');
const etchBox = document.getElementById('etchGrid');


const container = document.getElementById("gird-container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function makeRows (rowNum) {
  for (i = 0; i < rowNum; i++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  }
}

function makeColumns (cellNum){
  for(i = 0; i < rows.length; i++){
    for(j = 0; j < cellNum; j++){
      let column = document.createElement("div");
      container.appendChild(column).className = "cell";
    }
  }
}

function createGrid(){
  makeRows(16);
  makeColumns(16);
}