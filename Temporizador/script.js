const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('startButton');
const audioElement = document.getElementById('audio');

let timer;
let totalTime = 0;

function startTimer() {
    if (totalTime > 0) {
        timer = setInterval(updateTimer, 1000);
        startButton.disabled = true;
    }
}

function updateTimer() {
    if (totalTime > 0) {
        totalTime--;
        const minutes = Math.floor(totalTime / 60).toString().padStart(2, '0');
        const seconds = (totalTime % 60).toString().padStart(2, '0');
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    } else {
        clearInterval(timer);
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        startButton.disabled = false;
        playSound();
        alert('Tempo esgotado!');
    }
}

function playSound() {
    // Defina o caminho correto para o arquivo de som (beep.mp3)
    audioElement.play();
}

startButton.addEventListener('click', function () {
    const inputTime = prompt('Digite o tempo desejado (em segundos):');
    totalTime = parseInt(inputTime, 10);
    startTimer();
});
