let player1 = prompt("Enter player 1's name");
let player2 = prompt("Enter player 2's name");

document.querySelectorAll('.players h1')[0].textContent = player1;
document.querySelectorAll('.players h1')[1].textContent = player2;

document.getElementById('btn').addEventListener('click', rollDice);

