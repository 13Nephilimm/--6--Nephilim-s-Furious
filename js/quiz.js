"use strict";

// Quiz elements
const header = document.querySelector(".quiz-header");
const btnStart = document.querySelector(".btn-start");
const image = document.querySelector(".img-box");
const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".question");
const answerA = document.querySelector(".answer-1");
const answerB = document.querySelector(".answer-2");
const answerC = document.querySelector(".answer-3");
const answerD = document.querySelector(".answer-4");
let input = document.querySelector(".input");
const btnNext = document.querySelector(".btn-next");
const result = document.querySelector(".result");
const resultImg = document.querySelector(".result-img");
const resultText = document.querySelector(".result-text");
const resultImage = document.querySelector(".result-image");

const questions = [
  `1) Let's start with easy question... What was the Brian's first ever car in the Fast & Furious?`,
  `2) What is the name of the shop that Dom's family owned?`,
  `3) Which of these films does Vin Diesel not appear in?`,
  `4) What Was The Name Of Brian's Undercover Identity In The First Film?`,
  `5) What Did Brian Always Order At Toretto's Market & Cafe?`,
  `6) In Tokyo Drift, DK Had Ties To Which Criminal Organisation?`,
  `7) What Concept Car Is Used To Jump From The Etihad Tower In Furious 7?`,
  `8) In Chronological Order, Furious 7 Takes Place After Which Film?`,
  `9) Roman and Brian win a Camaro and a Challenger from two drivers in 2 Fast 2 Furious. Which nicknames does Roman give those drivers?`,
  `10) Which iconic painting is Han's Nissan Silvia S15 Spec-S nicknamed for in Tokyo Drift?`,
];

const answers = {
  1: [
    `A. Mitsubishi Eclipse (1995)`,
    `B. Toyota Supra (1994)`,
    `C. Nissan Skyline GT-R R34 (1998)`,
    `D. Subaru Brz (2013)`,
  ],
  2: [
    `A. Toretto's Stop and Shop`,
    `B. Toretto's Market & Cafe`,
    `C. Toretto's Groceries`,
    `D. L.A. Market`,
  ],
  3: [
    `A. The Fate of the Furious`,
    `B. The Fast and the Furious: Tokyo Drift`,
    `C. Fast 2 Furious `,
    `D. The Fast and the Furious`,
  ],
  4: [
    `A. Brian Earl Milner`,
    `B. Brian Earl Speilman`,
    `C. Brian Earl Spilner`,
    `D. Brian Earl Spellman`,
  ],
  5: [
    `A. Pizza, Extra Ketchup`,
    `B. Pastrami Sandwich, On Rye`,
    `C. Cheese Sandwich, No Crust`,
    `D. Tuna Sandwich, No Crust`,
  ],
  6: [`A. Triads`, `B. Yakuza `, `C. Yamagata`, `D. Yokohama`],
  7: [
    `A. W Sport Lycan Hypersport`,
    `B. Lamborghini Aventador`,
    `C. BMW M3 E46 GT-R`,
    `D. McLaren P1`,
  ],
  8: [
    `A. Fast Five`,
    `B. Fast and Furious 4`,
    `C. Fast and Furious: Tokyo Drift `,
    `D. Fast & Furious 6`,
  ],
  9: [
    `A. Spiderman and Batman`,
    `B. Spongebob and Patrick`,
    `C. Lorenzo and Giovanni`,
    `D. Fonzie and Fabio`,
  ],
  10: [
    `A. Venus of Urbino`,
    `B. Mona Lisa`,
    `C. Portrait of Madame X`,
    `D. The Kiss`,
  ],
};

const correctAnswersObj = {
  1: "a",
  2: "b",
  3: "c",
  4: "c",
  5: "d",
  6: "b",
  7: "a",
  8: "c",
  9: "d",
  10: "b",
};

let score = 0;
let currentQuestion = 1;
let firstScore = 0;

// Quiz Display
startGame();

// Quiz Functions
function startGame() {
  btnStart.addEventListener("click", function () {
    header.classList.add("hidden");
    btnStart.classList.add("hidden");
    image.classList.remove("hidden");
    quizContainer.classList.remove("hidden");
    nextQuestion(currentQuestion);
  });
}

const nextQuestion = (i) => {
  question.textContent = questions[i - 1];
  answerA.textContent = answers[i][0];
  answerB.textContent = answers[i][1];
  answerC.textContent = answers[i][2];
  answerD.textContent = answers[i][3];
};

btnNext.addEventListener("click", () => {
  if (input.value.toLowerCase() === correctAnswersObj[currentQuestion]) {
    score += 1;
  } else {
    score += 0;
  }

  input.value = null;
  currentQuestion++;
  if (currentQuestion == 11) {
    results();
  }
  nextQuestion(currentQuestion);
});

function results() {
  image.classList.add("hidden");
  quizContainer.classList.add("hidden");
  result.classList.remove("hidden");
  if (score <= 5) {
    resultImage.src = "/media/bad-result.jpg";
    resultText.textContent = setInterval(interval, 100);
  } else {
    resultImage.src = "/media/good-result.jpg";
    resultText.textContent = setInterval(interval, 100);
  }
}

function interval() {
  if (firstScore <= score) {
    resultText.textContent = `You Scored ${firstScore++}0%`;
  }
}
