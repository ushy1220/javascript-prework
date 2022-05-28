let argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

const button, buttonPaper, buttonRock, buttonScisors, buttonTest;

/**
 * Describe this function...
 */

 buttonPaper = document.getElementById('button-paper');
 buttonRock = document.getElementById('button-rock');
 buttonScisors = document.getElementById('button-scisors');
 buttonTest = document.getElementById('button-test');

function buttonClicked(buttonPaper) {
  clearMessages();
  console.log(button + ' został kliknięty');

playerMove = argButtonName;
console.log('wybór ruchu gracza to: ' + playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
}


buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('Papier'); });
buttonRock.addEventListener('click', function(){ buttonClicked('Kamień'); });
buttonScisors.addEventListener('click', function(){ buttonClicked('Nożyce'); });