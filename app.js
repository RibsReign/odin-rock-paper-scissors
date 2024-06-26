// Doesn't have an interface right now
// It will input the answer from the user (Rock Paper Scissors) 
// Input: User will enter the data 
// Output: "You Lose! computerChoice beats playerSelection" or "You win playerSelection beats computerChoice" or "It's a tie!" 
// Compare the playerSelection against computerChoice generated by us


function computerSelection() {
    randomNumber = Math.floor(Math.random() * 3 + 1)
    if (randomNumber === 3) {
        return "rock"
    }
    else if (randomNumber === 2)
        return "paper"
    else
        return "scissors"
}

/* function playerSelection() {
    let lowerMe = prompt("Rock, Paper, Scissors?")
    let lowerSelection = lowerMe => lowerMe.toLowerCase()
    return (lowerSelection(lowerMe))
} */

function playRound(pc, user) {
    console.log(pc, user);
    let capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
    if ((pc == "rock" && user == "scissors") || (pc == "paper" && user == "rock"))
        return ("You Lose! " + capitalize(pc) + " beats " + capitalize(user))
    else if (pc == "scissors" && user == "paper")
        return ("You Lose! " + capitalize(pc) + " beat " + capitalize(user))
    else if ((pc == "rock" && user == "paper") || (pc == "scissors" && user == "rock"))
        return ("You Win! " + capitalize(user) + " beats " + capitalize(pc))
    else if (pc == "paper" && user == "scissors")
        return ("You Win! " + capitalize(user) + " beat " + capitalize(pc))
    else if ((pc == "rock" && user == "rock") || (pc == "paper" && user == "paper"))
        return ("It's a tie! " + capitalize(pc) + " ties with a " + capitalize(user))
    else if (pc == "scissors" && user == "scissors")
        return ("It's a tie! " + capitalize(pc) + " tie with a " + capitalize(user))
    else
        return ("You didn't enter rock, paper or scissors..")
}
let pcS = 0;
let userS = 0;
function rockPaperScissors(user) {
    let result;
    result = playRound(computerSelection(), user);
    if (result.slice(4, 7) == "Win") userS++;
    if (result.slice(4, 8) == "Lose") pcS++;

    if (pcS >= 5) {
        pcS = 0;
        userS = 0;
        return (result + ". Game Over, PC wins!");
    }
    else if (userS >= 5) {
        pcS = 0;
        userS = 0;
        return (result + ". Game Over, You win!");
    }
    return (result + `.And the score is User:${userS} PC:${pcS} `);

}
const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case 'rock':
                result.textContent = rockPaperScissors(computerSelection(), "rock");
                break;
            case 'paper':
                result.textContent = rockPaperScissors(computerSelection(), "paper");
                break;
            case 'scissors':
                result.textContent = rockPaperScissors(computerSelection(), "scissors");
                break;
        }
        document.body.appendChild(result);
    })
})
const container = document.querySelector("#container");
const result = document.createElement("div");
result.setAttribute("style", "display:flex; justify-content:center; margin: 10px");
/* rockPaperScissors() */