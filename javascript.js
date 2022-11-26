game();

// gets the computer's choice for the rock paper scissors game

function getComputerChoice(){
    let computerChoiceNum;
    let computerChoice;
    computerChoiceNum = Math.floor(Math.random() * 3);
    if(computerChoiceNum == 0){
        computerChoice = "rock";
    }
    else if(computerChoiceNum == 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    return computerChoice;
}

// plays a single round of rock paper scissors
function playRound(computerInput, playerInput){
    let outcome;
    if((computerInput == "rock" && playerInput == "rock")|| (computerInput == "paper" && playerInput == "paper") || (computerInput == "scissors" && playerInput == "scissors")){
        console.log("It's a tie!");
        outcome = "tie";
    }
    else if(computerInput == "rock" && playerInput == "paper"){
        console.log("You win! Paper beats rock.");
        outcome = "win";
    }
    else if(computerInput == "rock" && playerInput == "scissors"){
        console.log("You lose. Rock beats scissors");
        outcome = "lose";
    }
    else if(computerInput == "paper" && playerInput == "rock"){
        console.log("You lose. Paper beats rock.");
        outcome = "lose";
    }
    else if(computerInput == "paper" && playerInput == "scissors"){
        console.log("You win. Scissors beats paper.");
        outcome = "win";
    }
    else if(computerInput == "scissors" && playerInput == "rock"){
        console.log("You win. Rock beats scissors.");
        outcome = "win";
    }
    else if(computerInput == "scissors" && playerInput == "paper"){
        console.log("You lose. Scissors beats paper.");
        outcome = "lose"
    }
    return outcome;
}

// plays five rounds of rock paper scissors and determines the winner
function game(){
    currentPlayerInput = "";
    currentComputerInput = "";
    currentOutcome = "";
    computerScore = 0;
    playerScore = 0;
    roundResult = "";
    for (let i = 0; i <5; i++){
        currentPlayerInput = prompt("Pick rock, paper, or scissors.").toLowerCase();
        currentComputerInput = getComputerChoice();
        currentOutcome = playRound(currentPlayerInput, currentComputerInput);
        if(currentOutcome == "lose"){
            alert("Computer wins.");
            computerScore++;
        }
        else if(currentOutcome == "win"){
            playerScore++;
            alert("You win.");
        }
        else{
            console.log("Try again.");
            alert("Tie.");
            i--;
        }
    }
    console.log("After 5 rounds the scores are as follows: ")
    console.log("Computer score: " + computerScore);
    console.log("Player score: " + playerScore);

    if(computerScore > playerScore){
        console.log("Computer wins!");
    }
    else {
        console.log("You win");
    }
}