const colors = [
	'green',
	'red',
	'rgba(133,122,200)',
	'#f15025',
	`DarkSalmon`,
	`DarkSeaGreen`,
	`DarkSlateBlue`,
	`DarkSlateGray`,
	`DarkSlateGrey`,
	`DarkTurquoise`,
	`DarkViolet`,
	`DeepPink`,
	`DeepSkyBlue`,
	`DimGray`,
	`DimGrey`,
	`DodgerBlue`,
	`FireBrick`,
	`FloralWhite`,
	`ForestGreen`,
	`Fuchsia`,
	`Gainsboro`,
	`GhostWhite`,
	`Gold`,
	`GoldenRod`,
	`Gray`,

];

// ======select elements
const button = document.querySelector('#btn');
const body = document.querySelector('body');
const span = document.querySelector('.color');

// ===select random index
function getRandomIndex() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return randomIndex;
}

// ===add event listener
button.addEventListener('click', function () {
  const randomColor = getRandomIndex();
  body.style.backgroundColor = colors[randomColor];
  span.textContent = colors[randomColor];

});
