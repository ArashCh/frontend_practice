var minutes;
var seconds;
let interval;
let resetWatch = () => {
    minutes = 0;
    seconds = 0;
};
let showWatch = () => {
    let mins = minutes < 10 ? "0"+minutes:minutes;
    let secs = seconds < 10 ? "0"+seconds:seconds;
    $("#time").text(mins+":"+secs);
};

resetWatch();

$("#btnStart").click(() => {
    interval = setInterval(()=>{
        if (seconds < 59) {
            seconds += 1;
        } else {
            minutes += 1;
            seconds = 0;
        }
        showWatch()
    }, 1000);
});
$("#btnStop").click( () => clearInterval(interval) );
$("#btnReset").click(()=>{
    clearInterval(interval);
    resetWatch()
    showWatch()
});
