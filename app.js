const choices = ["rock", "paper", "scissors"];

function game(){
    //Play 5 rounds of Rock, Paper, Scissors
    //It's Console based so no HTML or CSS
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();

}


function playerChoice(){
    //get input from player
    let input = prompt("Enter rock, paper, or scissors:").toLowerCase();
    input = input.toLowerCase();
    console.log(`Player choice: ${input}`);
    }

function computerChoice(){
    //get random choice from computer
    return choices[Math.floor(Math.random()* choices.length)];
}

game();