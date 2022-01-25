const initialSize = 16;
let sizeValue = initialSize;

const initialColor = "#000000";
let colorValue = initialColor;

const drawMode = 'color';
let chooseMode = drawMode;

//SELECTORS------------------------------------------------------------------------------
const container = document.querySelector('.grid-div-container');
const sizeModifier = document.getElementById('size');
const clear = document.getElementById('clear');
const color = document.getElementById('base-color');
const colorBtn = document.getElementById('color-picker');
const springBtn = document.getElementById('spring');
const summerBtn = document.getElementById('summer');
const fallBtn = document.getElementById('fall');
const winterBtn = document.getElementById('winter');
const erase = document.getElementById('erase');



//EVENT LISTENERS-------------------------------------------------------------------------
sizeModifier.addEventListener('change', sizeSlider);
color.addEventListener('change',  colorSelector);
clear.addEventListener('click', reloadGrid); 
colorBtn.addEventListener('click', colorMode); 
springBtn.addEventListener('click', springMode);
summerBtn.addEventListener('click', summerMode);
fallBtn.addEventListener('click', fallMode);
winterBtn.addEventListener('click', winterMode);
erase.addEventListener('click', eraseMode);



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
                var cell = document.createElement("div");
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
        setColor(value);
    };
    function setColor(newColor) {
        colorValue = newColor;
    };
    function colorMode() {
        setMode('color');
    };

//SPRING PALETTE------------------------------------------------------------------------
function springMode() {
    setMode('spring');
};

//SUMMER PALETTE------------------------------------------------------------------------
function summerMode() {
    setMode('summer');
};

//FALL PALETTE--------------------------------------------------------------------------
function fallMode() {
    setMode('fall');
};

//FALL PALETTE--------------------------------------------------------------------------
function winterMode() {
    setMode('winter');
};

//COLOR WHITE (ERASER)------------------------------------------------------------------
    function eraseMode() {
        setMode('erase');
    };



//COLOR CHANGER-------------------------------------------------------------------------
    function gridColors(e) {
        if (chooseMode === 'color') {
            e.target.style.backgroundColor = colorValue;
        } else if (chooseMode === 'erase') {
            e.target.style.backgroundColor = '#FFFFFF';
        }else if (chooseMode === 'spring') {
            const colors = ['#CCF6C8', '#FAFCC2', '#F6D6AD', '#F9C0C0'];
            e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }else if (chooseMode === 'summer') {
            const colors = ['#64C9CF', '#FDE49C', '#FFB830', '#FF2442'];
            e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }else if (chooseMode === 'fall') {
            const colors = ['#F9E4D4', '#D67D3E', '#9C0F48', '#470D21'];
            e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }else if (chooseMode === 'winter') {
            const colors = ['#1572A1', '#9AD0EC', '#EFDAD7', '#E3BEC6'];
            e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }
        
    };
    function setMode(newMode) {
        chooseMode   = newMode;
    };

