const SAT2 = '18 nov 2021 16:32:00 GMT+0900'

function formatTime2(time) {
    return time < 10 ? '0' + time : time;
}

function countdown2() {
    const SATDate2 = new Date(SAT2);
    const currentDate2 = new Date();

    const totSec2 = (SATDate2 - currentDate2) / 1000;
    const days2 = Math.floor(totSec2 / 3600 / 24);
    const hours2 = (days2 * 24) + Math.floor(totSec2 / 3600) % 24;
    const min2 = Math.floor(totSec2 / 60) % 60;
    const sec2 = Math.floor(totSec2) % 60;

    document.getElementById('hours2').innerText = formatTime2(hours2);
    document.getElementById('min2').innerText = formatTime2(min2);
    document.getElementById('sec2').innerText = formatTime2(sec2);
}

setInterval(countdown2,1000)
