import { soundTick } from "./sound.js"

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("sec");


let startTimer = null;

start.addEventListener('click', function () {

    function startInterval() {
        startTimer = setInterval(function () {
            timer();
        }, 1000);
    }
    startInterval();
    soundTick.play();
})

reset.addEventListener('click', function () {
    h.value = 0;
    m.value = 0;
    s.value = 0;

    stopInterval();
    soundTick.stop();
})

function timer() {
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 0;
        m.value = 0;
        s.value = 0;
        soundTick.stop();

    } else if (s.value != 0) {
        s.value--;

    } else if (m.value != 0 && s.value == 0) {
        s.value = 59;
        m.value--;

    } else if (h.value != 0 && m.value == 0) {
        m.value = 60;
        h.value--;

    }
    return;
}

function stopInterval() {
    clearInterval(startTimer);
}

stop.addEventListener('click', function () {
    stopInterval();
    soundTick.stop();
})