let activePlayer, currentScore, totalScore,  btnRoll, btnHold, firstScore, secondScore, firstCurrent, secondCurrent;

activePlayer = 0;
currentScore = 0;
scores = [0, 0];

btnRoll = document.querySelector('.btn--roll');

// Create this function in order to NOT repeat myself!
function nextPlayer () {
    document.getElementById('current--' + activePlayer).textContent = '0'
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    document.querySelector('.player--0-panel').classList.toggle('active')
    document.querySelector('.player--1-panel').classList.toggle('active')
}

function isTheWinner() {
    if (scores[activePlayer] >= 15) {
        document.getElementById('name--' + activePlayer).textContent = 'Winner!'
        gameRestart ()
    }
}

function gameRestart (){ 
    scores[0] = 0;
    scores[1] = 0;
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
}

// New Game Button Event
btnNewGame = document.querySelector('.btn--new');
btnNewGame.addEventListener('click', () => {
// Using the function to restart the game
    gameRestart ()
})

// Roll Dice Button Events
btnRoll.addEventListener('click', () => {
    // 1. Generate a random number
    let dice = Math.round(Math.random() * 5) + 1;

    // 2. Display that number in the dice image
    let diceImage = document.querySelector('.dice');
    diceImage.src = '/IMG/dice-' + dice + '.png'; 

    // 3. Update the round score IF, and just IF, the rolled number was NOT === 1
    if(dice !== 1) {
        // Add score
        scores[activePlayer] += dice;
        isTheWinner()

        // Update the UI
        document.getElementById('score--' + activePlayer).textContent = scores[activePlayer]; 
        document.getElementById('current--' + activePlayer).textContent = dice;
    } else {
        document.getElementById('score--' + activePlayer).textContent = '0'
        scores[activePlayer] = 0;
        nextPlayer();
    }
});

// Hold Button Event
btnHold = document.querySelector('.btn--hold')
btnHold.addEventListener('click', () => {
    nextPlayer();
})




 











