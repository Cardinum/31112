//import { Flip } from 'number-flip'
const SAT = '16 nov 2023 08:40:00 GMT+0900'

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function countdown() {
    const SATDate = new Date(SAT);
    const currentDate = new Date();
    if (currentDate >= SATDate) {
        document.getElementById('hours').innerText = "수";
        document.getElementById('min').innerText = "능";
        document.getElementById('sec').innerText = "끝";
    }
    else {
        const totSec = (SATDate - currentDate) / 1000;
        const days = Math.floor(totSec / 3600 / 24);
        const hours = (days * 24) + Math.floor(totSec / 3600) % 24;
        const min = Math.floor(totSec / 60) % 60;
        const sec = Math.floor(totSec) % 60;

        document.getElementById('hours').innerText = formatTime(hours);
        document.getElementById('min').innerText = formatTime(min);
        document.getElementById('sec').innerText = formatTime(sec);
    }
    

    
}

setInterval(countdown,1000)


