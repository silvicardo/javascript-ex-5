/*
Oggetti
- Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età. Stampare a
schermo attraverso il for in tutte le proprietà.
- Creare un array di oggetti di studenti. Ciclare su tutti gli
studenti e stampare per ognuno nome e cognome
- Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo
nell’ordine: nome, cognome e età.
*/


// PARTE 1
document.writeln('-Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.<br>');


var studente = {
  nome : 'Riccardo',
  cognome : 'Silvi',
  eta : 31
};

for(var key in studente) {
  document.writeln(key + ': ' + studente[key] + '<br>');
}

// PARTE 2
document.writeln('<br><br><br>- Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome<br>');

var studente1 = {
  nome : 'Paolo',
  cognome : 'Rossi',
  eta : 21
};

var studente2 = {
  nome : 'Mario',
  cognome : 'Verdi',
  eta : 40
};

var studenti = [studente, studente1, studente2];

for (var i = 0; i < studenti.length; i++) {
  document.writeln('STUDENTE IN POSIZIONE: ' + studenti.indexOf(studenti[i]) + '<br>');
  for(var key in studenti[i]) {
    document.writeln(key + ': ' + studenti[i][key] + '<br>');
  }
}

// PARTE3
document.writeln('<br><br><br>- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.<br>');

var studentePersonalizzato = creaNuovoOggettoStudente();

studenti.push(studentePersonalizzato);

for (var i = 0; i < studenti.length; i++) {
  document.writeln('STUDENTE IN POSIZIONE: ' + studenti.indexOf(studenti[i]) + '<br>');
  for(var key in studenti[i]) {
    document.writeln(key + ': ' + studenti[i][key] + '<br>');
  }
}

console.log(studenti);

function creaNuovoOggettoStudente() {

  var nuovoStudente = {
    nome : '',
    cognome : '',
    eta : 0
  };

  for(var key in nuovoStudente) {
    nuovoStudente[key] = (typeof(nuovoStudente[key]) === 'number') ? parseInt(prompt('Inserisci ' + key))  : prompt('Inserisci ' + key) ;
  }

return nuovoStudente;
}
