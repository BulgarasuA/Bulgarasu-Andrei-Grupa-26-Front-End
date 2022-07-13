var user;
var userScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function () {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
};

function selectChoice() {
  user = this.id;
  document.getElementById("your-choice").src = user + ".png";

  //random for oppponent
  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  //check for winner
  if (user == opponent) {
    userScore += 1;
    opponentScore += 1;
    alert("Tie");
  } else {
    if (user == "rock") {
      if (opponent == "scissors") {
        userScore += 1;
        alert("User Win");
      } else if (opponent == "paper") {
        opponentScore += 1;
        alert("Opponent Win");
      }
    } else if (user == "scissors") {
      if (opponent == "paper") {
        userScore += 1;
        alert("User Win");
      } else if (opponent == "rock") {
        opponentScore += 1;
        alert("Opponent Win");
      }
    } else if (user == "paper") {
      if (opponent == "rock") {
        userScore += 1;
        alert("User Win");
      } else if (opponent == "scissors") {
        opponentScore += 1;
        alert("Opponent Win");
      }
    }
  }

  document.getElementById("your-score").innerText = userScore;
  document.getElementById("opponent-score").innerText = opponentScore;
}
