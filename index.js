let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector(".result");
const avocadoDiv = document.getElementById('avocado');
const beerDiv = document.getElementById('beer');
const latteDiv = document.getElementById('latte');

function getComputerChoice() {
  const choices = ["avocado", "beer", "latte"];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function formatResult(result) {
  if (result === "avocado") return "Avocado";
  if (result === "beer") return "Craft beer";
  if (result === "latte") return "Latte";
}

function formatSecondResult(result) {
  if (result === "beer") return "craft beer";
  return result;
}

function userWins(user, computer) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = `${formatResult(user)} defeats ${formatSecondResult(computer)}. You win!`;
}

function userLoses(user, computer) {
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  userScoreSpan.innerHTML = userScore;
  resultDiv.innerHTML = `${formatResult(computer)} defeats ${formatSecondResult(user)}. You lose!`;
}

function itsADraw(user, computer) {
  userScore++;
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  userScoreSpan.innerHTML = userScore;
  resultDiv.innerHTML = `The virtual hipster also chose ${formatSecondResult(computer)}. It's a draw. Play again!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "latteavocado":
    case "beerlatte":
    case "avocadobeer":
      userLoses(userChoice, computerChoice);
      break;
    case "avocadolatte":
    case "lattebeer":
    case "beeravocado":
      userWins(userChoice, computerChoice);
      break;
    case "avocadoavocado":
    case "lattelatte":
    case "beerbeer":
      itsADraw(userChoice, computerChoice);
      break;
  }
}


function initialize() {
  avocadoDiv.addEventListener('click', function() {
    game("avocado");
  })

  beerDiv.addEventListener('click', function() {
    game("beer");
  })

  latteDiv.addEventListener('click', function() {
    game("latte");
  })
}

initialize();
