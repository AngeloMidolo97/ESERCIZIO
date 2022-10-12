var anno = 2022;
var dataNascita;
var anni;

let primo = function (num1, num2) {
    return `Succo con ${num1} mele e ${num2} arance`
}

document.getElementById('corretta').innerHTML = primo(4, 5);
document.getElementById('sbagliata').innerHTML = primo(6);

eta();

function eta() {
    dataNascita = 1997;
    anni = anno - dataNascita;
    document.getElementById('eta').innerHTML += `${anni}`;
}

let annoNascita = (eta, nome) => {
    const anno = 2022 - eta;
    return `L'anno di nascita di ${nome} è ${anno}`;
}

document.getElementById('persona1').innerHTML = annoNascita(30, 'Anna');
document.getElementById('persona2').innerHTML = annoNascita(24, 'Maria');

function esercizio(mela, arancia) {
    return `Torta con ${mela} fette di mela e ${arancia} fette di arancia`;
}

esercizio1();

function esercizio1() {
    document.getElementById('torta').innerHTML = esercizio(9, 15);
}

var btn = document.getElementById('calcola');

btn.addEventListener('click', function() {
	cibo = document.getElementById('cibo').value;
	detersivi = document.getElementById('detersivi').value;
	abiti = document.getElementById('abiti').value;

    calcolaTotale();
    cancellaForm();
})

function calcolaTotale() {
    document.getElementById('tot').innerHTML = Number(cibo) + Number(detersivi) + Number(abiti);
}


function cancellaForm() {
	document.getElementById("cibo").value = '';
	document.getElementById("detersivi").value = '';
	document.getElementById("abiti").value = '';
}

