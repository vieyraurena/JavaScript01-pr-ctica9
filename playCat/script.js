/**
 * Eventos.
 * Ejemplo 7: Aplica el mismo handler a múltiples elementos.
 */

// Event handler: Esta función se ejecuta cuando el evento se dispara.
let grid = document.querySelectorAll('div');

let colorTurn = 'blue';
function changeColor(event) {
  if (colorTurn == 'blue'){
    colorTurn = 'red'
    event.currentTarget.style.backgroundColor = 'red';
  } else {
    colorTurn = 'blue';
    event.currentTarget.style.backgroundColor = 'blue';
  }
}

for (let index = 0; index < grid.length; index++) {
  grid[index].addEventListener('click', changeColor);
}

