function clearMessages() {
    console.clear ();   
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argComputerMove == argPlayerMove) {
        console.log ('Remis');
    } else if (argPlayerMove == 'Papier' && argComputerMove == 'Kamień') {
      console.log('Wygrywasz!');
    } else {
      console.log('Przegrywasz :(');
    }
    console.log('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

function getMoveName(move) {
    let result;
    if (move == 1){
        result = 'Kamień';
    } else if (move == 2){
        result = 'Papier';
    } else if (move == 3){
        result = 'Nożyce';
    }
    return result
}