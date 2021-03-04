let firstCube = document.getElementById("first");
let secondCube = document.getElementById("second");
let thirdCube = document.getElementById("third");
let fourthCube = document.getElementById("fourth");
let fifthCube = document.getElementById("fifth");
let sixthCube = document.getElementById("sixth");
let seventhCube = document.getElementById("seventh");
let eighthCube = document.getElementById("eighth");
let ninthCube = document.getElementById("ninth");

const gameBoard = [
  firstCube,
  secondCube,
  thirdCube,
  fourthCube,
  fifthCube,
  sixthCube,
  seventhCube,
  eighthCube,
  ninthCube,
];
let playerPicks = document.getElementsByClassName("gameBoard");
let checkPlayerNr;

function playerChoose() {
  let counter = gameBoard.length;

  for (let i = 0; i < playerPicks.length; i++) {
    playerPicks[i].addEventListener("click", (event) => {
      playerPicks[i].classList.add("playerChoose");
      console.log("Player Choose Nr " + playerPicks[i].value);
      checkPlayerNr = playerPicks[i].value;
      playerPicks[i].value = "X";
      computerChoose();
    });
  }
  console.log("end");
}
playerChoose();

function computerChoose() {
  let randomNum = Math.floor(Math.random() * Math.floor(9));
  console.log("Computer choose Nr " + randomNum);
  if (randomNum !== checkPlayerNr) {
    playerPicks[randomNum].value = "O";
    playerPicks[randomNum].classList.add("computerChoose");
  }else{
    computerChoose();
  }
}
