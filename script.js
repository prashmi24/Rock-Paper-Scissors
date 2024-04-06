let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randChoice = Math.floor(Math.random() * 3); //3 since we have to generate no's b/w 0 to 2 as indices are frm 0 to 2.
  return options[randChoice];
};

const drawGame = () => {
  msg.innerText = "It's a Draw";
  msg.style.backgroundColor = "#00fff5";
  msg.style.color ="#222831";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = ` Congratulations, You won! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#367E18";
    msg.style.color ="white";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `Oops! Try Again. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#DF2E38";
    msg.style.color ="white";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});