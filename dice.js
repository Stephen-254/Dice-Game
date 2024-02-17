function PlayerNames() {
    let player1 = prompt("Enter your name");
    let player2 = prompt("Enter your name");

    document.getElementById('plyr1').textContent = player1;
    document.getElementById('plyr2').textContent = player2;
}

function buttonFunc() {
    function rollDice() {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById("dice1").setAttribute("src", "dice" + randomNumber1 + ".png");
        document.getElementById("dice2").setAttribute("src", "dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.getElementById("results").innerHTML = "Draw!";
        } else if (randomNumber1 < randomNumber2) {
            document.getElementById("results").innerHTML = document.getElementById("plyr2").textContent + " WIN!";
        } else {
            document.getElementById("results").innerHTML = document.getElementById("plyr1").textContent + " WIN!";
        }
    }
    rollDice();
}

