// richiamare il container
const square_containerDom = document.getElementById('square_container');

// richiamare il button
const buttonDom = document.getElementById('play_btn');

// richiamare la difficoltà
const difficultyDom = document.getElementById('difficulty');

// settare variabili per numeri massimo e minimo relativi ad ogni difficoltà inserita
let numMin = 1;
let numMax;

// aggiungere evento al click
buttonDom.addEventListener('click',
function() {

    // resettare il container ogni volta che clicco sul bottone play
    square_containerDom.innerHTML = '';

    // creare struttura condizionale che crea un numero di quadrati legato al livello di difficoltà scelto
    if (difficultyDom.value == 'easy') {
        console.log('facile');
        let numMax = 100;
        const newProgressiveSquare = getProgressiveNumbers(numMin, numMax);
    } else if (difficultyDom.value == 'medium') {
        console.log('media');
        let numMax = 81;
        const newProgressiveSquare = getProgressiveNumbers(numMin, numMax);
    } else if (difficultyDom.value == 'hard') {
        console.log('difficile');
        let numMax = 49;
        const newProgressiveSquare = getProgressiveNumbers(numMin, numMax);
    }
})

// creare una funzione per generare <div square>
function createSquare() {
        // creo nuovo elemento <div> ad ogni ciclo
        const newSquare = document.createElement('div');
        // aggiungo classe .square all'elemento
        newSquare.classList.add('square');
        // metto ('appendo') newSquare dentro square_containerDom
        square_containerDom.append(newSquare);
        // creare struttura condizionale per capire quale classe aggiungere ai quadrati
        if (difficultyDom.value == 'easy') {
            newSquare.classList.add('c_easy');
        } else if (difficultyDom.value == 'medium') {
            newSquare.classList.add('c_medium');
        } else if (difficultyDom.value == 'hard') {
            newSquare.classList.add('c_hard');
        }
        // creare un event listener su ogni singola cella che cambi sfondo allo square e scriva in console il numero della cella
        newSquare.addEventListener('click', 
        function(){
            // se non ho ancora cliccato, imposto lo sfondo azzurrino; altrimenti, se ho già cliccato e quindi ho già lo sfondo azzurrino, reimposto lo sfondo verde (potrei usare .toggle)
            if (this.style.backgroundColor == 'lightblue') {
                this.style.backgroundColor = '#7fffd4';
            } else {
                this.style.backgroundColor = 'lightblue';
            }
            // scrivere in console il numero del quadrato cliccato
            console.log(`The number of the square is: ${this.textContent}`);
        })
        // ritorno tutto quanto fatto su newSquare
        return newSquare;
}

// creare una funzione per generare numeri progressivi da un minimo ad un massimo
function getProgressiveNumbers(parameter1, parameter2) {
    for (let i = parameter1; i < parameter2+1; i++) {
        // richiamare una funzione per creare uno square ad ogni ciclo dal minimo al massimo
        const newSquare = createSquare();
        // aggiungere il numero su ogni quadrato
        newSquare.append(i);
        console.log(i);
    }
}