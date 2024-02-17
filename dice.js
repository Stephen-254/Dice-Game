
function PlayerNames() {
    let player1 = prompt("Enter your name");
    let player2 = prompt("Enter your name");

    document.querySelectorAll('.players h1')[0].textContent = player1;
    document.querySelectorAll('.players h1')[1].textContent = player2;

}


function rollDice(){
    setTimeout(function () {
        let randomNumber1 = Math.floor(Math.random() *6) + 1;
        let randomNumber2 = Math.floor(Math.random() *6) + 1;

        document.querySelectorAll("dice1").setAttribute("src", "dice1." + randomNumber1 + ".png");
        document.querySelectorAll("dice2").setAttribute("src", "dice2." + randomNumber1 + ".png");

        if(randomNumber1 === randomNumber2) {
            document.getElementById("results").innerHTML = "Draw!"
        }else if(randomNumber1 < randomNumber2) {
            document.getElementById("results").innerHTML = (player2 + "WIN!");
        }else{
            document.getElementById("results").innerHTML = (player1 + "WIN!");
        }
    }, 2500);
}


function buttonFunc() {

};