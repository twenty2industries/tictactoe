let fields = ["circle", null, "circle", "cross", "cross", "cross", null, null, null];

function init() {
  render();
}

function render() {
  let contentDiv = document.getElementById("content");
  let html = "<table>";

  for (let i = 0; i < 3; i++) {
    html += "<tr>";
    for (let j = 0; j < 3; j++) {
      let index = i * 3 + j;
      let symbol = fields[index];

      if (symbol === "circle") {
        html += `<td>${createCircleSVG("#00B0EF", 70, 70)}</td>`; // Hier wird die Farbe und Größe übergeben
      } else if (symbol === "cross") {
        html += `<td>${createCrossSVG("red", 70, 70)}</td>`;
      } else {
        html += "<td></td>";
      }
    }
    html += "</tr>";
  }

  html += "</table>";
  contentDiv.innerHTML = html;
}

function createCircleSVG(color, width, height) {
  const radius = Math.min(width, height) / 2 - 5; // kleiner machen wegen stroke
  const cx = width / 2;
  const cy = height / 2;

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <circle cx="${cx}" cy="${cy}" r="${radius}" stroke="${color}" stroke-width="5" fill="transparent">
        <animate attributeName="fill" from="transparent" to="${color}" dur="1s" fill="freeze" />
        <animateTransform attributeName="transform" type="rotate" from="0 ${cx} ${cy}" to="360 ${cx} ${cy}" dur="1s" fill="freeze" />
      </circle>
    </svg>
  `;
}

function createCrossSVG(color, width, height) {
  const lineLength = Math.min(width, height) - 10; // Länge der Linien
  const center = width / 2;

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <!-- Horizontale Linie (drehend) -->
      <line x1="0" y1="${center}" x2="${width}" y2="${center}" stroke="${color}" stroke-width="5">
        <animate attributeName="stroke" from="transparent" to="${color}" dur="1s" fill="freeze" />
        <animateTransform attributeName="transform" type="rotate" from="0 ${center} ${center}" to="45 ${center} ${center}" dur="1s" fill="freeze" />
      </line>
      <!-- Vertikale Linie (drehend) -->
      <line x1="${center}" y1="0" x2="${center}" y2="${height}" stroke="${color}" stroke-width="5">
        <animate attributeName="stroke" from="transparent" to="${color}" dur="1s" fill="freeze" />
        <animateTransform attributeName="transform" type="rotate" from="0 ${center} ${center}" to="45 ${center} ${center}" dur="1s" fill="freeze" />
      </line>
    </svg>
  `;
}

