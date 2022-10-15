const Start = '13 dec 2021 07:40:00 GMT+0900'

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function countdown() {
    const StartDate = new Date(Start);
    const currentDate = new Date();

    const totSec = (currentDate - StartDate) / 1000;
    const days = Math.floor(totSec / 3600 / 24);
    const hours = (days * 24) + Math.floor(totSec / 3600) % 24;
    const min = Math.floor(totSec / 60) % 60;
    const sec = Math.floor(totSec) % 60;

    document.getElementById('hours_spent').innerText = formatTime(hours);
    document.getElementById('min_spent').innerText = formatTime(min);
    document.getElementById('sec_spent').innerText = formatTime(sec);
}

setInterval(countdown,1000)
