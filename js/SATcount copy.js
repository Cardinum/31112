document.addEventListener('DOMContentLoaded', () => {
    const SAT = '18 nov 2022 08:40:00 GMT+0900'
    const SATDate = new Date(SAT);
    const currentDate = new Date();

    var remainTime = (SATDate - currentDate) / 1000
        .start()

        .ifEnded(() => {
            console.log('수능 끝!');
        });
     
});