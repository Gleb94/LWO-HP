const htmlElements = {};
htmlElements.startBtn = document.querySelector('.container .buttons button.start');
htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
htmlElements.clock = document.querySelector('.container .links .clock');
htmlElements.watch = document.querySelector('.watch');
htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
htmlElements.timer = document.querySelector('.container .links .timer');
htmlElements.output = document.querySelector('.container .output');

document.getElementById("button1").style.color = "gray";
document.getElementById("button2").style.color = "gray";
document.getElementById("button3").style.color = "gray";

document.getElementById("button1").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button2").style.color = "gray";
    document.getElementById("button3").style.color = "gray";
};

document.getElementById("button2").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button1").style.color = "gray";
    document.getElementById("button3").style.color = "gray";
};

document.getElementById("button3").onclick = function() {
    this.style.color = "blue";
    document.getElementById("button1").style.color = "gray";
    document.getElementById("button2").style.color = "gray";
};

const sartTime = new Date(Date.now()).getTime();
const output = document.getSelection('.output');
let timerId;
let hours, minutes, seconds;

function initfunc() {
    htmlElements.clock.addEventListener("click", clockStart);
    htmlElements.stopwatch.addEventListener("click", stopWatchStart);
    htmlElements.timer.addEventListener("click", timer);
}
initfunc();

function updateClock() {
    let data = new Date();
    hours = new Date(Date.now()).getHours();
    if (hours < 10) hours = "0" + hours;
    minutes = new Date(Date.now()).getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    seconds = new Date(Date.now()).getSeconds();
    if (seconds < 10) seconds = "0" + seconds;
    const time = `${hours}:${minutes}:${seconds}`
    htmlElements.watch.innerHTML = time;
}

function updateStopWatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++
        }
        if (hours === 24) {
            hours = 0;
        }
    }
    if (hours < 10 && hours.length !== 2) hours = "0" + hours;
    if (minutes < 10 && minutes.length !== 2) minutes = "0" + minutes;
    if (seconds < 10 && seconds.length !== 2) seconds = "0" + seconds;
    const time = `${hours}:${minutes}:${seconds}`
    htmlElements.watch.innerHTML = time;
}

function clockStart() {
    clearInterval(timerId)
    timerId = setInterval(updateClock, 1000);
    updateClock();
    removeButton();
}

function showButton() {
    htmlElements.stopBtn.removeAttribute("hidden");
    htmlElements.startBtn.removeAttribute("hidden");
    htmlElements.resetBtn.removeAttribute("hidden");
    htmlElements.startBtn.removeEventListener('click', runStopWatch2);
    htmlElements.stopBtn.removeEventListener('click', stopStopWatch2);
    htmlElements.resetBtn.removeEventListener('click', resetStopWatch2);
    htmlElements.startBtn.addEventListener('click', runStopWatch)
    htmlElements.stopBtn.addEventListener('click', stopStopWatch)
    htmlElements.resetBtn.addEventListener('click', resetStopWatch)
}

function removeButton() {
    htmlElements.stopBtn.setAttribute("hidden", '');
    htmlElements.startBtn.setAttribute("hidden", '');
    htmlElements.resetBtn.setAttribute("hidden", '');
}

function stopWatchStart() {
    clearInterval(timerId)
    const time = `00:00:00`
    htmlElements.watch.innerHTML = time;
    hours = 0;
    minutes = 0;
    seconds = 0;
    showButton();
}

function runStopWatch() {
    timerId = setInterval(updateStopWatch, 1000);
}

function stopStopWatch() {
    clearInterval(timerId);
}

function resetStopWatch() {
    clearInterval(timerId);
    stopWatchStart();
}

function updateStopWatch2() {
    seconds--;
    if (seconds <= 0) {
        seconds = 59;
        minutes--;
        if (minutes <= -1) {
            minutes = 59;
            hours--
        }
        if (hours === 24) {
            hours = 0;
        }
    }
    if (hours < 10 && hours.length !== 2) hours = "0" + hours;
    if (minutes < 10 && minutes.length !== 2) minutes = "0" + minutes;
    if (seconds < 10 && seconds.length !== 2) seconds = "0" + seconds;
    const time = `${hours}:${minutes}:${seconds}`
    htmlElements.watch.innerHTML = time;
}

function showButton2() {
    htmlElements.stopBtn.removeAttribute("hidden");
    htmlElements.startBtn.removeAttribute("hidden");
    htmlElements.resetBtn.removeAttribute("hidden");
    htmlElements.startBtn.removeEventListener('click', runStopWatch);
    htmlElements.stopBtn.removeEventListener('click', stopStopWatch);
    htmlElements.resetBtn.removeEventListener('click', resetStopWatch);
    htmlElements.startBtn.addEventListener('click', runStopWatch2);
    htmlElements.stopBtn.addEventListener('click', stopStopWatch2);
    htmlElements.resetBtn.addEventListener('click', resetStopWatch2);
}

function timer() {
    clearInterval(timerId)
    const time = `00:05:00`
    htmlElements.watch.innerHTML = time;
    hours = 0;
    minutes = 5;
    seconds = 0;
    showButton2();
}

function runStopWatch2() {
    timerId = setInterval(updateStopWatch2, 1000);
}

function stopStopWatch2() {
    clearInterval(timerId);
}

function resetStopWatch2() {
    clearInterval(timerId);
    timer();
}



// function start(st) {
//     window[st]();
//     const elem = document.getElementById("myButton");
// }

// function Timer() {
//     const difference = (new Date().getTime() - sartTime) / 1000;
//     let secods = parseInt(difference % 60);
//     const minutes = parseInt((difference / 60) % 60);
//     if (seconds < 10) {
//         secods = '0' + secods;
//     }
//     const time = `${minutes}:${seconds}`;
// }