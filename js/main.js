// richiamare il container
const square_containerDom = document.getElementById('square_container');

// richiamare il button
const buttonDom = document.getElementById('play_btn');

// richiamare il <div> per il punteggio
const pointsDom = document.getElementById('points_html');

// appena caricata la pagina il punteggio sarà '-'
pointsDom.innerHTML = '-';

// creare variabile di comodo da incrementare: indicherà il punteggio
let points = 0;



// --- inizio ciclo per creare struttura campo minato

// aggiungere evento di attivazione del ciclo
buttonDom.addEventListener('click', function() {

    // svuotare il container, svuotandolo ogni volta che clicco sul bottone play
    square_containerDom.innerHTML = '';

    // Inserire variabile del punteggio nel relativo elemento html
    pointsDom.innerHTML = points;

    // creare variabile che richiami la funzione che crea le bombe (è un array)
    const createdBombsArray = createBombsFunction();

    // creare ciclo per creare 100 quadrati ed assegnare loro le bombe quando 'i' = numero bomba già presente nell'array
    for (let i = 1; i < 101; i++) {

        // creare variabile che richiami la funzione per creare uno square
        const newSquare = createSquareFunction();

        // stampo il numero su ogni quadrato
        newSquare.append(i);

        // verificare se il numero-contatore 'i' del ciclo sia dentro l'array delle bombe
        if (createdBombsArray.includes(i)) {

            // aggiungere classe .bomb al quadrato 'i' quando 'i' è incluso nell'array bombe
            newSquare.classList.add('bomb');

        }

        // aggiungere eventListener quando clicco sui quadrati ai fini della logica di gioco
        newSquare.addEventListener('click', function(){

            // solo quadrati con entrambe le classi sono bombe: se clicco uno di questi oppure se clicco tutti quelli che non sono bombe, la partita termina
            if (newSquare.classList == 'square bomb' || points == 84) {

                // alert per partita terminata
                alert('Partita terminata.');

                // impostare per il newSquare cliccato la classe 'red', che ne imposta lo sfondo sul rosso
                this.style.backgroundColor = 'red';

                // a partita terminata nel <footer> mostrare un messaggio col punteggio finale
                pointsDom.innerHTML = `finale: ${points}`;

                // impostare points a 0 affinché al successivo clic di 'play' il contatore cominci a contare punteggio nuovamente da zero
                points = 0;

            // se il quadrato cliccato ha solo classe 'square'
            } else if (newSquare.classList == 'square')  {

                // ..impostare lo sfondo blu
                this.style.backgroundColor = 'lightblue';

                // incrementare il punteggio
                points += 1;

                // mostrare nell'html il punteggio incrementato
                pointsDom.innerHTML = points;

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

            // ..altrimenti incremento 'x' e continuo a ciclare
            x++;

        }

    }

    // ritornare l'array bombList alla funzione
    return bombList;

}



// --- funzione per creare <div square>
function createSquareFunction() {

        // creare nuovo elemento <div> ad ogni ciclo
        const newSquareInFunction = document.createElement('div');

        // aggiungere classe .square all'elemento
        newSquareInFunction.classList.add('square');

        // mettere ('appendere') il quadrato creato dentro square_containerDom
        square_containerDom.append(newSquareInFunction);

        // ritornare il quadrato creato alla funzione
        return newSquareInFunction;

}