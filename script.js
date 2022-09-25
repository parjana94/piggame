'use strict';

let currentFirst = document.querySelector('#current--0');
let currentSecond = document.querySelector('#current--1');
let scoreFirst = document.querySelector('#score--0');
let scoreSecond = document.querySelector('#score--1');
const newGame = document.querySelector('.btn--new');
const start = function () {
  scoreFirst.innerHTML = '0';
  scoreSecond.innerHTML = '0';
  currentFirst.innerHTML = '0';
  currentSecond.innerHTML = '0';
  number = 0;
  sum1 = 0;
  if (!player1.classList.contains('player--active')) {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }
};
const hold = document.querySelector('.btn--hold');
const rollDice = document.querySelector('.btn--roll');
let number;
let sum1 = 0;
let playerScore1 = 0;
let sum2 = 0;
let playerScore2 = 0;
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

//new game
scoreFirst.innerHTML = '0';
scoreSecond.innerHTML = '0';
newGame.addEventListener('click', start);

//roll dice
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    number = Math.floor(Math.random() * 6 + 1);
    sum1 += number;
    currentFirst.innerHTML = sum1;
    //dice pictures
    if (number === 1) {
      document.querySelector('.dice').src = 'dice-1.png';
      currentFirst.innerHTML = '0';
      number = 0;
      sum1 = 0;
      if (player1.classList.contains('player--active')) {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
      } else if (player2.classList.contains('player--active')) {
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
      }
    } else if (number === 2) {
      document.querySelector('.dice').src = 'dice-2.png';
    } else if (number === 3) {
      document.querySelector('.dice').src = 'dice-3.png';
    } else if (number === 4) {
      document.querySelector('.dice').src = 'dice-4.png';
    } else if (number === 5) {
      document.querySelector('.dice').src = 'dice-5.png';
    } else if (number === 6) {
      document.querySelector('.dice').src = 'dice-6.png';
    }
  } else if (
    document.querySelector('.player--1').classList.contains('player--active')
  ) {
    number = Math.floor(Math.random() * 6 + 1);
    sum2 += number;
    currentSecond.innerHTML = sum2;
    //dice pictures
    if (number === 1) {
      document.querySelector('.dice').src = 'dice-1.png';
      currentSecond.innerHTML = '0';
      number = 0;
      sum2 = 0;
      if (player2.classList.contains('player--active')) {
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
      } else if (player1.classList.contains('player2--active')) {
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
      }
    } else if (number === 2) {
      document.querySelector('.dice').src = 'dice-2.png';
    } else if (number === 3) {
      document.querySelector('.dice').src = 'dice-3.png';
    } else if (number === 4) {
      document.querySelector('.dice').src = 'dice-4.png';
    } else if (number === 5) {
      document.querySelector('.dice').src = 'dice-5.png';
    } else if (number === 6) {
      document.querySelector('.dice').src = 'dice-6.png';
    }
  }
});
hold.addEventListener('click', function () {
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    playerScore1 += sum1;
    scoreFirst.innerHTML = playerScore1;
    currentFirst.innerHTML = '0';
    number = 0;
    sum1 = 0;
    if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else if (player2.classList.contains('player--active')) {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  } else if (
    document.querySelector('.player--1').classList.contains('player--active')
  ) {
    playerScore2 += sum2;
    scoreSecond.innerHTML = playerScore2;
    currentSecond.innerHTML = '0';
    number = 0;
    sum2 = 0;
    if (player2.classList.contains('player--active')) {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    } else if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }
  }
  if (playerScore1 >= 100) {
    player1.classList.add('player--winner');
  } else if (playerScore2 >= 100) {
    player2.classList.add('player--winner');
  }
});
