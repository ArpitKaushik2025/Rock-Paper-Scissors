const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const msg = document.querySelector(".msg");
const youText = document.querySelector("#youText");
const compText = document.querySelector("#compText");
const btn = document.querySelector("#reset-btn");

let compScore = 0;
let youScore = 0;

// Generate You Choice

rock.addEventListener("click" , () => {
    msg.classList.remove("won", "lost");
    let youChoice = "rock";
    genCompChoice(youChoice);
});

paper.addEventListener("click" , () => {
    msg.classList.remove("won", "lost");
    let youChoice = "paper";
    genCompChoice(youChoice);
});

scissors.addEventListener("click" , () => {
    msg.classList.remove("won", "lost");
    let youChoice = "scissor";
    genCompChoice(youChoice);
});


// Generating Comp Choice

const genCompChoice = (x) => {
    options = ["rock" , "paper" , "scissor"];
    let compNumChoice = Math.floor(Math.random() * 3);
    let compChoice = options[compNumChoice];
    winner(x,compChoice);
};


// Win, Lose, Draw

const gameDraw = () => {
    msg.innerText = "Game is draw";    
};

const gameWon = () => {
    msg.innerText = "Congratulations!! You won the game!";
    youScore ++;
    youText.innerText = youScore;
    msg.classList.add("won");
};

const gameLost = () => {
    msg.innerText = "OOPS!! You got defeated.";
    compScore ++;
    compText.innerText = compScore;
    msg.classList.add("lost");
};


// Check winner

const winner = (a,b) => {    
    if (a === "rock"){
        if (b === "rock") {
            gameDraw();
        } else if (b === "scissor") {
            gameWon();
        } else {
            gameLost();
        }
    }

    if (a === "paper"){
        if (b === "paper") {
            gameDraw();
        } else if (b === "rock") {
            gameWon();
        } else {
            gameLost();
        }
    }

    if (a === "scissor"){
        if (b === "scissor") {
            gameDraw();
        } else if (b === "paper") {
            gameWon();
        } else {
            gameLost();
        }
    }
};


// Reset Game

btn.addEventListener ("click", () => {
    youScore = 0;
    compScore = 0;
    youText.innerText = "0";
    compText.innerText = "0";
    msg.innerText = "Make Your Move";
    msg.classList.remove("won", "lost");
});





