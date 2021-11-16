const SAT = '18 nov 2021 16:32:00 GMT+0900'

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function countdown() {
    const SATDate = new Date(SAT);
    const currentDate = new Date();

    const totSec = (SATDate - currentDate) / 1000;
    const days = Math.floor(totSec / 3600 / 24);
    const hours = (days * 24) + Math.floor(totSec / 3600) % 24;
    const min = Math.floor(totSec / 60) % 60;
    const sec = Math.floor(totSec) % 60;

    document.getElementById('hours2').innerText = formatTime(hours);
    document.getElementById('min2').innerText = formatTime(min);
    document.getElementById('sec2').innerText = formatTime(sec);
}

setInterval(countdown,1000)
