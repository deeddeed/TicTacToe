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

function playerChoose() {
  let counter = gameBoard.length;
  let playerPicks = document.getElementsByClassName("gameBoard");

  for (let i = 0; i < playerPicks.length; i++) {
    playerPicks[i].addEventListener("click", (event) => {
       
        console.log(playerPicks[i].value);
        playerPicks[i].value = "X";
        
    });
  }

}
playerChoose();
