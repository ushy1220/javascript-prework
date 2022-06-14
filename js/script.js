

let argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

const  
buttonPaper = document.getElementById('button-paper'),
buttonRock = document.getElementById('button-rock'),
buttonScisors = document.getElementById('button-scissors');

/**
 * Describe this function...
 */

function buttonClicked(button) {
  clearMessages();
  console.log(button + ' został kliknięty');

if(button == 'Kamień'){
  playerMove = buttonRock;
} else if (button == 'Papier'){
  playerMove = buttonPaper;
} else {
  playerMove = buttonScisors;
}

console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(button, computerMove);
}

buttonPaper.addEventListener('click', function(){ buttonClicked('Papier'); });
buttonRock.addEventListener('click', function(){ buttonClicked('Kamień'); });
buttonScisors.addEventListener('click', function(){ buttonClicked('Nożyce'); });