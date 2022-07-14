// richiamare il container
const square_containerDom = document.getElementById('square_container');

// richiamare il button
const buttonDom = document.getElementById('play_btn');







// -- parte nuova

// creare un array che contenga le bombe
const bombList = [];
console.log(bombList);

// generare un numero a caso tra minimo e massimo per 16 volte
const randomBombNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(randomBombNumber);

// inserire il numero generato dentro all'array bombe
bombList.push(randomBombNumber);
console.log(bombList);


// -- fine parte nuova








// aggiungere evento di attivazione del ciclo
buttonDom.addEventListener('click',
function() {

    // resettare il container ogni volta che clicco sul bottone play
    square_containerDom.innerHTML = '';

    for (let i=1; i<101; i++) {
        // funzione per creare uno square ad ogni ciclo da 1 a 100
        const newSquare = createSquare();
        // stampo il numero su ogni quadrato
        newSquare.append(i);
    }
})

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