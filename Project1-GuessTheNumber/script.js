/* Copyright 2021 Dinu Ion-Irinel */
"use strict";

/* create the secret number */
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let unknownNumber = document.querySelector(".unknown-number");
let checkButton = document.querySelector("#check-btn");
let inpuContent = document.querySelector("#input-area");
let message = document.querySelector("#info");
let bodyHtml = document.querySelector("body");
let livesArea = document.querySelector("#lives");
let lives = 20;
let maxHighScore = 0;
let resetButton = document.querySelector("#reset-game");

/* the function that check if number is low or high than secret number */
function checkSecretNumber(comparisonArgument) {
  if (comparisonArgument === "low") {
    if (lives > 1) {
      message.textContent = "Too low";
      lives--;
      livesArea.textContent = `Lives : ${lives}`;
    } else {
      message.textContent = "You lose the game";
      bodyHtml.style.backgroundColor = "#FF0000";
      lives = 0;
    }
  } else {
    if (lives > 1) {
      message.textContent = "Too high";
      lives--;
      livesArea.textContent = `Lives : ${lives}`;
    } else {
      message.textContent = "You lose the game";
      bodyHtml.style.backgroundColor = "#FF0000";
      lives = 0;
    }
  }
}
/* the function that check the logic of the game */
function checkLogic(inputNumber) {
  /* inputnumber is equal with the secret number */
  if (inputNumber === secretNumber) {
    unknownNumber.textContent = secretNumber;
    message.textContent = "Correct Number !";
    bodyHtml.style.backgroundColor = "#7FFF00";
    calculateHighScore(lives);
  }

  if (inputNumber < secretNumber) {
    checkSecretNumber("low");
  } else if (inputNumber > secretNumber) {
    checkSecretNumber("high");
  }
}
/* the logic of pressing check button */
checkButton.addEventListener("click", function () {
  const inputNumber = Number(inpuContent.value);
  checkLogic(inputNumber);
});

/* the logic of pressing reset game button */
resetButton.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  unknownNumber.textContent = "?";
  message.textContent = "Start Guessing !";
  lives = 20;
  livesArea.textContent = `Lives : ${lives}`;
  inpuContent.value = "";
  bodyHtml.style.backgroundColor = "#201f1f";
});

/* the logic of the highscore */
function calculateHighScore(currentHighScore) {
  let highScore = document.querySelector("#high-score");
  if (currentHighScore > maxHighScore) {
    maxHighScore = currentHighScore;
  }
  highScore.textContent = `HighScore : ${maxHighScore}`;
}
