// richiamare il container
const square_containerDom = document.getElementById('square_container');

// richiamare il button
const buttonDom = document.getElementById('play_btn');

// creare variabile di comodo da incrementare: indicherà il punteggio
let points = 0;



const pointsDom = document.getElementById('points_html');

pointsDom.innerHTML = '0';



// --- inizio ciclo per creare struttura campo minato

// aggiungere evento di attivazione del ciclo
buttonDom.addEventListener('click', function() {

    // resettare il container, svuotandolo ogni volta che clicco sul bottone play
    square_containerDom.innerHTML = '';

    // creare variabile che richiama la funzione che crea le bombe (è un array)
    const createdBombsArray = createBombsFunction();

    // creare ciclo per creare 100 quadrati ed assegnare loro le bombe quando 'i' = numero bomba già presente nell'array
    for (let i=1; i<101; i++) {

        // funzione per creare uno square ad ogni ciclo da 1 a 100
        const newSquare = createSquare();

        // stampo il numero su ogni quadrato
        newSquare.append(i);

        // verificare se il numero-contatore 'i' del ciclo sia dentro l'array delle bombe
        if (createdBombsArray.includes(i)) {

            // aggiungere classe .bomb al quadrato 'i' quando 'i' è incluso nell'array bombe
            newSquare.classList.add('bomb');

        }

        newSquare.addEventListener('click', function(){

            if (newSquare.classList == 'square bomb') {

                this.style.backgroundColor = 'red';

                alert('Hai perso! La partita verrà resettata.');

                pointsDom.innerHTML = `finale: ${points}`;

                points = 0;

            } else if (newSquare.classList == 'square')  {

                this.style.backgroundColor = 'lightblue';

                points += 1;
                pointsDom.innerHTML = points;

            }

            if (points == 0) {
                
                square_containerDom.innerHTML = '';
                
            }

        })

    }

})




// --- inizio funzioni



// --- funzione per la creazione delle bombe
function createBombsFunction() {

    // creare un array che contenga le bombe
    const bombList = [];

    // creare variabile esterna che interrompa il ciclo quando giungo al numero sufficiente di bombe
    let bombCounterCheck = false;

    // creare ciclo per creazione numero-bomba
    let x = 0;
    while (bombCounterCheck == false) {

        // generare numero casuale tra 1 e 100
        const randomBombNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);

        // prima di inserire il numero-bomba nell'array, verificare se sia già presente o meno nell'array bombList
        if (!bombList.includes(randomBombNumber)) {

            // inserire il numero generato dentro all'array bombe, se non già presente
            bombList.push(randomBombNumber);

        }

        // controllare quante bombe ci sono nell'array: se sono 16, interrompo il ciclo utilizzando bombCounterCheck
        if (bombList.length == 16) {

            // cambio il valore booleano della condizione per interrompere il ciclo while
            bombCounterCheck = true;

        } else {

            // ..altrimenti incremento i e continuo a ciclare
            x++;

        }

    }

    // ritornare l'array bombList alla funzione
    return bombList;

}

// --- funzione per creare <div square>
function createSquare() {

        // creare nuovo elemento <div> ad ogni ciclo
        const newSquareInFunction = document.createElement('div');

        // aggiungere classe .square all'elemento
        newSquareInFunction.classList.add('square');

        // mettere ('appendere') il quadrato creato dentro square_containerDom
        square_containerDom.append(newSquareInFunction);

        // creare un event listener su ogni singola cella che cambi sfondo allo square e scriva in console il numero della cella
        newSquareInFunction.addEventListener('click', function() {

            // se non ho ancora cliccato, imposto lo sfondo azzurrino; altrimenti, se ho già cliccato e quindi ho già lo sfondo azzurrino, reimposto lo sfondo verde
/*             if (this.style.backgroundColor == 'lightblue') {

                this.style.backgroundColor = '#7fffd4';

            } else {

                this.style.backgroundColor = 'lightblue';

            } */

            console.log(`The number of the square is: ${this.textContent}`);

        })

        // ritornare il quadrato creato alla funzione
        return newSquareInFunction;

}