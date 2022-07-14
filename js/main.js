// richiamare il container
const square_containerDom = document.getElementById('square_container');

// richiamare il button
const buttonDom = document.getElementById('play_btn');

// aggiungere evento di attivazione del ciclo
buttonDom.addEventListener('click',
function() {

    // resettare il container, svuotandolo ogni volta che clicco sul bottone play
    square_containerDom.innerHTML = '';

    // ciclo per creare 100 quadrati
    for (let i=1; i<101; i++) {

        // funzione per creare uno square ad ogni ciclo da 1 a 100
        const newSquare = createSquare();

        // stampo il numero su ogni quadrato
        newSquare.append(i);

    }

})




// -- inizio bombe


// creare un array che contenga le bombe
const bombList = [];

// creare variabile esterna che interrompa il ciclo quando giungo al numero sufficiente di bombe
let bombCounterCheck = false;

// creare ciclo per creazione numero-bomba
let i = 0;
while (bombCounterCheck == false) {

    // generare numero casuale tra 1 e 100
    const randomBombNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    // prima di inserire il numero-bomba nell'array, verificare se sia già presente o meno nell'array bombList
    if (!bombList.includes(randomBombNumber)) {

        // inserire il numero generato dentro all'array bombe
        bombList.push(randomBombNumber);

    }

    // controllare quante bombe ci sono nell'array: se sono 16, interrompo il ciclo utilizzando bombCounterCheck
    if (bombList.length == 16) {

        // cambio il valore booleano della condizione per interrompere il ciclo while
        bombCounterCheck = true;

    } else {

        // ..altrimenti incremento i e continuo a ciclare
        i++;

    }

}


// -- fine bombe






// funzione per creare <div square>
function createSquare() {

        // creo nuovo elemento <div> ad ogni ciclo
        const newSquare = document.createElement('div');

        // aggiungo classe .square all'elemento
        newSquare.classList.add('square');

        // metto ('appendo') newSquare dentro square_containerDom
        square_containerDom.append(newSquare);

        // creare un event listener su ogni singola cella che cambi sfondo allo square e scriva in console il numero della cella
        newSquare.addEventListener('click', 
        function(){

            // se non ho ancora cliccato, imposto lo sfondo azzurrino; altrimenti, se ho già cliccato e quindi ho già lo sfondo azzurrino, reimposto lo sfondo verde
            if (this.style.backgroundColor == 'lightblue') {

                this.style.backgroundColor = '#7fffd4';

            } else {

                this.style.backgroundColor = 'lightblue';

            }

            console.log(`The number of the square is: ${this.textContent}`);

        })

        // ritorno tutto quanto fatto su square
        return newSquare;

}