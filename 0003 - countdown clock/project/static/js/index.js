const NOWRUZ_DATE = new Date(Date.UTC(year=2023, monthIndex=2, date=21, hours=7, minutes=28, seconds=10));

const interval = setInterval(calcTime, 1000);

function calcTime() {
    let now = new Date();
    let diffMs = NOWRUZ_DATE - now;
    let msToDays = 1000 * 60 * 60 * 24;
    let msToHours = 1000 * 60 * 60;
    let msToMinutes = 1000 * 60;
    let days = Math.floor(diffMs / msToDays)
    $("#days").text(days);
    // modulus to get time difference after subtracting the days
    let hours = Math.floor( (diffMs % msToDays) / msToHours)
    $("#hours").text(hours);
    // modulus to get time difference after subtracting the hours
    let minutes = Math.floor( (diffMs % msToHours) / msToMinutes)
    $("#minutes").text(minutes);
    // modulus to get time difference after subtracting the minutes
    let seconds = Math.floor( (diffMs % msToMinutes) / 1000)
    $("#seconds").text(seconds);
    if (diffMs < 1000) {
        stopTimer();
    }
}
function stopTimer() {
    clearInterval(interval);
}