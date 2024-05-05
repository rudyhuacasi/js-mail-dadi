`use strict`

//definisco una variabile chiedendo il email
const email= prompt(`Inserisci la tua email`)

//definisco una variabile per fare un array de una lista
const lista =[`lisa@gmail.com`, `maria@gmail.com`, `juana@gmail.com`]
console.log(lista);

// definisco una variabile per contare il numero delle persone della lista
const lengthLista= lista.length -1

// definisco un ciclo da zero a il numero delle persone della lista
for (let i = 0; i <= lengthLista; i++) {
    // aggiungo una condizionale per le persone sono nelle lista
    if (email === lista[i]) {
        alert(`Conferma sull’esito del controllo`)
    }
}    