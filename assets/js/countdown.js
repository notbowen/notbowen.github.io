let day = document.querySelector('.days')
let hour = document.querySelector('.hours')
let minute = document.querySelector('.minutes')
let second = document.querySelector('.seconds')
let mainBox = document.querySelector('.main_box')

setInterval(function(){

    let UpcomingDate = new Date('17 October 2022 12:00:00 AM');
    let NowDate = new Date();
    let differanceTime  = Math.floor((UpcomingDate-NowDate)/1000)
    
    
    let differanceDay = Math.floor(differanceTime/60/60/24)
    let differanceHour = Math.floor((differanceTime/60/60)%24)
    let differanceMinute = Math.floor((differanceTime/60)%60)
    let differanceSecound = Math.floor(differanceTime%60)
    
    
    
    if(differanceDay >= 0){
        mainBox.style.display = "block";
        day.innerHTML =  differanceDay;
        hour.innerHTML =  differanceHour;
        minute.innerHTML =differanceMinute;
        second.innerHTML = differanceSecound;   
    }


},1000)
