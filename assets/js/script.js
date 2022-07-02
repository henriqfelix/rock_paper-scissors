const username = document.querySelector("#username");
const classic = document.querySelector("#classic");
const bestOfThree = document.querySelector("#bo3");
const bestOfFive = document.querySelector("#bo5");
const playButton = document.querySelector(".play__button");
const backButton = document.querySelector(".back__button");
const buttons = document.querySelectorAll(".game__mode--button");

const menuStart = document.querySelector(".menu__start");
const menuContainer = document.querySelector(".menu__container");
const menuGame = document.querySelector(".menu__game");
const gameContainer = document.querySelector(".game__container");
const gameModeTitle = document.querySelector(".game__mode--choice");
const gamePoints = document.querySelectorAll(".game__point");
const gameButtons = document.querySelectorAll(".game__button");

let playerName = "";
let gameMode = "";
let playerChoice = "";
let computerChoice = "";
let playerRoundScore = "0";
let computerRoundScore = "0";
let playerScore = "0";
let computerScore = "0";

buttons.forEach(function (button) {
  button.addEventListener("click", chooseGameMode);
});

gameButtons.forEach(function (button) {
  button.addEventListener("click", setChoices);
});

playButton.addEventListener("click", handlePlay);
backButton.addEventListener("click", handleBack);

function chooseGameMode(e) {
  removeChoice();
  addChoice(e.target);
}

function removeChoice() {
  buttons.forEach(function (button) {
    button.classList.remove("selected");
  });
}

function addChoice(e) {
  const targetButton = e;
  targetButton.classList.add("selected");
}

//==== VERIFY AND PLAY ====//
function handlePlay() {
  setPlayerName();
  setGameMode();
  if (gameMode === "") return;
  setGameTemplate();
  goToGame();

  console.log(playerName);
  console.log(gameMode);
}

function handleBack() {
  resetVariables();
  backToMenu();
}

//==== SET PLAYER NAME ====//
function setPlayerName() {
  playerName = username.value === "" ? "player" : username.value;
}
//==== SET GAME MODE ====//
function setGameMode() {
  buttons.forEach(function (button) {
    if (button.classList.contains("selected")) gameMode = button.id;
  });
}

function setGameTemplate() {
  switch (gameMode) {
    case "classic": {
      gamePoints.forEach(function (gamePoint) {
        gamePoint.classList.remove("bo3");
        gamePoint.classList.remove("bo5");
        gamePoint.classList.add("classic");
      });
      gameModeTitle.innerHTML = "classic";
      goToGame();
      break;
    }
    case "bo3": {
      gamePoints.forEach(function (gamePoint) {
        gamePoint.classList.remove("classic");
        gamePoint.classList.remove("bo5");
        gamePoint.classList.add("bo3");
      });
      gameModeTitle.innerHTML = "best of three";
      goToGame();
      break;
    }
    case "bo5": {
      gamePoints.forEach(function (gamePoint) {
        gamePoint.classList.remove("classic");
        gamePoint.classList.remove("bo3");
        gamePoint.classList.add("bo5");
      });
      gameModeTitle.innerHTML = "best of five";
      goToGame();
      break;
    }
  }
}
//==== GO TO GAME SCREEN ====//
function goToGame() {
  menuContainer.classList.add("left");
  menuStart.classList.add("disabled");
  gameContainer.classList.add("enabled");
  menuGame.classList.add("enabled");
}

/*==== GAME SCREEN ====*/

//==== BACK TO MENU ====//
function backToMenu() {
  menuContainer.classList.remove("left");
  menuStart.classList.remove("disabled");
  gameContainer.classList.remove("enabled");
  menuGame.classList.remove("enabled");
}

function resetVariables() {
  playerName = "";
  gameMode = "";
}

function setChoices(e) {
  playerChoice = e.target.innerHTML;
  setComputerChoice();
}

function setComputerChoice() {
  randomChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  //rock = 1 | paper = 2 | scissors = 3
  switch (randomChoice) {
    case 1: {
      computerChoice = "rock";
      break;
    }
    case 2: {
      computerChoice = "paper";
      break;
    }
    case 3: {
      computerChoice = "scissors";
      break;
    }
  }
}
