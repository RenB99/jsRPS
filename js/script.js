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

function getHumanChoice() {
    let humanChoice = prompt("Let's play... Rock, Paper, or Scissors?");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        console.log("Remember, pick one of 3 choices: Rock, Paper, or Scissors!");
        console.log("Try again!");
        return "Refresh and try again!!!";
    } else {
        return humanChoice;
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let round = 1

    function playRound(humanChoice, computerChoice) {

        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        if (((humanChoice == "rock") && (computerChoice == "rock")) ||
            ((humanChoice == "paper") && (computerChoice == "paper")) ||
            ((humanChoice == "scissors") && (computerChoice == "scissors"))) {
            console.log("It's a tie! You both picked " + capitalizeFirst(humanChoice) + ". No one gets a point...");
            console.log("Your score is " + humanScore + ". The computer's score is " + computerScore + "."); //tie instances

        } else if (((humanChoice == "rock") && (computerChoice == "scissors")) ||
            ((humanChoice == "paper") && (computerChoice == "rock")) ||
            ((humanChoice == "scissors") && (computerChoice == "paper"))) {
            humanScore = humanScore + 1;
            console.log("You picked " + capitalizeFirst(humanChoice) + ". The computer picked " + capitalizeFirst(computerChoice) + "!");
            console.log("You got this round!");
            console.log("Your score is " + humanScore + ". The Computer's score is " + computerScore + "."); //human win instances.
        } else {
            computerScore = computerScore + 1;
            console.log("You picked " + capitalizeFirst(humanChoice) + ". The computer picked " + capitalizeFirst(computerChoice) + "!");
            console.log("Computer got this round!");
            console.log("Your score is " + humanScore + ". The Computer's score is " + computerScore + ".")
        }
    }

    while (round < 5) {
        console.log("Round: " + round);
        playRound();
        console.log("Ready for the next round?")
        ++round;
    }
    if (round === 5) {
        console.log("Round: " + round);
        playRound();
        console.log("Final results: Human got " + humanScore + " points, and Computer got " + computerScore + " points.");
        if (humanScore > computerScore) {
            console.log("Congratulations, the grand prize goes to you!!!");
        } else if (humanScore < computerScore) {
            console.log("Computer is the grand winner this time... better luck next time!");
        } else {
            console.log("It really is a tie... Why don't you guys try again to declare the champion?!");
        }
        return;
    }
}

playGame();
