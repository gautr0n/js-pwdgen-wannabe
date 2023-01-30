const resultPrint = document.getElementById('resultPrint');

const firstName = prompt('inserisci il tuo nome');
console.log(firstName);

const secondName = prompt('inserisci il tuo cognome');
console.log(secondName);

const favColor = prompt('inserisci il tuo colore preferito');
console.log(favColor);

const favNumber = prompt('inserisci il tuo numero preferito');
console.log(favNumber);

const result = firstName + secondName + favColor + favNumber;
console.log(result);

resultPrint.innerText = `La tua Password è ${result}`
console.log(resultPrint);

window.alert(result);