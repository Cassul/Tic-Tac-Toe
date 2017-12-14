let board;
const board3 = document.getElementById('board3');
const board4 = document.getElementById('board4');
let counter = 0;
let crossesMoves = [];
let knotsMoves = [];
let winningCombinations;
const winningCombinations3 = [["1","2","3"],["4","5","6"],["7","8" , "9"], ["1", "5", "9"], ["3", "5", "7"], ["1", "4","7"], ["2", "5", "8"], ["3", "6", "9"]];
const winningCombinations4 = [["1","2","3"], ["5","6","7"], ["9","10","11"], ["13","14","15"], ["2","3","4"], ["6","7","8"], ["10","11","12"], ["14","15","16"], ["1","5","9"], ["2","6","10"], ["3","7","11"], ["4","8","12"], ["5","9","13"], ["6","10","14"], ["7","11","15"], ["8","12","16"], ["1","6","11"], ["5","10","15"], ["6","11","16"], ["2","7","12"], ["9","6","3"], ["10","7","4"], ["13","10","7"], ["14","11","8"]];
let winner;
let knotsWin = 0;
let crossesWin = 0;
let numberOfMoves;
const button = document.getElementById('close');
let player1;
let player2;
var myVar;
let numberOfCells;

function setBoard() {
	if (document.getElementById('grid1').checked) {
		board = document.querySelectorAll('.board4');
		changeBoards();
		winningCombinations = winningCombinations4;
		numberOfCells = 16;
	} else  {
		board = document.querySelectorAll('.board3');
		winningCombinations = winningCombinations3;
		numberOfCells = 9;
	}
	board.forEach(function(element) {
	element.addEventListener('click', todoClickHandler);
	});
}
	

function todoClickHandler(event) {
    clearTimeout(myVar);
	if (event.target.childNodes.length == 1) {
		counter++;
		if (counter % 2 == 0) {
			setTimer();
			var knots = document.createElement('img');
			knots.setAttribute('src', 'img/o.png');
			console.log(event.target);
			event.target.appendChild(knots);
			knotsMoves.push(event.target.id);
			checkCombination (knotsMoves, winningCombinations);
			whoseMove();
			if (winner=="Winner"){
				knotsWin++;
				alert('Winner is player2');
				cleanTheBoard();
				totalWins();
				whoseMove();
				counter = 0;
				clearTimeout(myVar);

			}
			if (knotsMoves.length + crossesMoves.length == numberOfCells && winner!="Winner") {
				alert('You both lost');
				cleanTheBoard();
				totalWins();
				whoseMove();
		        clearTimeout(myVar);

			}
		} else {
			setTimer();
			var crosses = document.createElement('img');
			crosses.setAttribute('src', 'img/x.png');
			event.target.appendChild(crosses);
			crossesMoves.push(event.target.id);
			checkCombination (crossesMoves, winningCombinations);
			whoseMove();
			if (winner=="Winner"){
				crossesWin++;
				alert('Winner is player1');
				cleanTheBoard();
				totalWins();
				whoseMove();
				counter = 1;
				clearTimeout(myVar);

			}
			if (knotsMoves.length + crossesMoves.length == numberOfCells && winner!="Winner") {
				alert('You both lost');
				cleanTheBoard();
				totalWins();
				whoseMove();
				clearTimeout(myVar);
			}
		}
	} else {
		alert('dont click cells twice, you idiot');
	}
}

window.onload = function () {
	writeOnPanel(knotsWin, ".panel2");
	writeOnPanel(crossesWin, ".panel1");
};

function totalWins () {
	    writeOnPanel(crossesWin, ".panel1");
		writeOnPanel(knotsWin, ".panel2");
	}

function writeOnPanel (text, whatPanel) {
	let line = document.createElement('p');
	let panel = document.querySelector(whatPanel);
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
				whatToCross = winningCombinations[i];
			}
		}
	}
}

function setTimer() {
	if (document.getElementById('2').checked) {
	document.getElementById('timer').innerHTML = 3;
	startTimer();
	} else if (document.getElementById('5').checked) {
	document.getElementById('timer').innerHTML = 6;
	startTimer();
	} else {
	document.getElementById('timer').innerHTML = "&#8734;";
	}
}

function startTimer() { 

		if (document.getElementById('timer').innerHTML>0) {
		document.getElementById('timer').innerHTML--;
		myVar = setTimeout(startTimer, 1000);
		} else {
		counter++;
		alert('times up! you lost your move');
		}
	
}
// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks on the button, open the modal 
window.onload = function() {
    modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
button.onclick = function() {
	player1 = document.getElementById('name1').value;
	player2  = document.getElementById('name2').value;
    modal.style.display = "none";
    setBoard();
    if (player1 && player2) {
    document.getElementById('playerName1').innerHTML = player1;
    document.getElementById('playerName2').innerHTML = player2;
}
};

function changeBoards () {
	board3.style.display = "none";
	board4.style.display = "block";
}

function whoseMove () {
	if (counter % 2 == 0) {
		console.log('hey');
		if(player1) {
		document.getElementById('go').innerHTML = player1 + " your move!";	
		} else {
		document.getElementById('go').innerHTML = "Player 1" + " your move!";			
		}	
	} else { 
		if (player2) {
		document.getElementById('go').innerHTML = player2 + " your move!";
		} else {
		document.getElementById('go').innerHTML = "Player 2" + " your move!";					
		}
	}
}
