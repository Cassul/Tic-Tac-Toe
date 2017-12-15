# Tic-Tac-Toe	

####Game is built using JavaScript and styled with Bootstrap

main core of a script - functions that triggered by user: 

1. by clicking on a close button on modal box(it's display: none but changes on window.load)
``` 
*Pseudocode*

button.onclick = function() {
	setImage();
    cleanTheBoard();
    changeBoards();
    clearTimeout(myVar);
    setBoard();
    totalWins ();
    setPlayersName();
    createAndSetAudioElement();
```
2. by clicking on a elements of a grid
``` 
*Pseudocode*

function todoClickHandler(clickedCell) {

    clearTimeout(myVar);
    //checking here if user is clicking the same cell twice
    //using global variable counter to set players turns - crosses turn on odd numbers, knots - on even
    document.createElement('img');
	img.setAttribute('src', source);
	clickedCell.appendChild(img);
	movesArray.push(event.target.id);      //creating an array where moves(represented by id of a clicked cell)
	checkCombination (movesArray, winningCombinations); //checking whether move resulted a win by looping and comparing contents of movesArray and winningCombinationArray(that array represents all possible winning combinations) 

	whoseMove(); //displays whose turn is now

			if (winner=="Winner"){         //as a result of checkCombination()
				totalScoreOfPLayer++;      //global variable
				alert('Winner is player2');
				cleanTheBoard();           //clean the board for a next play
				totalWins();			   //display total scores
				whoseMove();			   //display whose move
				counter = 0;			   //resets the moves counter	
				clearTimeout(myVar);	   //need to reset timer before the next player's move

			}
			if (knotsMoves.length + crossesMoves.length == numberOfCells && winner!="Winner") { //if all cells been clicked and no winner was announced
				alert('You both lost');
				cleanTheBoard();
				totalWins();
				whoseMove();
		        clearTimeout(myVar);

			}
	}
```
3. by clicking on a settings button
```
callM.onclick = function() {
    modal.style.display = "block";	
};										   //clicking settings shows modal box again
```
