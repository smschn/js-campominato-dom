// variabili globali
let clickedButtonPlay = false; // variabile che mi permette di poter cliccare 'play' una sola volta
const bombsArray = []; // creo array vuoto per le bombe
let totalSquares; // definisco variabile per calcolare i quadrati totali
let squaresPerSide; // definisco variabile per calcolare i quadrati per lato
let score; // variabile-contatore per il punteggio
let isGameOver = false; // definisco variabile per disabilitare i click dopo aver trovato una bomba

// richiamo il container
const containerDom = document.getElementById('container_grid');

// richiamo il bottone play
const playBtnDom = document.getElementById('play_btn');

// aggiungo evento al click che mi fa iniziare la partita, richiamando la funzione
playBtnDom.addEventListener('click', function() {

    if (clickedButtonPlay==false) {

        createProgressiveSquares();
        
    }

})

// --- inizio funzioni

// funzione per creare i quadrati con numeri progressivi
function createProgressiveSquares() {

    // ad ogni inizio gioco lo score è 0
    score = 0;

    // in base alla difficoltà selezionata, ottengo un determinato numero totale di quadrati
    const difficultyDom = document.getElementById('difficulty').value;
    if (difficultyDom == 'easy') {
        totalSquares = 100;
    } else if (difficultyDom == 'medium') {
        totalSquares = 81;
    } else if (difficultyDom == 'hard') {
        totalSquares = 49;
    }

    // calcolo i quadrati per lato
    squaresPerSide = parseInt(Math.sqrt(totalSquares));

    // creo le bombe, richiamando la funzione
    const bombsCreated = getUniqueRandomNumber(bombsArray, 1, totalSquares);

    // creazione dinamica dei quadrati
    for (let i = 1; i <= totalSquares; i++) {

        // creo i quadrati, aggiungo il numero 'i' al quadrato, li inserisco nella griglia (calcolando le loro dimensioni in base alla difficoltà scelta)
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.style.height = `calc(100% / ${squaresPerSide})`;
        newSquare.style.width = `calc(100% / ${squaresPerSide})`;
        newSquare.append(i);
        containerDom.append(newSquare);

        // ad ogni click sul quadrato..
        newSquare.addEventListener('click', function() {

            // ..controllo se la partita è finita (controllando la variabile o il punteggio), stampando messaggi in alert legati alla vittoria o sconfitta
            if (isGameOver == true || score == (totalSquares - 16)) {
                alert('La partita è terminata!');
                if (score == (totalSquares - 16)) {
                    alert(`Hai vinto! Il punteggio finale è: ${score}`);
                } else {
                    alert(`Hai perso! Il punteggio finale è: ${score}`);
                }
            } else {
                // ..se il numero 'i' è incluso nell'array bombe, allora aggiungo classe rossa; altrimenti aggiungo classe verde ed incremento lo score
                if (bombsArray.includes(i)) {
                    this.classList.add('bomb'); // this si riferisce al newSquare 'i-esimo' creato nel ciclo
                    isGameOver = true; // avendo trovato la bomba, cambio il valore della variabile in modo da entrare nell'IF soprastante (e non riuscire più a cliccare altri quadrati)
                } else {
                    this.classList.add('clicked');
                    score ++;
                    document.getElementById('score').innerHTML = score;
                }
            }
        })

    }

    // cambio valore variabile per impedire che cliccando nuovamente 'play' si generino altre griglie, rompendo il layout della pagina
    clickedButtonPlay = true;

}

// funzione per ottenere un numero casuale tra massimo e minimo
function getRandomNumber(nMinFunc, nMaxFunc) {

    const randomNumberFunction = Math.floor(Math.random() * (nMaxFunc - nMinFunc + 1) + nMinFunc);
    return randomNumberFunction;

}

// funzione per ottenere un numero UNIVOCO e casuale tra un massimo ed un minimo (per le bombe)
function getUniqueRandomNumber(arrayFunc, nMinFunc, nMaxFunc) {

    let checkBombsNumber = false;
    while (checkBombsNumber == false) {
        const randomNumber = getRandomNumber(nMinFunc, nMaxFunc);
        if (arrayFunc.includes(randomNumber) == false) {
            arrayFunc.push(randomNumber);
            if (arrayFunc.length == 1) {
                checkBombsNumber = true;
            }
        }
    }

}

console.log(bombsArray)