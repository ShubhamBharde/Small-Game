const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const showNumber = document.querySelector('#show-number');

let stopNumber;
let num;

const displayNumber = () => {
    showNumber.innerHTML = 'Game is loading.. '; // html logic

    setTimeout(() => {
        num = 0;
        
        stopNumber = setInterval(() => {
            showNumber.innerHTML = num;
            num++;
        }, 1000);
    }, 100);

}
startBtn.addEventListener('click', displayNumber);


const stopDisplayNumber = () => {
    clearInterval(stopNumber);
}
stopBtn.addEventListener('click', stopDisplayNumber)




// game result 
const displayResult = () => {
    const gameResult = document.querySelector('#show-number');

    setTimeout(() => {
        if (gameResult.innerHTML == 5) {
            gameResult.innerHTML = "You're Winner";
        } else {
            gameResult.innerHTML = "You're Looser";
        }
    }, 500);

}

stopBtn.addEventListener('click', displayResult);