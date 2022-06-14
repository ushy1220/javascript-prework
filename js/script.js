

let argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

const  
buttonPaper = document.getElementById('button-paper'),
buttonRock = document.getElementById('button-rock'),
buttonScisors = document.getElementById('button-scissors'),
buttonTest = document.getElementById('button-test');

/**
 * Describe this function...
 */
alert('hello');

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

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('Papier'); });
buttonRock.addEventListener('click', function(){ buttonClicked('Kamień'); });
buttonScisors.addEventListener('click', function(){ buttonClicked('Nożyce'); });