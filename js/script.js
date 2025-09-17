function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getComputerChoice() {
    let computerChoice;
    let intermediate = Math.floor(Math.random() * 3);

    if (intermediate === 2) {
        return computerChoice = "scissors";
    } else if (intermediate === 1) {
        return computerChoice = "paper";
    } else if (intermediate === 0) {
        return computerChoice = "rock";
    } 
}

// function getHumanChoice() {
//     let humanChoice = prompt("Let's play... Rock, Paper, or Scissors?");
//     humanChoice = humanChoice.toLowerCase();

//     if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
//         console.log("Remember, pick one of 3 choices: Rock, Paper, or Scissors!");
//         console.log("Try again!");
//         return "Refresh and try again!!!";
//     } else {
//         return humanChoice;
//     }
// }

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let round = 1

    const body = document.querySelector("body");
    body.style.backgroundColor = "silver";

    const options = document.createElement("div");

    const text = document.createElement("p");
    text.textContent = `I feel bored and lonely :(
                        Oh, I know! Would you like to play a game with me?         please, pretty please with a cherry on top 🥹
                        Is that a yes? you're the best 😘`;
    text.style.color = "blue";
    text.style.fontFamily = "ubuntu";

    body.appendChild(options);
    options.appendChild(text);

    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock!"
    rockBtn.style.margin = "5px";
    rockBtn.style.border = "solid black 1px";
    rockBtn.addEventListener("click", () => {
        let humanChoice = "rock";
        round += 1;
        playRound(humanChoice, round);
    });

    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper!";
    paperBtn.style.margin = "5px";
    paperBtn.style.border = "solid black 1px";
    paperBtn.addEventListener("click", () => {
        let humanChoice = "paper";
        round += 1;
        playRound(humanChoice, round);
    });

    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors!"
    scissorsBtn.style.margin = "5px";
    scissorsBtn.style.border = "solid black 1px";
    scissorsBtn.addEventListener("click", () => {
        let humanChoice = "scissors";
        round += 1;
        playRound(humanChoice, round);
    })

    

    options.append(rockBtn, paperBtn, scissorsBtn);

    const roundCount = document.createElement("div");
    roundCount.textContent = "Round: " + round;
    options.appendChild(roundCount);

    const results = document.createElement("div");
    results.textContent = "Results Board:";
    results.style.border = "solid black 2px";
    results.style.padding = "5px";
    results.style.color = "maroon";
    body.appendChild(results);

    const resultsMessage = document.createElement("p");
    results.appendChild(resultsMessage);



    function playRound(humanChoice, round, computerChoice) {


        //humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();


        if (((humanChoice == "rock") && (computerChoice == "rock")) ||
            ((humanChoice == "paper") && (computerChoice == "paper")) ||
            ((humanChoice == "scissors") && (computerChoice == "scissors"))) {
            resultsMessage.textContent = "It's a tie! You both picked " + capitalizeFirst(humanChoice) + ". No one gets a point...";
            resultsMessage.textContent += "\nYour score is " + humanScore + ". The computer's score is " + computerScore + "."; //tie instances

        } else if (((humanChoice == "rock") && (computerChoice == "scissors")) ||
            ((humanChoice == "paper") && (computerChoice == "rock")) ||
            ((humanChoice == "scissors") && (computerChoice == "paper"))) {
            humanScore = humanScore + 1;
            resultsMessage.textContent = "You picked " + capitalizeFirst(humanChoice) + ". The computer picked " + capitalizeFirst(computerChoice) + "!";
            resultsMessage.textContent += "\nYou got this round!";
            resultsMessage.textContent += "\nYour score is " + humanScore + ". The Computer's score is " + computerScore + "."; //human win instances.
        } else {
            computerScore = computerScore + 1;
            resultsMessage.textContent = "You picked " + capitalizeFirst(humanChoice) + ". The computer picked " + capitalizeFirst(computerChoice) + "!";
            resultsMessage.textContent += "\nComputer got this round!";
            resultsMessage.textContent += "\nYour score is " + humanScore + ". The Computer's score is " + computerScore + ".";
        }
        
        if (round < 6) {
            roundCount.textContent += "\nReady for the next round?";
        } else if (round === 6) {
            roundCount.textContent = "Round: " + round;
            results.textContent = "Final results: Human got " + humanScore + " points, and Computer got " + computerScore + " points.";

            if (humanScore > computerScore) {
                results.textContent = "Congratulations, the grand prize goes to you!!!";
                results.textContent += "\nFinal results: Human got " + humanScore + " points, and Computer got " + computerScore + " points.";
                return;
            } else if (humanScore < computerScore) {
                results.textContent = "Computer is the grand winner this time... better luck next time!";
                results.textContent += "\nFinal results: Human got " + humanScore + " points, and Computer got " + computerScore + " points.";
                return;
            } else {
                results.textContent = "It really is a tie... Why don't you guys try again to declare the champion?!";
                results.textContent += "\nFinal results: Human got " + humanScore + " points, and Computer got " + computerScore + " points.";
                return;
            }
        } else if (round > 6) {
            results.textContent = `I made it clear that the game is over -_- 
                                   If you want to play some more, go ahead and refresh the page to wake me up!`
        }

        roundCount.textContent = "Round: " + round;

    }

    

}

playGame();

