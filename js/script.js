const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const showNumber = document.querySelector('#show-number');

let stopNumber;
let num;
let startFlag = 1;

const displayNumber = () => {
    if (startFlag) {
        showNumber.innerHTML = 'Game is loading.. '; // html logic

        num = 0;
        setTimeout(() => {

            stopNumber = setInterval(() => {
                showNumber.innerHTML = num;
                num++;
            }, 1000);
        }, 100);
        startFlag = 0;
    }
}
startBtn.addEventListener('click', displayNumber);


const stopDisplayNumber = () => {
    clearInterval(stopNumber);
    startFlag = 1;
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

// generate random color
function randomColor() {
    const hexColor = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        // const element = hexColor[i];
        color += hexColor[Math.trunc(Math.random() * 16)];
    }
    return color;
}

// continuos change background
(function continuosChangeBgColor() {
    setInterval(function () {
        document.body.style.background = `linear-gradient(45deg, ${randomColor()}, ${randomColor()})`;
    }, 1000)
})()