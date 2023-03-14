console.log('funguju!');

const diceElm = document.querySelector('.dice');
let actualNumber = 1;

const changeNumber = () => {

    diceElm.src = 'img/side1.svg';

    actualNumber++;

    if(actualNumber === 2) {
        diceElm.src = 'img/side2.svg';
    }

    if(actualNumber === 3) {
        diceElm.src = 'img/side3.svg';
    }

    if(actualNumber === 4) {
        diceElm.src = 'img/side4.svg';
    }

    if(actualNumber === 5) {
        diceElm.src = 'img/side5.svg';
    }

    if(actualNumber === 6) {
        diceElm.src = 'img/side6.svg';
        actualNumber = 0;
    }

    console.log(actualNumber);
}

window.addEventListener('keydown', changeNumber);