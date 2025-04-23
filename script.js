let fields = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
]

function init() {
  render();
}

function render() {
  let contentDiv = document.getElementById('content');
  let html = '<table>';

  for (let i = 0; i < 3; i++) {
    html += '<tr>';
    for (let j = 0; j < 3; j++) {
      let index = i * 3 + j;
      let symbol = fields[index];

      if (symbol === 'circle') {
        html += '<td>O</td>';
      } else if (symbol === 'cross') {
        html += '<td>X</td>';
      } else {
        html += '<td></td>';
      }
    }
    html += '</tr>';
  }

  html += '</table>';
  contentDiv.innerHTML = html;
}