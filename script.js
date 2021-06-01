const paletDiv = document.getElementById('color-palette');

function createColorsDiv(number) {
  for (let index = 1; index <= number; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.id = 'color' + index;
    paletDiv.appendChild(color);
  };
};
//2
createColorsDiv(4);
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
//3
function assignColor(color, colordiv) {
  colordiv.style.backgroundColor = color;
};
assignColor('black', color1);
assignColor('red', color2);
assignColor('blue', color3);
assignColor('green', color4);
//4
function createBoardDiv(number) {
  const box = document.createElement('div');
  box.id = 'pixel-board';
  document.body.appendChild(box);
  createPixels(number, box);
};
function createPixels(number, where) {
  for (let index = 1; index <= number; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.id = 'pixel' + index;
    if (index == 1) {
      createLine (1, where);
      const line = document.getElementById ('line' + index);
      line.appendChild(pixel);
    }
    else if ((index - 1) % (Math.sqrt (number)) == 0) {
      createLine (((((index - 1) / (Math.sqrt (number))) + 1)), where);
      const line = document.getElementById ('line' + (((index - 1) / (Math.sqrt (number))) + 1));
      line.appendChild(pixel); 
    }
    else {
      const line = document.getElementsByClassName ('line')[document.getElementsByClassName ('line').length - 1];
      line.appendChild(pixel);
    };
  };
};
function createLine(index, where) {
  const line = document.createElement ('div');
  line.className = 'line';
  line.id = 'line' + index;
  where.appendChild(line);
};
createBoardDiv(25);
//6
color1.className += ' selected';
//7
const color = document.getElementsByClassName('color');
for (element of color) {
  element.addEventListener('click', changeSelectedColor);
}
function changeSelectedColor(event) {
  for (element of color) {
    if (element.className.include = ' selected') {
      element.className = 'color';
    }
  }
  event.target.className += ' selected';
}
//8
const pixels = document.getElementsByClassName('pixel');
for (element of pixels) {
  element.addEventListener('click', changeColor);
};
function changeColor (event) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  const color = selectedColor.style.backgroundColor;
  event.target.style.backgroundColor = color;
};
//9
const clearButom = document.createElement ('button');
clearButom.classList = 'button';
document.body.appendChild(clearButom);
clearButom.addEventListener ('click', resetPixels);
function resetPixels () {
  for (element of pixels)
  element.style.backgroundColor = 'white';
};