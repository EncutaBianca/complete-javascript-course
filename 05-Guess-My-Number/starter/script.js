'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number! 🤞';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number! ⛔');
  } else if (secretNumber === guess) {
    displayMessage('You guessed the number! ✅');
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game! 😢');
      document.querySelector('body').style.backgroundColor = '#e84343';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//My approach on resetting the game;
// let gameOver = true;

// const againBtn = document.querySelector('.again');
// againBtn.addEventListener('click', function () {
//   if (gameOver) {
//     document.querySelector('.score').textContent = 20;
//   }
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.message').textContent = 'Start guessing...';
// });

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
