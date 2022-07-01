const username = document.querySelector("#username");
const classic = document.querySelector("#classic");
const bestOfThree = document.querySelector("#bo3");
const bestOfFive = document.querySelector("#bo5");
const playButton = document.querySelector(".play__button");
const buttons = document.querySelectorAll(".game__mode--button");

const menuStart = document.querySelector(".menu__start");
const menuContainer = document.querySelector(".menu__container");

let playerName = "";
let gameMode = "";

buttons.forEach(function (button) {
  button.addEventListener("click", chooseGameMode);
});

playButton.addEventListener("click", handlePlay);

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
  console.log(targetButton);
  targetButton.classList.add("selected");
}

//==== VERIFY AND PLAY ====//
function handlePlay() {
  setPlayerName();
  setGameMode();
  chooseScreen();

  console.log(playerName);
  console.log(gameMode);
}
//==== SET PLAYER NAME ====//
function setPlayerName() {
  if (username.value === "") {
    playerName = "player";
  } else {
    playerName = username.value;
  }
}
//==== SET GAME MODE ====//
function setGameMode() {
  buttons.forEach(function (button) {
    if (button.classList.contains("selected")) {
      gameMode = button.id;
    }
  });
}

function chooseScreen() {
  console.log("s");
  menuContainer.classList.add("left");
  menuStart.classList.add("disabled");
}
