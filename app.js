let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice= () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame= () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "blueviolet";
};

const showWinner= (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame= (userChoice) => {
    console.log("userChoice=", userChoice);
    // Generate Computer Choice
    const computerChoice = genComputerChoice();
    console.log("computerChoice=", computerChoice);

    if (userChoice === computerChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin =true;
        if (userChoice === "rock") {
            // scissor, paper
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

