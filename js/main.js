alert('Ciao compare!');

var nomeBattesimo = prompt('Qual è il tuo nome di battesimo?');
var nomeFake = prompt('Qual è il tuo nome falso?');
var cognomeUsual = prompt('Qual è il cognome che usi di solito?');
var colorePreferito = prompt('Qual è il miglior colore che non ti piace meno?');

var password = nomeBattesimo + nomeFake + cognomeUsual + colorePreferito + '20';

console.log(password);

document.getElementById('password_potentissima').innerHTML = password;