`use strict`

//GIOCATORE
// definisco una variabile per generare un numero random
const giocatore= Math.floor(Math.random()*6+1);
// aggiungo due alert: 
//la prima per sapere chi è?
alert(`giocatore =`)
//la seconda per sapere il numero random che ha ricevuto
alert(giocatore)

//COMPUTER
// definisco una variabile per generare un numero random
const computer= Math.floor(Math.random()*6+1)
// aggiungo due alert: 
//la prima per sapere chi è?
alert(`computer =`) 
//la seconda per sapere il numero random che ha ricevuto
alert(computer)

// aggiungo una condizionale per ilvincitore tra il giocatore o computer e anche se hanno pareggiato
if (giocatore < computer) {
    alert(`vicitore computer`);
}else if (giocatore > computer) {
    alert(`vincitore giocatore`);
}else if (giocatore === computer) {
    alert(`vincitori entrambi`);
}