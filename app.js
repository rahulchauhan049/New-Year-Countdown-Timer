const newYear = '26 Dec 2020 21:10'

const dayEl = document.querySelector('.day')
const houreEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const  secondEl = document.querySelector('.second')

function countdown () {
    const newYearsDate = new Date(newYear)
    const currentDate = new Date()

    let totalSeconds = (newYearsDate - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600  / 24);
    let houres = Math.floor( totalSeconds/ 3600)% 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds ) % 60;


    dayEl.innerHTML = days;
    houreEl.innerHTML = houres;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;
}

countdown()

setInterval(countdown, 1000)

