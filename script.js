const paletDiv = document.getElementById('color-palette');

function createColorsDiv(number) {
  for (let index = 1; index <= number; index += 1) {
    const color = document.createElement('div');
    color.className += 'color';
    color.id = 'color' + index;
    paletDiv.appendChild(color);
  };
};
function assignColor(color, colordiv) {
  colordiv.style.backgroundColor = color;
};

createColorsDiv(4);
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
assignColor('black', color1);
assignColor('red', color2);
assignColor('blue', color3);
assignColor('green', color4);