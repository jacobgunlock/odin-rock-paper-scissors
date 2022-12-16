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
    if (userWins < 5 && compWins < 5) {
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
        document.getElementById('compSelection').innerHTML = `Computer Chose: ${compSelection}`
        playRound(selection,compSelection);
    }
}
let userWins = 0;
let compWins = 0;

function playRound(selection, compSelection) {

    if (userWins < 5 && compWins < 5) {
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
}
function checkWinner(){
    if (userWins === 5) {
        document.getElementById('winner').innerHTML = 'You Won!';
        document.getElementById('winner').classList.remove('hidden');
        document.getElementById('reset').classList.remove('hidden');
    };
    if (compWins === 5) {
        document.getElementById('winner').innerHTML = 'Computer Won!'
        document.getElementById('winner').classList.remove('hidden');
        document.getElementById('reset').classList.remove('hidden')
    };
}

document.getElementById('reset').addEventListener('click', function reset(){
    userWins = 0;
    compWins = 0;
    document.getElementById('outcome').textContent = '';
    document.getElementById('compScore').innerHTML = "Computer Score: ";
    document.getElementById('userScore').innerHTML = "Your Score: ";
    document.getElementById('winner').innerHTML = '';
    document.getElementById('outcome').innerHTML = '';
    document.getElementById('userSelection').innerHTML = `You Chose: `
    document.getElementById('compSelection').innerHTML = `Computer Chose: `
    document.getElementById('reset').classList.add('hidden')
    document.getElementById('winner').classList.add('hidden');
})
