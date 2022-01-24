const initialSize = 16;
const initialColor = "#000000";

let sizeValue = initialSize;
let colorValue = initialColor;

//SELECTORS------------------------------------------------------------------------------
const container = document.querySelector('.grid-div-container');
const sizeModifier = document.getElementById('size');
const clear = document.getElementById('clear');
const color = document.getElementById('base-color');


//EVENT LISTENERS-------------------------------------------------------------------------
sizeModifier.addEventListener('change', sizeSlider);
color.addEventListener('change',  colorSelector);
clear.addEventListener('click', reloadGrid); 


//GRID SIZE FUNCTIONS--------------------------------------------------------------------
function sizeSlider(e) {
    changeSize(e.target.value);
};
function changeSize(value) {
    setSize(value)
    reloadGrid()
};
function setSize(newValue) {
    sizeValue = newValue;
};



//RESTART-CLEAR FUNCTIONS------------------------------------------------------------------
function restartGrid() {
    container.innerHTML = '';
}
function reloadGrid() {
    restartGrid()
    gridSize(sizeValue)
  }
    

//CREATE DIVS / SIZE OF GRID-------------------------------------------------------------
function gridSize(colAndRow) {
    container.style.setProperty('--grid-rows', colAndRow);
    container.style.setProperty('--grid-columns', colAndRow);
        for (let i = 0; i < (colAndRow*colAndRow); i++) {
            let cell = document.createElement("div");
            cell.addEventListener('mouseover', gridColors);
            container.appendChild(cell).className = 'grid-cells'; 
        };
};

gridSize(sizeValue); //Only one value, beacuse it´s a square grid (all sides have the same size)

//COLOR SELECTION-----------------------------------------------------------------------
function colorSelector(e) {
    changeColor(e.target.value);   
};
function changeColor(value) {
    setColor(value)
}
function setColor(newColor) {
    colorValue = newColor;
}

//COLOR CHANGER-------------------------------------------------------------------------
function gridColors(e) {
    e.target.style.backgroundColor = colorValue;

}

