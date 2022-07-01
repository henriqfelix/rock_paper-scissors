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

let playerName = "";
let gameMode = "";

buttons.forEach(function (button) {
  button.addEventListener("click", chooseGameMode);
});

playButton.addEventListener("click", handlePlay);
backButton.addEventListener("click", handBack);

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
  chooseScreen();

  console.log(playerName);
  console.log(gameMode);
}

function handBack() {
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

function chooseScreen() {
  menuContainer.classList.add("left");
  menuStart.classList.add("disabled");
  gameContainer.classList.add("enabled");
  menuGame.classList.add("enabled");
}

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
