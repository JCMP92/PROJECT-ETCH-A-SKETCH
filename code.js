const container = document.querySelector('.grid-div-container');

    function gridSize(columns, rows) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-columns', columns);
            for (let i = 0; i < (columns*rows); i++) {
                let cell = document.createElement("div");
                cell.innerText = (i + 1);
                container.appendChild(cell).className = "grid-cells";                
            };
    };

    gridSize(16, 16);

// const cells = document.querySelector('.grid-cells');
// cells.addEventListener('click', function () {
//     console.log('hi');
// })); Not working