const field = document.querySelectorAll('.col-sm');
let counter = 0;
let crossesCombinations = [];
let knotsCombinations = [];
const winningCombinations = [["1","2","3"],["4","5","6"],["7","8" , "9"], ["1", "5", "9"], ["3", "5", "7"], ["1", "4","7"], ["2", "5", "8"], ["3", "6", "9"]];
let winner;

field.forEach(function(element) {
	element.addEventListener('click', todoClickHandler);
});

function todoClickHandler(event) {
	counter++;
	console.log('hey');

	if (counter % 2 == 0) {
		console.log('cross');
		var cross = document.createElement('img');
		cross.setAttribute('src', 'img/o.png');
		event.target.appendChild(cross);
		writeOnPanel("Player1 made move " + counter);
		crossesCombinations.push(event.target.id);
		checkCombination (crossesCombinations, winningCombinations);
		if (winner=="Winner"){
			alert('Winner knots');
			cleanTheBoard();
		}
	} else {
		console.log('knot');
		var knot = document.createElement('img');
		knot.setAttribute('src', 'img/x.png');
		event.target.appendChild(knot);
		writeOnPanel("Player1 made move " + counter);
		knotsCombinations.push(event.target.id);
		checkCombination (knotsCombinations, winningCombinations);
		if (winner=="Winner"){
			alert('Winner crosses');
			cleanTheBoard();
		}
	}
}

window.onload = writeOnPanel("Player 1 plays crosses" + "\n" + "Player2 plays knots");
function writeOnPanel (text) {
	let line = document.createElement('p');
	let panel = document.querySelector('.panel');
	panel.appendChild(line);
	line.textContent = text;
}

function cleanTheBoard () {
	let images = document.getElementsByTagName('img');
	while(images.length > 0) {
    images[0].parentNode.removeChild(images[0]);
	}
	let text = document.getElementsByTagName('p');
	while(text.length > 0) {
		text[0].parentNode.removeChild(text[0]);
	}
	crossesCombinations = [];
	knotsCombinations = [];
	counter = 0;
	winner = 0;
}


function checkCombination (whatToCheck, winningCombinations) {
	
	for (let i=0; i<winningCombinations.length; i++) {
		let counter1 = 0;
		for (let k=0; k<3; k++){
			if(whatToCheck.indexOf(winningCombinations[i][k]) != -1) {
				counter1++;
			}
			if (counter1 == 3) {
				winner = "Winner";
			}
		}
	}
}
