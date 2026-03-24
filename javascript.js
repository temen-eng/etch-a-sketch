let rowsAndColumns = 16;

const container = document.querySelector(".container");

  function makeGrid() {
    for (i = 0; i < rowsAndColumns; i++) {
      const row = document.createElement("div");
      row.className = "row";
      container.appendChild(row);

      for (j = 0; j < rowsAndColumns; j++) {
        const column = document.createElement("div");
        column.className = "column";
        row.appendChild(column);
        column.textContent = j;
      }
    }
  }

makeGrid();