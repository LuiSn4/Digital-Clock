const hours = document.querySelector('.time-hours');
const minutes = document.querySelector('.time-minutes');
const seconds = document.querySelector('.time-seconds');

const time = setInterval(function time(){
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

});