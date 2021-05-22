const SAT = '18 nov 2021'

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function countdown() {
    const SATDate = new Date(SAT);
    const currentDate = new Date();

    const totSec = (SATDate - currentDate) / 1000;
    const days = Math.floor(totSec / 3600 / 24);
    const hours = Math.floor(totSec / 3600 / 24);
    const min = Math.floor(totSec / 3600 / 24);
    const sec = Math.floor(totSec / 3600 / 24);

    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('min').innerText = formatTime(min);
    document.getElementById('sec').innerText = formatTime(sec);
}

setInterval(countdown,1000)