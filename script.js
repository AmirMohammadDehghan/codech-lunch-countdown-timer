daysCount = document.querySelector('[data-days]');
hoursCount = document.querySelector('[data-hours]');
minutesCount = document.querySelector('[data-minutes]');
secondsCount = document.querySelector('[data-seconds]');


const date = new Date();
date.setDate(7);



function countdown(){
    const currDate = new Date();
    const remDate = new Date(date);
    
    // const totalSeconds = (remDate - currDate) / 1000;
    // const days = Math.floor(totalSeconds / (3600 * 24));
    // const hours = Math.floor(totalSeconds) / 3600 ;
    // const minutes = Math.floor(totalSeconds) / 60;
    // const seconds = Math.floor(totalSeconds - minutes)  * 60;



    const totalSeconds = (remDate - currDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysCount.innerHTML = formatTime(days);
    hoursCount.innerHTML = formatTime(hours);
    minutesCount.innerHTML = formatTime(minutes);
    secondsCount.innerHTML = formatTime(seconds);
}

 function formatTime(time){
     return time < 10 ? (`0${time}`) : time;
 }

countdown();

setInterval(countdown, 1000);
