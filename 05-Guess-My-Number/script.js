'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let prevHighScore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayScore = score => {
  document.querySelector('.score').textContent = score;
};
// console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No Number !');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    highScore = score;
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High !' : '📉 Too Low !');
      score--;
      displayScore(score);
    } else {
      document.querySelector('.message').textContent = '💥 You Lost !';
      displayScore(0);
    }
    // else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too High !';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You Lost !';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too Low !';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You Lost !';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
    if (highScore > prevHighScore) {
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.highscore').textContent = prevHighScore;
    }
    // document.querySelector('.score').textContent = score;
    // document.querySelector('.highscore').textContent = highScore;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

//Practice
// console.log((Math.ceil(Math.random()*20)));
/*
            console.log(document.querySelector('.message').textContent);
            document.querySelector('.message').textContent='🎉 Correct Number!';
            console.log(document.querySelector('.message').textContent);
            document.querySelector('.number').textContent=13;
            document.querySelector('.score').textContent=10;
            document.querySelector('.highscore').textContent=7;
            document.querySelector('.guess').value=23;
            console.log(document.querySelector('.guess').value);
            */
