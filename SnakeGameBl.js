
 let count = 1;
const WINSTEPS = 100;
let playerOnePosition = 0;
let playerTwoPosition = 0;
let p1CurrentPosition = 0;
let p2CurrentPosition = 0;

const  startGame  = function (){
while(p1CurrentPosition <=WINSTEPS && p2CurrentPosition <= WINSTEPS) {
    if(count % 2 != 0) {
        console.log("\n Player 1 is Playing :");
     playerOnePosition = player1Position();
        p1CurrentPosition = playerOnePosition;
    }
    else {
        console.log("\n Player 2 is Playing :");
     playerTwoPosition = player2Position();
        p2CurrentPosition = playerTwoPosition;
    }

    if (playerOnePosition <= WINSTEPS || playerTwoPosition <= WINSTEPS)
        count++;
    if (playerOnePosition == WINSTEPS || playerTwoPosition == WINSTEPS)
        break;
    
        console.log("Player 1 Position = ", p1CurrentPosition);
        console.log("Player 2 position = ", p2CurrentPosition);
}

console.log( "player one position is :", playerOnePosition);
console.log( "player Two Position is :", playerTwoPosition);

if ( playerOnePosition > playerTwoPosition)
    console.log("\n Player 1 Won the Game");
else
    console.log("\n Player 2 Won the Game");

console.log("The no. of times the dice was rolled to win the game is ", count);

function rollDice() {
    let random = Math.floor((Math.random() * 6) + 1);
    return random; 
}

function player1Position() {
    let diceValue = rollDice();
    console.log("The Dice Value is ", diceValue);
    let player1Random = Math.floor(Math.random() * 2) + 1;
    
    switch(player1Random) {
        case 0: 
         playerOnePosition = p1CurrentPosition;
            console.log("The player is not playing");
            break;
        case 1:
         playerOnePosition = p1CurrentPosition + diceValue;
            console.log("The player1 got Ladder and got chance to roll the dice again");
            let player1NewChance = rollDice();
            console.log("The dice Value is ", player1NewChance);
             let p1ExtraPosition = playerOnePosition + player1NewChance;
             playerOnePosition = p1ExtraPosition;

             if (playerOnePosition > WINSTEPS)
             playerOnePosition = p1CurrentPosition;
            break;
        default :
         playerOnePosition = p1CurrentPosition - diceValue;
            if (playerOnePosition < 0)
             playerOnePosition = 0;
            console.log("The player got Snake ");
            break;
    }

    p1CurrentPosition = playerOnePosition;
    return(p1CurrentPosition);
}

function player2Position() {
    let diceValue = rollDice();
    console.log("The dice value is ", diceValue);

    let player2Random = Math.floor(Math.random() * 2) + 1;

    switch(player2Random) {
        case 0:
         playerTwoPosition = p2CurrentPosition;
            console.log("The player is not playing");
            break;
        case 1:
         playerTwoPosition = p2CurrentPosition + diceValue;
            console.log("The player got Ladder and got chance to roll the dice again");

            let player2NewChance = rollDice();
            console.log("The dice value is ", player2NewChance);

            let p2ExtraPosition = playerTwoPosition + player2NewChance;
         playerTwoPosition = p2ExtraPosition;

            if (playerTwoPosition > WINSTEPS)
             playerTwoPosition = p2CurrentPosition;
            break;
        default :
         playerTwoPosition = p2CurrentPosition - diceValue;

            if (playerTwoPosition < 0) 
             playerTwoPosition = 0;
            console.log("The player got snake ");
            break;
    }

    p2CurrentPosition = playerTwoPosition;
    return p2CurrentPosition;
}

}

module.exports = {startGame};