const field = document.querySelectorAll('.col-sm');
let counter = 1;
let crossesCombinations = [];
let knotsCombinations = [];
const winningCombinations = [["1","2","3"],["4","5","6"],["7","8" , "9"], ["1", "5", "9"], ["3", "5", "7"], ["1", "4","7"], ["2", "5", "8"], ["3", "6", "9"]];
let winner;

function todoClickHandler(event) {
	counter++;
	if (counter % 2 != 0) {
		var cross = document.createElement('img');
		cross.setAttribute('src', 'o.png');
		event.target.appendChild(cross);
		crossesCombinations.push(event.target.id);
		checkCombination (crossesCombinations, winningCombinations);
		if (winner=="Winner"){
			alert('Winner knots');
		}
	} else {
		var knot = document.createElement('img');
		knot.setAttribute('src', 'x.png');
		event.target.appendChild(knot);
		knotsCombinations.push(event.target.id);
		checkCombination (knotsCombinations, winningCombinations);
		if (winner=="Winner"){
			alert('Winner crosses');
		}
	}
}
field.forEach(function(element) {
	element.addEventListener('click', todoClickHandler);
});

function checkCombination (whatToCheck, winningCombinations) {
	
	for (let i=0; i<winningCombinations.length; i++) {
		let counter = 0;
		for (let k=0; k<3; k++){
			if(whatToCheck.indexOf(winningCombinations[i][k]) != -1) {
				counter++;
			}
			if (counter == 3) {
				winner = "Winner";
			}
		}
	}
}
