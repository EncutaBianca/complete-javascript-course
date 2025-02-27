'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number! 🤞';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = document.querySelector('.highscore');
let score = 20;
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ⛔';
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent =
      'You guessed the number! ✅';
    highScore.textContent = score;
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 😢';
      document.querySelector('body').style.backgroundColor = '#e84343';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 😢';
      document.querySelector('body').style.backgroundColor = '#e84343';
      document.querySelector('.score').textContent = 0;
    }
  }
});

let gameOver = true;
const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function () {
  if (gameOver) {
    document.querySelector('.score').textContent = 20;
  }
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
});
