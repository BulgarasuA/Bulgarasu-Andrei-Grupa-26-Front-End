var Rock = 1;
var paper = 2;
var scissors = 3;
var play = ["Rock", "paper", "scissors"];

var Computer = Math.floor(Math.random() * play.length);
console.log("Computer choice: " + play[Computer]);
var User = Math.floor(Math.random() * play.length);
console.log("User choice: " + play[User]);

if (Computer < User) {
  console.log("User Wins !");
}
if (Computer > User) {
  console.log("Computer Wins !");
} else if (Computer === User) {
  console.log("Try again");
}
