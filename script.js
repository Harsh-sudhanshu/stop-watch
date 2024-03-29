let timer;
let startTime;
let elapsedTime = 0;
let running = false;

function start() {
    if (!running) {
        startTime = new Date().getTime() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
        document.getElementById('startBtn').disabled = true;
        document.getElementById('stopBtn').disabled = false;
        document.getElementById('resetBtn').disabled = false;
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timer);
        running = false;
        document.getElementById('startBtn').disabled = false;
    }
}

function reset() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
}

function updateDisplay() {
    let currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, '0');
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000).toString().padStart(2, '0');
    document.getElementById('display').innerText = hours + ':' + minutes + ':' + seconds;
}