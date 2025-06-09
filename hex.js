const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// ======select elements
const button = document.querySelector('#btn');
const body = document.querySelector('body');
const span = document.querySelector('.color');

// ===generate random hex colors form the array
// when we click the button
//== add event listener
//generate six random characters from hex 
function getRandomIndex() {
	const randomIndex = Math.floor(Math.random() * hex.length);
	return randomIndex;
}


// === add event listener
button.addEventListener('click', function () {

  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomHex = getRandomIndex();
    color += hex[randomHex];
    // convert number to base 16(test code)
    // color += hex[randomHex].toString(16);
    body.style.backgroundColor = color;
    span.textContent = color;
  }
}

);