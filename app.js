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
    let input = prompt("Enter rock, paper, or scissors:");
    while(input == null){
        input = prompt("Please enter a valid choice: rock, paper, or scissors:");
    }
    input = input.toLowerCase();
    let check = valaidateInput(input)
    if (check == true){
        console.log("You chose: " + input);
    } else {
        // If the input is invalid, prompt again
        return playerChoice();
    }


    console.log(input);
    }

function computerChoice(){
    //get random choice from computer
    return choices[Math.floor(Math.random()* choices.length)];
}


function valaidateInput(input){
    if(choices.includes(input)){
        return true;
    }
    else{
        console.log("Invalid choice. Please try again.");
        return false;
    }
}
game();