let sec = 0;
let min = 0;
let hour = 0;
let interval;

function twoDigits(digit){
    if(digit < 10){
        return('0' + digit);
    }else{
        return(digit);
    }
}

function start(){   
    interval = setInterval(timer, 1000);
}

function pause(){
    clearInterval(interval);
}

function stop(){
    clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById("timer").innerText = '00:00:00';
}

function timer(){
    sec++
    if(sec == 60){
        min++
        sec = 0;
        if(min == 60){
            hour++
            min = 0;
        }
    }
    document.getElementById("timer").innerText = twoDigits(hour)+ ':' +twoDigits(min)+ ':' +twoDigits(sec);
}

