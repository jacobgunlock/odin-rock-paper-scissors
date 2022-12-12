let selection;
function getSelection() {
    selection = prompt("rock paper scissors?").toUpperCase();
    if (selection !== "ROCK" && selection !== "PAPER" && selection !== "SCISSORS" || selection == "") {
        getSelection();
    } 
    console.log("You picked: " + selection);
}

let compSelection;
function getCompSelection(){
    compSelection = Math.floor(Math.random() * 3);
    switch (compSelection) {
        case 0:
            compSelection = "ROCK";
            break;
        case 1:
            compSelection = "PAPER";
            break;
        case 2:
            compSelection = "SCISSORS"
            break;
    }
    console.log("Computer picked: " + compSelection);
}

let outcome;
let userWins = 0;
let compWins = 0;
let rounds = 0;
function playRound(selection, compSelection) {
    if (selection == compSelection) {
        outcome = ("Its a tie!")
        return;
    }
    else if (selection == "ROCK" && compSelection == "PAPER"
    || selection == "PAPER" && compSelection == "SCISSORS"
    || selection == "SCISSORS" && compSelection == "ROCK") {
        outcome = (`${compSelection} beats ${selection}. Computer wins!`)
        compWins++;
        rounds++;
        return;
    } else {
        outcome = (`${selection} beats ${compSelection}. You win!`)
        userWins++;
        rounds++;
        return;
    }
}

let winner;
function game() {
    while (rounds != 5) {
        getSelection();
        getCompSelection();
        playRound(selection, compSelection);
        console.log(outcome);
    }
    if (userWins > compWins) {
        winner = ("You won!");
    } else {
        winner = ("Computer won!");
    }
    console.log(winner);
}

game();
