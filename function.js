function findShip(y, x, square) {
    if (gameBoard[y][x] == 2 || gameBoard[y][x] == 3) {
        alert("Du har redan skjutit här!");
    }
    else if (gameBoard[y][x] == 1) {

        gameBoard[y][x] = 2;
        countHits();
        square.style.background = 'red';
    }
    else {

        gameBoard[y][x] = 3;
        countGuesses();
        square.style.background = 'gray';
    }
    return gameBoard;
}

function countHits() {
    hitCounter++;
    return hitCounter
}

function countGuesses() {
    gusseCounter++
    return gusseCounter;
}


function creatGameBoardContainer(row, col, gameBoardContainer) {
    for (i = 0; i < row; i++) {
        for (j = 0; j < col; j++) {


            let square = document.createElement("div");
            gameBoardContainer.appendChild(square);
            square.addEventListener("click", shootOnClick, false);
            square.style.background = 'blue';
            square.id = 's' + j + i;

            var topPosition = j * squareSize;
            var leftPosition = i * squareSize;

            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';
        }
    }
}

function shootOnClick() {

    let id = $(this).attr('id');
    let y = id[1];
    let x = id[2];
    let square = $(this)[0];
    findShip(y, x, square);

    if (hitCounter == 14) {
        alert("Grattis!");
    }
    else if (gusseCounter == 40) {
        alert("Du Förlora!");
    }
}


