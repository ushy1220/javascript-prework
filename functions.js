var button_paper, button_scisors, buttonTest;

/**
 * Describe this function...
 */

buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
button_rock = document.getElementById('button-rock');
button_rock.addEventListener('click', function(){ buttonClicked('kamień'); });
button_paper = document.getElementById('button-paper');
button_paper.addEventListener('click', function(){ buttonClicked('papier'); });
button_scisors = document.getElementById('button-scisors');
button_scisors.addEventListener('click', function(){ buttonClicked('nożyce'); });

function buttonClicked(button_paper) {
  clearMessages();
  console.log(' został kliknięty' + button_paper);

function buttonClicked(button_rock) {
  clearMessages();
  console.log(' został kliknięty' + button_rock);

function buttonClicked(button_scisors) {
  clearMessages();
  console.log(' został kliknięty' + button_scisors);

buttonTest.addEventListener('click', function(){
  buttonClicked('Test button')

var playerInput, playerMove;

playerMove = argButtonName;

console.log('Wpisana odpowiedź to: ' + playerInput);

if (playerInput == '1') {
  playerMove = 'kamień';

} else if (playerInput == '2') {
  playerMove = 'papier';

} else {
  playerMove = 'nożyce';
}

printMessage('Twój ruch: ' + playerMove);