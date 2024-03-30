const clockContainer=document.querySelector('.top-collection__clock');
function updateClock() {
    clockContainer.innerText=new Date().toLocaleTimeString('uk');
}
setInterval(updateClock,1000);