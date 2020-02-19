let userScore = 0;
let computerScore = 0;

// DOM variables:
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result-message > h2');
const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');



// Function Declarations:

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} Beats ${computerChoice}. You Win!`;
    if(rock_div) {
        document.querySelector('#rock').classList.add('green-glow');
        setTimeout(function () {
            document.querySelector('#rock').classList.remove('green-glow');
        }, 1000);
    } else if (paper_div) {
        document.querySelector('#paper').classList.add('green-glow');
        setTimeout(function () {
            document.querySelector('#rock').classList.remove('green-glow');
        }, 1000);
    } else if (scissors_div){
        document.querySelector('#scissors').classList.add('green-glow');
        setTimeout(function () {
            document.querySelector('#rock').classList.remove('green-glow');
        }, 1000);
    }
    
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} Loses ${computerChoice}. You Lost!`;
    if(rock_div) {
        document.querySelector('#rock').classList.add('red-glow');
        setTimeout(function () {
            document.querySelector('#rock').classList.remove('red-glow');
        }, 1000);
    } else if (paper_div) {
        document.querySelector('#paper').classList.add('red-glow');
        setTimeout(function () {
            document.querySelector('#rock').classList.remove('red-glow');
        }, 1000);
    } else if (scissors_div){
        document.querySelector('#scissors').classList.add('red-glow');
        setTimeout(function () {
            document.querySelector('#rock').classList.remove('red-glow');
        }, 1000);
    }
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} Equals ${computerChoice}. It's a Draw!`;
    document.querySelector('#rock').classList.add('orange-glow');
    document.querySelector('#paper').classList.add('orange-glow');
    document.querySelector('#scissors').classList.add('orange-glow');
    if (rock_div) {
        document.querySelector('#rock').classList.add('orange-glow');
        setTimeout(function () {
            document.querySelector('#rock').classList.remove('orange-glow');
        }, 1000);
    } else if (paper_div) {
        document.querySelector('#paper').classList.add('orange-glow');
        setTimeout(function () {
            document.querySelector('#rock').classList.remove('orange-glow');
        }, 1000);
    } else if (scissors_div) {
        document.querySelector('#scissors').classList.add('orange-glow');
        setTimeout(function () {
            document.querySelector('#rock').classList.remove('orange-glow');
        }, 1000);
    }
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, computerChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, computerChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => {
        game('Rock');
    });

    paper_div.addEventListener('click', () => {
        game('Paper');
    });

    scissors_div.addEventListener('click', () => {
        game('Scissors');
    });
}


game("Rock");
main();