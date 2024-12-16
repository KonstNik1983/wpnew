'use strict';

let guessingNumber;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

const mainCode = function () {
  guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber) {
    //document.querySelector('.guess-message').textContent = 'Введите число!';
    displayGuessMessage('Введите число!');
    document.querySelector('.guess-message').classList.add('text-color');

    // Player won
  } else if (guessingNumber === secretNumber) {
    //document.querySelector('.guess-message').textContent = 'Правильно!';
    displayGuessMessage('Правильно!');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.guess-message').classList.remove('text-color');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    document.querySelector('.guess-message').classList.remove('text-color');
    if (score > 1) {
      //document.querySelector('.guess-message').textContent =
      //  guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!';
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Game over!';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', function () {
  mainCode();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    mainCode();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';

  //document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';

  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
