function CreateGrid() {
    const Sketch = document.querySelector('Right');
    let rowCount = 16;
    let gridtotal = rowCount * rowCount;
    let count = 0;

    Sketch.style.display = 'grid';
    Sketch.style.gridTemplateRows = `repeat(${rowCount}, 1fr)`;
    Sketch.style.gridTemplateColumns = `repeat(${rowCount}, 1fr)`;

    let row = 1;
    let column = 1;
    for (let i = 1; i <= gridtotal; i++) {

        console.log("grid section made, count: " + count);
        count += 1;
        var gridunit = document.createElement('gu');
        gridunit.style.border = '1px solid black';
        gridunit.id = count;
        gridunit.textContent = count;
        gridunit.style.gridRow = row;
        gridunit.style.gridColumn = column;
        column += 1;
        if (column === rowCount + 1 ) {
            row += 1;
            column = 1;
        }

        Sketch.appendChild(gridunit);

    }
}

CreateGrid();