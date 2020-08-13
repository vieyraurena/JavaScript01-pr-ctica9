function rgb () {
  let red = Math.floor(Math.random() * (256 - 0) + 0);
  let green = Math.floor(Math.random() * (256 - 0) + 0);
  let blue = Math.floor(Math.random() * (256 - 0) + 0);

  let color = ''
  color = `rgb(${red}, ${green}, ${blue})`;
  return color
}

const paragraph = document.querySelectorAll('p'); 

function changeColor (event){
  const colorRandom = event.currentTarget;
  colorRandom.style.color = rgb();
}

function beforeColor (event) {
  const black = event.currentTarget;
  black.style.color = 'black';
}

for (let index = 0; index < paragraph.length; index++) {
  paragraph[index].addEventListener('mouseenter', changeColor);
  paragraph[index].addEventListener('mouseleave', beforeColor);
}






