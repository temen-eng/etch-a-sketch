let rowsAndColumns = 16;

const container = document.querySelector(".container");

function makeGrid() {
    for (let i = 0; i < rowsAndColumns; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);

        for (let j = 0; j < rowsAndColumns; j++) {
            const column = document.createElement("div");
            column.className = "column";
            row.appendChild(column);
        }
    }

    addHoverEffect(); // reattach events after rebuild
}

makeGrid();

function addHoverEffect() {
    const columns = document.querySelectorAll(".column");

    columns.forEach(column => {
        column.addEventListener("mouseenter", () => {
            column.classList.add("hovered");
        }, { once: true });
    });
}

function promptMe() {
    // 1. Ask user for input
    const gridNumber = parseInt(prompt("Enter grid size (e.g. 16)"));
    if (gridNumber > 100 || gridNumber < 1 || isNaN(gridNumber)) {
        alert("Min size is 1 and max size is 100, and should be a number.");
        return;
    }
    if (!gridNumber || gridNumber <= 0) return;

    // 2. Update grid size
    rowsAndColumns = gridNumber;

    // 3. Remove old grid
    container.innerHTML = "";

    // 4. Create new grid
    makeGrid();
}