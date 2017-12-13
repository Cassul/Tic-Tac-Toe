const field = document.querySelectorAll('.col-sm');
let counter = 0;
let crossesMoves = [];
let knotsMoves = [];
const winningCombinations = [["1","2","3"],["4","5","6"],["7","8" , "9"], ["1", "5", "9"], ["3", "5", "7"], ["1", "4","7"], ["2", "5", "8"], ["3", "6", "9"]];
let winner;
let info;
let knotsWin = 0;
let crossesWin = 0;
let numberOfMoves;

field.forEach(function(element) {
	element.addEventListener('click', todoClickHandler);
});

function todoClickHandler(event) {
	if (event.target.childNodes.length == 1) {
		counter++;
		if (counter % 2 == 0) {
			var cross = document.createElement('img');
			cross.setAttribute('src', 'img/o.png');
			event.target.appendChild(cross);
			writeOnPanel("Player1 made move " + counter);
			crossesMoves.push(event.target.id);
			checkCombination (crossesMoves, winningCombinations);
			if (winner=="Winner"){
				knotsWin++;
				alert('Winner knots');
				cleanTheBoard();
				totalWins();
			}
			if (knotsMoves.length + crossesMoves.length == 9 && winner!="Winner") {
				alert('You both lost');
				cleanTheBoard();
				totalWins();
			}
		} else {
			var knot = document.createElement('img');
			knot.setAttribute('src', 'img/x.png');
			event.target.appendChild(knot);
			writeOnPanel("Player2 made move " + counter);
			knotsMoves.push(event.target.id);
			checkCombination (knotsMoves, winningCombinations);
			if (winner=="Winner"){
				crossesWin++;
				alert('Winner crosses');
				cleanTheBoard();
				totalWins();
			}
			if (knotsMoves.length + crossesMoves.length == 9 && winner!="Winner") {
				alert('You both lost');
				cleanTheBoard();
				totalWins();
			}
		}
	} else {
		alert('dont click cells twice, you idiot');
	}
}

window.onload = writeOnPanel("Player 1 plays crosses" + "\n" + "Player2 plays knots");

function totalWins () {
	writeOnPanel("Crosses" + "\n" + "total wins: " + crossesWin + "\n" + "Knotes" + "\n" + "total wins: " + knotsWin);
	}

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
	crossesMoves = [];
	knotsMoves = [];
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

function hasImage(id) {
    var childElements = document.getElementById(id).childNodes;
    for (var i = 0; i < childElements.length; i++) {
        if (childElements[i].localName != null && childElements[i].localName.toLowerCase() == "img") {
            if (childElements[i].getAttribute('src') != null && childElements[i].getAttribute('src').toLowerCase() == "img.jpg") {
                return true;
            }
        }
    }
    return false;
}