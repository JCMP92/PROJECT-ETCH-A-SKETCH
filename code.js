const container = document.querySelector('.grid-div-container');
const size = document.getElementById('size').value;

//CREATE DIVS / SIZE OF GRID-------------------------------------------------------------
function gridSize(colAndRow) {
    container.style.setProperty('--grid-rows', colAndRow);
    container.style.setProperty('--grid-columns', colAndRow);
        for (let i = 0; i < (colAndRow*colAndRow); i++) {
            let cell = document.createElement("div");
            cell.innerText = (i + 1);
            container.appendChild(cell).className = 'grid-cells'; 
        };
};

gridSize(size); //Only one value, beacuse it´s a square grid (all sides have the same size)


//RESTART-CLEAR BUTTON------------------------------------------------------------------
function restartGrid() {
    const gridDivs = container.querySelectorAll('div');
    gridDivs.forEach(gridElem => gridElem.classList.remove('color-black'));
}

    const clear = document.getElementById('clear');
    clear.addEventListener('click', restartGrid);  

//COLOR CHANGE--------------------------------------------------------------------------
function colorBlk() {      
    this.classList.add('color-black');
};

    const colorCh = container.querySelectorAll('div');
    colorCh.forEach(elem => elem.addEventListener('mouseover', colorBlk));
