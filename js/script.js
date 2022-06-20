//chiedi all'utente il suo nome
//poi chiedi il suo cognome
//poi chiedi il suo colorre preferito
//infine scrivi sulla pagina: nomecognomecolorepreferito21

const resultParagraph = document.getElementById('result')

const firstname = (prompt('inserire il nome', `fabio`));
console.log(firstname);

const lastname = (prompt('inserire il cognome', `rossi`));
console.log(lastname);

const favouritecolor = (prompt('inserire il colore preferito', `blu`));
console.log(favouritecolor);

const password= firstname + lastname + favouritecolor + `21`
console.log(password);

resultParagraph.innerText = `la tua password è ${password}`