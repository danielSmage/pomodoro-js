
//variable

let workTittle = document.getElementById('focar');
let breakTittle = document.getElementById('parar');

let workTime = 25;
let breakTime = 5;

let seconds = '00';

//display

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

//start timer

function start() {
    //mudar botao
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';

    //mudar o tempo
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    //contagem regressiva
    let timerFunction = () => {
        //muda o display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        //começar
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1){
                if(breakCount % 2 === 0) {
                    //começar a pausa
                    workMinutes = breakMinutes;
                    breakCount++

                    // muda o painel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }else {
                    //continua o foco
                    workMinutes = workTime;
                    breakCount++

                    // muda o painel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    //começar contagem regressiva
    setInterval(timerFunction, 1000); // 1000 = 1s

}