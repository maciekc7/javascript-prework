// function printMessage(msg){
// 	var div = document.createElement('div');
// 	div.innerHTML = msg;
// 	document.getElementById('messages').appendChild(div);
// }

// function clearMessages(){
// 	document.getElementById('messages').innerHTML = '';
// }

// var computerMove;
// computerMove = 'kamień';
// printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

// var playerMove;
// playerMove = 'papier';
// printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

// var randomNumber;
// randomNumber = Math.floor(Math.random() * 3 + 1);
// printMessage('Wylosowana liczba to: ' + randomNumber);



// function getRandomIntInclusive(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//       }

// printMessage('Wylosowana liczba z przedzialu od 11 do 19 to ' +  getRandomIntInclusive(11,19))



// var newRandomNumber;
// newRandomNumber = Math.floor(Math.random() * 9 + 10 + 1);
// printMessage('Nowa wylosowana liczba to: ' + newRandomNumber);


// newFunction();

// function newFunction() {
//     if (1 > 2) {
//         printMessage('Niesamowite! Jeden jest większe niż dwa!!!');
//     } else {
//         printMessage('Wszystko po staremu, jeden jest mniejsze niż dwa.');
//     }
// }

// newFunction2();

// function newFunction2() {
//     if(1 > 2){
//         printMessage('Niesamowite! Jeden jest większe niż dwa!!!');
//     } else if (1 == 2) {
//         printMessage('Dziwne – jeden jest równe dwa?!');
//     } else {
//         printMessage('Wszystko po staremu, jeden jest mniejsze niż dwa.');
//     }
// }


// var computerMove, randomNumber;
// randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log('wylosowana liczba to: ' + randomNumber);

// if (randomNumber == '1') {
//   computerMove = 'kamień';

// } else if (randomNumber == '2') {
//     computerMove = 'papier';

// } else if (randomNumber == '3') {
//   computerMove == 'nożyce';
// }


// // printMessage('Mój ruch: ' + computerMove);
// console.log('Mój ruch: ' + computerMove)


// var playerMove, playerInput;
// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
// console.log('Wpisana odpowiedź to: ' + playerInput);




// if (playerInput == '1') {
// playerMove = 'kamień';
// console.log(playerMove);

// }else if (playerInput == '2') {
// playerMove = 'papier';
// console.log(playerMove);

// } else if (playerInput == '3') {
//  playerMove = 'nożyce';
//  console.log(playerMove);

// } else {
// console.log('nieprawidłowy ruch');
// }

// console.log('Twój ruch: ' + playerMove);




var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;


var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
alert('Wylosowana liczba to: ' + randomNumber);1
console.log(randomNumber)




function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);

if (argMoveId == 1) {
    return 'kamień';
} else if (argMoveId == 2) {
    return 'papier'
} else if (argMoveId == 3) {
    return 'nożyce'
} else {  
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}




function displayResult(argPlayerMove, argComputerMove) {

  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!'); // dlaczego alert działa a print message juz nie???????????

  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');

  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');

  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis! :O');

  } else {
      printMessage('Przegrywasz :(')
  }

  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);

playerMove = getMoveName(playerInput);

console.log('ruch gracza to: ' + playerMove);

randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('wylosowana liczba to: ' + randomNumber);

computerMove = getMoveName(randomNumber);

console.log('ruch komputera to: ' + computerMove);

displayResult(playerMove, computerMove);
