let selection;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener('click', () => {
    selection = "ROCK";
    document.getElementById('userSelection').innerHTML = `You Chose: ${selection}`
    getCompSelection();
});
paper.addEventListener('click', () => {
    selection = "PAPER";
    document.getElementById('userSelection').innerHTML = `You Chose: ${selection}`
    getCompSelection();
});
scissors.addEventListener('click', () => {
    selection = "SCISSORS";
    document.getElementById('userSelection').innerHTML = `You Chose: ${selection}`
    getCompSelection();
});


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
    document.getElementById('compSelection').innerHTML = `The Computer Chose: ${compSelection}`
    playRound(selection,compSelection);
}
let userWins = 0;
let compWins = 0;

function playRound(selection, compSelection) {
    let outcome = document.getElementById('outcome');
    //tie
    if (selection === compSelection) {
        outcome.innerHTML = "Its a tie!";
    }
    //comp wins
    else if (selection == "ROCK" && compSelection == "PAPER"
    || selection == "PAPER" && compSelection == "SCISSORS"
    || selection == "SCISSORS" && compSelection == "ROCK") {
        outcome.innerHTML = `${compSelection} beats ${selection}. Computer wins!`
        compWins++;
        document.getElementById('compScore').innerHTML = `Computer Score: ${compWins}`;
        checkWinner();
    //user wins
    } else {
        outcome.innerHTML = `${selection} beats ${compSelection}. You win!`
        userWins++;
        document.getElementById('userScore').innerHTML = "Your Score: " + userWins;
        checkWinner();
    }
}
function checkWinner(){
    if (userWins === 5) {
        document.getElementById('winner').innerHTML = 'You Won!'
        alert("You Won!")
    };
    if (compWins === 5) {
        document.getElementById('winner').innerHTML = 'Computer Won!'
        alert("Computer Won!")
    };
}


