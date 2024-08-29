document.getElementById("add-row").addEventListener("click", addRow);
document.getElementById("calculate").addEventListener("click", calculateArea);

function addRow() {
  const rowId = Math.random();
  const row = document.createElement("div");
  row.className = "calculation-row";
  row.id = rowId;
  row.innerHTML = `
        <input type="number" class="length-feet" placeholder="Length (Feet)">
        <input type="number" class="length-inches" placeholder="Length (Inches)">
        <input type="number" class="breadth-feet" placeholder="Breadth (Feet)">
        <input type="number" class="breadth-inches" placeholder="Breadth (Inches)">
        <button onclick="deleteRow(${rowId})">Delete</button>
    `;
  document.getElementById("calculation-rows").appendChild(row);
}

function deleteRow(id) {
  document.getElementById(id).style.display = "none";
  calculateArea();
}

function calculateArea() {
  let totalArea = 0;
  const rows = document.querySelectorAll(".calculation-row");
  rows.forEach((row) => {
    if (row.style.display !== "none") {
      const lengthFeet = parseFloat(
        row.querySelector(".length-feet").value || 0
      );
      const lengthInches = parseFloat(
        row.querySelector(".length-inches").value || 0
      );
      const breadthFeet = parseFloat(
        row.querySelector(".breadth-feet").value || 0
      );
      const breadthInches = parseFloat(
        row.querySelector(".breadth-inches").value || 0
      );

      const lengthTotalInches = lengthFeet * 12 + lengthInches;
      const breadthTotalInches = breadthFeet * 12 + breadthInches;

      const areaInSquareInches = lengthTotalInches * breadthTotalInches;
      const areaInSquareFeet = areaInSquareInches / 144;

      totalArea += areaInSquareFeet;
    }
  });

  document.getElementById(
    "total-area"
  ).innerText = `Total Area: ${totalArea.toFixed(2)} Square Feet`;
}
(function () {
  addRow();
})();
