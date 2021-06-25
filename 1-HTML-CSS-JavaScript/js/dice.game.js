function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random()* 6) + 1;
        alert ("You rolled a " + roll + ".");

        if(roll === 1){
            alert("Game over, no more rolls!" );
        
        break;
    }
    if (roll < 5) {
        continue;
    }

    alert("Congrats, win " + roll + "gold coins!");
    goldCoins += roll;

    }

alert("You won " + goldCoins + "coins!");

}