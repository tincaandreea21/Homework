let gameArray = ["rock", "paper", "scissors"];
document.getElementById("btn-play").addEventListener("click", play);
var computerScore = 0;
var userScore = 0;
var minWinnableScore = 2;
function play() {
  var computer = gameArray[Math.floor(Math.random() * gameArray.length)];
  var user = gameArray[Math.floor(Math.random() * gameArray.length)];
  var winner = "";
  if (computer === "rock" && user === "paper") {
    winner = `User wins`;
    userScore++;
  } else if (computer === "rock" && user === "scissors") {
    winner = `Computer wins`;
    computerScore++;
  } else if (computer === "paper" && user === "rock") {
    winner = `Computer wins`;
    computerScore++;
  } else if (computer === "paper" && user === "scissors") {
    winner = `User wins`;
    userScore++;
  } else if (computer === "scissors" && user === "paper") {
    winner = `Computer wins`;
    computerScore++;
  } else if (computer === "scissors" && user === "rock") {
    winner = `User wins`;
    userScore++;
  } else {
    winner = `It's a tie`;
  }
  document.getElementById("computer-text").innerHTML = `${computer}`;
  document.getElementById("user-text").innerHTML = `${user}`;
  document.getElementById("result").innerHTML = `${winner}!`;
  document.getElementById("computer-score").innerHTML = computerScore;
  document.getElementById("user-score").innerHTML = userScore;
  if (computerScore === minWinnableScore || userScore === minWinnableScore) {
    minWinnableScore++;
    document.getElementById(
      "btn-play"
    ).innerHTML = `Play ${minWinnableScore} out of ${
      minWinnableScore * 2 - 1
    }...`;
    document.getElementById("winner").innerHTML =
      computerScore > userScore ? `Computer wins` : `User wins`;
    document.getElementById("winner").style.visibility = "visible";
    document.getElementById("btn-restart").style.visibility = "visible";
  } else {
    document.getElementById("btn-play").innerHTML = "Play Again ...";
    document.getElementById("btn-restart").style.visibility = "hidden";
    document.getElementById("winner").style.visibility = "hidden";
  }
  document.getElementById("btn-restart").addEventListener("click", restart);
  function restart() {
    computer = gameArray[Math.floor(Math.random() * gameArray.length)];
    user = gameArray[Math.floor(Math.random() * gameArray.length)];
    winner = "";
    computerScore = 0;
    userScore = 0;
    minWinnableScore = 2;
    document.getElementById("btn-restart").style.visibility = "hidden";
    document.getElementById("winner").style.visibility = "hidden";
    document.getElementById("btn-play").innerHTML = "Play";
    document.getElementById("result").innerHTML = `${winner}`;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("user-score").innerHTML = userScore;
  }
}
