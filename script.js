let answerYesBtn, answerNoBtn, btnRules, activePlayer, currentScore, totalScore,  btnRoll, btnHold, firstScore, secondScore, firstCurrent, secondCurrent;

activePlayer = 0;
currentScore = 0;
scores = [0, 0];
document.querySelector('.rules').classList.add('no-display')
document.querySelector('.btn--another-round').classList.add('hidden')

// Create these functions in order to NOT repeat myself!
function nextPlayer () {
    document.getElementById('current--' + activePlayer).textContent = '0'
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    document.querySelector('.player--0-panel').classList.toggle('active')
    document.querySelector('.player--1-panel').classList.toggle('active')
}
function isTheWinner() {
    if (scores[activePlayer] >= 15) {
        document.getElementById('name--' + activePlayer).textContent = 'WINNER!'        
        document.querySelector('.player--' + activePlayer + '-panel').classList.add('player--winner')
        document.querySelector('.player--' + activePlayer + '-panel').classList.remove('active')
        
        setTimeout( () => {
            document.querySelector('main').classList.add('main-hidden')
            document.querySelector('.btn--another-round').classList.remove('hidden')
            document.querySelector('.btn--another-round').classList.add('show')
        }, 2000);
    } 
}
function gameRestart (){ 
    document.querySelector('.player--' + activePlayer + '-panel').classList.remove('player--winner')
    document.querySelector('.player--' + activePlayer + '-panel').classList.add('active')
    document.getElementById('name--0').textContent = 'PLAYER 1'
    document.getElementById('name--1').textContent = 'PLAYER 2'
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    scores[0] = 0;
    scores[1] = 0;

}
function playAgain () {
    document.getElementById('name--0').textContent = 'PLAYER 1'
    document.getElementById('name--1').textContent = 'PLAYER 2'
    document.querySelector('main').classList.remove('main-hidden')
    document.querySelector('main').classList.add('show')
    document.querySelector('.btn--another-round').classList.remove('show')
    document.querySelector('.btn--another-round').classList.add('hidden')
}


answerYesBtn = document.querySelector('.yes');
answerNoBtn = document.querySelector('no');

// BUTTON | When there's a winner, the user decides if he/she wants to keep playing
answerYesBtn.addEventListener('click', () => {
    // If the user wants to play again 
    playAgain ()
    gameRestart()
})

// Rules Button Event
btnRules = document.querySelector('.rules');
btnRules.addEventListener('click', () => {
// Use to display the rules box

btnRules.classList.add('show')



// gameRestart ()
})

// Roll Dice Button Events
btnRoll = document.querySelector('.btn--roll');
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




 











