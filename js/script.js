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


var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);

if (randomNumber == '1') {
  computerMove = 'kamień';

} else if (randomNumber == '2') {
    computerMove = 'papier';

} else if (randomNumber == '3') {
  computerMove == 'nożyce';
}


// printMessage('Mój ruch: ' + computerMove);
console.log('Mój ruch: ' + computerMove)


var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);




if (playerInput == '1') {
playerMove = 'kamień';
console.log(playerMove);

}else if (playerInput == '2') {
playerMove = 'papier';
console.log(playerMove);

} else if (playerInput == '3') {
 playerMove = 'nożyce';
 console.log(playerMove);

} else {
console.log('nieprawidłowy ruch');
}

console.log('Twój ruch: ' + playerMove);
